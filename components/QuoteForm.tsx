'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, Loader2, MapPin } from 'lucide-react';

interface Props {
    locationSlug?: string;
    townName?: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

/**
 * Full list of property types for Step 1.
 *
 * NOTE: "Garden Office / Outbuilding" is conceptually a secondary structure
 * (not the whole property). It triggers a special flow: Step 2 is skipped and
 * "Garden Room Connection" is pre-selected. This is a known simplification —
 * a future pass could add a dedicated Garden-Office path if needed.
 */
const propertyTypes = [
    'Detached House',
    'Semi-Detached House',
    'Terraced House',
    'Flat / Apartment',
    'Office',
    'Farm or Estate',
    'Commercial Unit',
    // See NOTE above re: secondary-structure caveat
    'Garden Office / Outbuilding',
];

/** Base challenge options shown on Step 2 for most property types. */
const baseChallenges = [
    'Wi-Fi Dead Zones',
    'Garden Room Connection',
    'Office Cabling',
    'CCTV',
    'Not sure / just want it to work',
];

const budgets = [
    '£1,500 – £2,500',
    '£2,500 – £5,000',
    '£5,000+',
    'Unsure, need expert recommendation',
];

/** Property types that skip Step 2 entirely (challenges pre-selected). */
const GARDEN_OFFICE = 'Garden Office / Outbuilding';

/** Property types that put commercial options first in Step 2. */
const COMMERCIAL_TYPES = new Set(['Office', 'Commercial Unit']);

/** Property types that put residential options first in Step 2. */
const RESIDENTIAL_TYPES = new Set(['Detached House', 'Semi-Detached House', 'Terraced House', 'Flat / Apartment']);

/**
 * Returns the ordered challenge list for Step 2 based on the selected property type.
 * Farm or Estate gets an extra 6th option appended.
 */
function getChallengesForProperty(propertyType: string): string[] {
    if (COMMERCIAL_TYPES.has(propertyType)) {
        return [
            'Office Cabling',
            'CCTV',
            'Wi-Fi Dead Zones',
            'Garden Room Connection',
            'Not sure / just want it to work',
        ];
    }
    if (RESIDENTIAL_TYPES.has(propertyType)) {
        return [
            'Wi-Fi Dead Zones',
            'Garden Room Connection',
            'Office Cabling',
            'CCTV',
            'Not sure / just want it to work',
        ];
    }
    if (propertyType === 'Farm or Estate') {
        return [
            'Wi-Fi Dead Zones',
            'Garden Room Connection',
            'Office Cabling',
            'CCTV',
            // Extra option specific to Farm or Estate paths (long-distance runs between buildings)
            'Connecting multiple buildings / long-distance runs',
            'Not sure / just want it to work',
        ];
    }
    // Default (e.g. unrecognised type) — standard residential order
    return baseChallenges;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuoteForm({ locationSlug, townName }: Props) {

    const [step, setStep] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    const [form, setForm] = useState({
        propertyType: '',
        /** Multi-select: stores an array of selected challenge strings. */
        challenges: [] as string[],
        budget: '',
        fullName: '',
        addressPostcode: townName ?? '',
        email: '',
        phone: '',
        message: '',
        location: locationSlug ?? '',
    });

    const setField = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

    // ── Derived state ──────────────────────────────────────────────────────────

    /** True if the user selected Garden Office / Outbuilding — triggers 3-step flow. */
    const isGardenOffice = form.propertyType === GARDEN_OFFICE;

    /**
     * Total steps in the current path:
     * - Garden Office: 3 steps (property → budget → contact)
     * - All others: 4 steps (property → challenges → budget → contact)
     */
    const totalSteps = isGardenOffice ? 3 : 4;

    /**
     * Maps the internal step index (0–3) to the user-facing step number.
     * For the 3-step Garden Office path, step 2 is displayed as "Step 2 of 3"
     * and step 3 is displayed as "Step 3 of 3".
     */
    function displayStep(internalStep: number): number {
        if (isGardenOffice && internalStep >= 2) return internalStep - 1;
        return internalStep + 1;
    }

    const orderedChallenges = getChallengesForProperty(form.propertyType);

    /** Toggles a challenge in/out of the multi-select array. */
    function toggleChallenge(ch: string) {
        setForm((f) => {
            const already = f.challenges.includes(ch);
            return {
                ...f,
                challenges: already
                    ? f.challenges.filter((c) => c !== ch)
                    : [...f.challenges, ch],
            };
        });
    }

    // ── Validation ─────────────────────────────────────────────────────────────

    const canContinue =
        step === 0 ? form.propertyType !== '' :
        step === 1 ? form.challenges.length > 0 :
        step === 2 ? form.budget !== '' :
        form.fullName !== '' && form.addressPostcode !== '' && form.email !== '';

    // ── Navigation helpers ──────────────────────────────────────────────────────

    function goNext() {
        if (!canContinue) return;
        if (step === 0 && isGardenOffice) {
            // Skip Step 2 entirely — pre-select "Garden Room Connection" and jump to budget
            setForm((f) => ({ ...f, challenges: ['Garden Room Connection'] }));
            setStep(2);
        } else {
            setStep((s) => Math.min(3, s + 1));
        }
    }

    function goBack() {
        if (step === 2 && isGardenOffice) {
            // Jump back over the skipped Step 2
            setStep(0);
        } else {
            setStep((s) => Math.max(0, s - 1));
        }
    }

    // ── Step titles ─────────────────────────────────────────────────────────────

    const stepTitles = [
        'What type of property is it?',
        'What are your main challenges? Select all that apply.',
        "What's your estimated budget?",
        'Where should we send your scope?',
    ];

    /** Short motivational hint shown beneath the progress bar. */
    function progressHint(internalStep: number): string {
        const display = displayStep(internalStep);
        const last = totalSteps;
        if (display === last) return 'Last step — nearly done!';
        if (display === last - 1) return 'Almost there';
        return '';
    }

    // ── Submission ──────────────────────────────────────────────────────────────

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const payload = {
            'Full Name': form.fullName,
            'Email': form.email,
            'Phone': form.phone,
            'Message': form.message,
            'Property area or postcode': form.addressPostcode,
            'Property Type': form.propertyType,
            // Stored as joined string for email readability; array was collected client-side
            'Challenges': form.challenges.join(', '),
            'Selected Budget': form.budget,
            'Floorplan': fileName ?? '',
            '_subject': `🚨 NEW QUOTE AUDIT: ${form.fullName} (${form.addressPostcode})`,
            '_replyto': form.email,
            '_template': 'table',
            '_autoresponse': `Hello ${form.fullName},\n\nThank you for submitting your property audit request for ${form.addressPostcode}.\n\nOur engineering team at Bucks Tech Help is reviewing your requirements and will email your preliminary scope and fixed pricing within 24 hours.\n\nBest regards,\nBucks Tech Help Engineering Team\n[https://www.buckstechhelp.co.uk](https://www.buckstechhelp.co.uk)`,
        };

        try {
            const response = await fetch('https://formsubmit.co/ajax/hello@buckstechhelp.co.uk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('There was an issue submitting your audit. Please try again or email hello@buckstechhelp.co.uk');
            }
        } catch (error) {
            console.error('FormSubmit Error:', error);
            alert('Submission error. Please check your network connection.');
        } finally {
            setSubmitting(false);
        }
    }

    // ── Render ──────────────────────────────────────────────────────────────────

    return (
        <>
        {/* CONFIRMATION */}
        {submitted && (
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/15 flex items-center justify-center mb-7">
                    <CheckCircle2 size={44} className="text-emerald-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tight">Thank You</h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-lg mx-auto">
                    Our engineering team is reviewing your property layout and will email your preliminary scope within 24 hours.
                </p>
            </div>
        )}
        {/* FORM */}
        {!submitted && (
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">

                {/* ── Progress bar ── */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black uppercase tracking-wider text-blue-400">
                            Step {displayStep(step)} of {totalSteps}
                        </span>
                        <span className="text-xs font-bold text-slate-500 text-right">{stepTitles[step]}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full">
                        <div
                            className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
                            style={{ width: `${(displayStep(step) / totalSteps) * 100}%` }}
                        />
                    </div>
                    {/* Motivational hint — only shown on penultimate and final steps */}
                    {progressHint(step) && (
                        <p className="text-xs text-blue-300 font-semibold mt-2 text-right">
                            {progressHint(step)}
                        </p>
                    )}
                </div>

                <form onSubmit={handleSubmit}>

                    {/* ── STEP 1: Property type ── */}
                    {step === 0 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{stepTitles[0]}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {propertyTypes.map((type) => (
                                    <button
                                        type="button"
                                        key={type}
                                        onClick={() => setField('propertyType', type)}
                                        className={`text-left p-6 rounded-2xl border-2 font-bold transition-all ${
                                            form.propertyType === type
                                                ? 'border-blue-500 bg-blue-500/10 text-white'
                                                : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500'
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                            {form.propertyType === GARDEN_OFFICE && (
                                <p className="text-xs text-blue-300 mt-4 font-medium">
                                    🌿 We&apos;ll pre-select &ldquo;Garden Room Connection&rdquo; for you and take you straight to budget.
                                </p>
                            )}
                        </div>
                    )}

                    {/* ── STEP 2: Challenges (multi-select, skipped for Garden Office) ── */}
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">{stepTitles[1]}</h2>
                            <p className="text-sm text-slate-400 font-medium mb-8">Choose as many as apply — we&apos;ll tailor the scope to match.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {orderedChallenges.map((ch) => {
                                    const selected = form.challenges.includes(ch);
                                    return (
                                        <button
                                            type="button"
                                            key={ch}
                                            onClick={() => toggleChallenge(ch)}
                                            className={`text-left p-6 rounded-2xl border-2 font-bold transition-all ${
                                                selected
                                                    ? 'border-blue-500 bg-blue-500/10 text-white'
                                                    : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500'
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={`w-4 h-4 shrink-0 rounded border-2 flex items-center justify-center transition-colors ${selected ? 'border-blue-500 bg-blue-500' : 'border-slate-600'}`}>
                                                    {selected && (
                                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                                                            <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    )}
                                                </span>
                                                {ch}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* ── STEP 3: Budget ── */}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{stepTitles[2]}</h2>
                            <div className="space-y-4">
                                {budgets.map((b) => (
                                    <button
                                        type="button"
                                        key={b}
                                        onClick={() => setField('budget', b)}
                                        className={`w-full text-left p-6 rounded-2xl border-2 font-bold transition-all ${
                                            form.budget === b
                                                ? 'border-blue-500 bg-blue-500/10 text-white'
                                                : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500'
                                        }`}
                                    >
                                        {b}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 mt-4">Projects typically start from £1,500. A fixed quote is provided after our review.</p>
                        </div>
                    )}

                    {/* ── STEP 4: Contact details ── */}
                    {step === 3 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{stepTitles[3]}</h2>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        value={form.fullName}
                                        onChange={(e) => setField('fullName', e.target.value)}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium"
                                        placeholder="John Smith"
                                    />
                                </div>
                                <div>
                                    {/* Label updated from "Address / Postcode" to match the placeholder which only requests an area, not a full street address */}
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Property area or postcode *</label>
                                    <input
                                        type="text"
                                        value={form.addressPostcode}
                                        onChange={(e) => setField('addressPostcode', e.target.value)}
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium"
                                        placeholder="e.g. Beaconsfield, HP9"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setField('email', e.target.value)}
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => setField('phone', e.target.value)}
                                            className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium"
                                            placeholder="07XXX XXXXXX"
                                        />
                                    </div>
                                </div>
                                {/* Privacy trust line — reassures users their contact details are safe */}
                                <p className="text-xs text-slate-500 -mt-1">
                                    🔒 We&apos;ll only use this to send your quote — no spam, no shared data.
                                </p>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">
                                        Tell us a bit about what you&apos;re looking to achieve{' '}
                                        <span className="text-slate-500 font-normal">(optional)</span>
                                    </label>
                                    <textarea
                                        value={form.message}
                                        onChange={(e) => setField('message', e.target.value)}
                                        rows={4}
                                        className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium resize-y"
                                        placeholder="Looking to cover the front drive and back garden with 24/7 recording, or need help fixing a dead zone in the master bedroom..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">
                                        Floorplan / Photos <span className="text-slate-500 font-normal">(optional)</span>
                                    </label>
                                    <label className="flex flex-col items-center justify-center gap-2 w-full px-5 py-8 rounded-xl border-2 border-dashed border-slate-700 bg-slate-800/40 hover:border-blue-500 cursor-pointer transition-all text-center">
                                        <Upload size={24} className="text-blue-400" />
                                        <span className="text-sm text-slate-300 font-medium">
                                            {fileName ? fileName : 'Upload floorplan, site photos, or rough sketch'}
                                        </span>
                                        <span className="text-xs text-slate-500">(Optional - helps us quote faster) · PNG, JPG or PDF, up to 10MB</span>
                                        <input
                                            type="file"
                                            accept=".png,.jpg,.jpeg,.pdf"
                                            className="hidden"
                                            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── Navigation buttons ── */}
                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-800">
                        <button
                            type="button"
                            onClick={goBack}
                            disabled={step === 0}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 font-bold hover:border-slate-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        >
                            <ArrowLeft size={18} /> Back
                        </button>

                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={goNext}
                                disabled={!canContinue}
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-black hover:from-blue-600 hover:to-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20"
                            >
                                Continue <ArrowRight size={18} />
                            </button>
                        ) : (
                            /*
                             * A/B TEST NOTE: The Submit button uses emerald (green) intentionally.
                             * It provides contrast against the blue flow and may improve conversion.
                             * Recommendation: run a 50/50 A/B test against blue before changing.
                             * Do NOT change this colour without data to support it.
                             */
                            <button
                                type="submit"
                                disabled={!canContinue || submitting}
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-600/20"
                            >
                                {submitting ? <Loader2 size={18} className="animate-spin" /> : <CheckCircle2 size={18} />}
                                {submitting ? 'Submitting...' : 'Submit Request'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        )}
        </>
    );
}