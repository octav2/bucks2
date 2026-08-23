'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, Loader2, MapPin } from 'lucide-react';

interface Props {
    locationSlug?: string;
    townName?: string;
}

export default function QuoteForm({ locationSlug, townName }: Props) {

const propertyTypes = ["Detached House", "Office", "Farm or Estate", "Commercial Unit", "Garden Office / Outbuilding"];
const challenges = ["Wi-Fi Dead Zones", "Garden Room Connection", "Office Cabling", "CCTV"];
const budgets = ["£1,500 – £2,500", "£2,500 – £5,000", "£5,000+", "Unsure — need expert recommendation"];

const stepTitles = [
    "What type of property is it?",
    "What's your main challenge?",
    "What's your estimated budget?",
        "Where should we send your scope?",
];

    const [step, setStep] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

        const [form, setForm] = useState({
        propertyType: "",
        challenge: "",
        budget: "",
        fullName: "",
        addressPostcode: townName ?? "",
        email: "",
        phone: "",
        message: "",
        location: locationSlug ?? "",
    });

    const set = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

    const canContinue =
        step === 0 ? form.propertyType !== "" :
        step === 1 ? form.challenge !== "" :
        step === 2 ? form.budget !== "" :
        form.fullName !== "" && form.addressPostcode !== "" && form.email !== "";

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const payload = {
            "Full Name": form.fullName,
            "Email": form.email,
            "Phone": form.phone,
            "Message": form.message,
            "Address / Postcode": form.addressPostcode,
            "Property Type": form.propertyType,
            "Primary Challenge": form.challenge,
            "Selected Budget": form.budget,
            "Floorplan": fileName ?? "",
            "_subject": `🚨 NEW QUOTE AUDIT: ${form.fullName} (${form.addressPostcode})`,
            "_replyto": form.email,
            "_template": "table",
            "_autoresponse": `Hello ${form.fullName},\n\nThank you for submitting your property audit request for ${form.addressPostcode}.\n\nOur engineering team at Bucks Tech Help is reviewing your requirements and will email your preliminary scope and fixed pricing within 24 hours.\n\nBest regards,\nBucks Tech Help Engineering Team\n[https://www.buckstechhelp.co.uk](https://www.buckstechhelp.co.uk)`
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/hello@buckstechhelp.co.uk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setSubmitted(true); // Move to "Thank You" confirmation step
            } else {
                alert("There was an issue submitting your audit. Please try again or email hello@buckstechhelp.co.uk");
            }
        } catch (error) {
            console.error("FormSubmit Error:", error);
            alert("Submission error. Please check your network connection.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <>
        {/*_CONFIRMATION*/}
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
        {/*_CONFIRMATION_END*/}
        {/*_FORM_JSX*/}
        {!submitted && (
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
                {/* Progress */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-black uppercase tracking-wider text-blue-400">Step {step + 1} of 4</span>
                        <span className="text-xs font-bold text-slate-500 text-right">{stepTitles[step]}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full">
                        <div
                            className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
                            style={{ width: `${((step + 1) / 4) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* STEP 1 */}
                    {step === 0 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{stepTitles[0]}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {propertyTypes.map((type) => (
                                    <button
                                        type="button"
                                        key={type}
                                        onClick={() => set('propertyType', type)}
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
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{stepTitles[1]}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {challenges.map((ch) => (
                                    <button
                                        type="button"
                                        key={ch}
                                        onClick={() => set('challenge', ch)}
                                        className={`text-left p-6 rounded-2xl border-2 font-bold transition-all ${
                                            form.challenge === ch
                                                ? 'border-blue-500 bg-blue-500/10 text-white'
                                                : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500'
                                        }`}
                                    >
                                        {ch}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{stepTitles[2]}</h2>
                            <div className="space-y-4">
                                {budgets.map((b) => (
                                    <button
                                        type="button"
                                        key={b}
                                        onClick={() => set('budget', b)}
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

                    {/* STEP 4 */}
                    {step === 3 && (
                        <div className="animate-fade-in">
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8">{stepTitles[3]}</h2>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Full Name *</label>
                                    <input type="text" value={form.fullName} onChange={(e) => set('fullName', e.target.value)} required className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="John Smith" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Address / Postcode *</label>
                                    <input type="text" value={form.addressPostcode} onChange={(e) => set('addressPostcode', e.target.value)} required className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="e.g. Beaconsfield, HP9" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2">Email *</label>
                                        <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} required className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-300 mb-2">Phone</label>
                                        <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="07XXX XXXXXX" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Tell us a bit about what you're looking to achieve <span className="text-slate-500 font-normal">(optional)</span></label>
                                    <textarea
                                        value={form.message}
                                        onChange={(e) => set('message', e.target.value)}
                                        rows={4}
                                        className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium resize-y"
                                        placeholder="Looking to cover the front drive and back garden with 24/7 recording, or need help fixing a dead zone in the master bedroom..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Floorplan / Photos <span className="text-slate-500 font-normal">(optional)</span></label>
                                    <label className="flex flex-col items-center justify-center gap-2 w-full px-5 py-8 rounded-xl border-2 border-dashed border-slate-700 bg-slate-800/40 hover:border-blue-500 cursor-pointer transition-all text-center">
                                        <Upload size={24} className="text-blue-400" />
                                        <span className="text-sm text-slate-300 font-medium">{fileName ? fileName : "Upload floorplan, site photos, or rough sketch"}</span>
                                        <span className="text-xs text-slate-500">(Optional - helps us quote faster) · PNG, JPG or PDF, up to 10MB</span>
                                        <input type="file" accept=".png,.jpg,.jpeg,.pdf" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Nav */}
                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-800">
                        <button
                            type="button"
                            onClick={() => setStep((s) => Math.max(0, s - 1))}
                            disabled={step === 0}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-300 font-bold hover:border-slate-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        >
                            <ArrowLeft size={18} /> Back
                        </button>

                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={() => canContinue && setStep((s) => Math.min(3, s + 1))}
                                disabled={!canContinue}
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-black hover:from-blue-600 hover:to-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20"
                            >
                                Continue <ArrowRight size={18} />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={!canContinue || submitting}
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-600/20"
                            >
                                {submitting ? <Loader2 size={18} className="animate-spin" /> : <CheckCircle2 size={18} />}
                                {submitting ? "Submitting..." : "Submit Request"}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        )}
        {/*_FORM_JSX_END*/}
        </>
    );
}