'use client';

import React, { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const set = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

    const canContinue = form.fullName !== "" && form.email !== "" && form.subject !== "" && form.message !== "";

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const payload = {
            "Full Name": form.fullName,
            "Email": form.email,
            "Phone": form.phone,
            "Company": form.company,
            "Subject": form.subject,
            "Message": form.message,
            "_subject": `New Contact Form: ${form.subject}`,
            "_replyto": form.email,
            "_template": "table",
            "_autoresponse": `Hello ${form.fullName},\n\nThank you for reaching out to Bucks Tech Help. We have received your message regarding "${form.subject}".\n\nOur team will review your enquiry and get back to you shortly.\n\nBest regards,\nBucks Tech Help Team\n[https://www.buckstechhelp.co.uk](https://www.buckstechhelp.co.uk)`
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
                setSubmitted(true);
            } else {
                alert("There was an issue sending your message. Please try again or email hello@buckstechhelp.co.uk directly.");
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
            {submitted && (
                <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto animate-fade-in">
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/15 flex items-center justify-center mb-7">
                        <CheckCircle2 size={44} className="text-emerald-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tight">Message Sent</h2>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-lg mx-auto">
                        Thank you for reaching out. Our team will review your message and get back to you shortly.
                    </p>
                </div>
            )}

            {!submitted && (
                <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto animate-fade-in">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-8">Send us a message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Full Name *</label>
                                    <input type="text" value={form.fullName} onChange={(e) => set('fullName', e.target.value)} required className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="John Smith" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Company <span className="text-slate-500 font-normal">(optional)</span></label>
                                    <input type="text" value={form.company} onChange={(e) => set('company', e.target.value)} className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="Company Name" />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Email *</label>
                                    <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} required className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-300 mb-2">Phone <span className="text-slate-500 font-normal">(optional)</span></label>
                                    <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="07XXX XXXXXX" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2">Subject *</label>
                                <input type="text" value={form.subject} onChange={(e) => set('subject', e.target.value)} required className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium" placeholder="How can we help you?" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-300 mb-2">Message *</label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) => set('message', e.target.value)}
                                    required
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-xl bg-slate-800/70 border border-slate-700 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-white font-medium resize-y"
                                    placeholder="Please describe your requirements in detail..."
                                />
                            </div>
                        </div>

                        <div className="flex justify-end mt-8 pt-6 border-t border-slate-800">
                            <button
                                type="submit"
                                disabled={!canContinue || submitting}
                                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-black hover:from-blue-600 hover:to-blue-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-600/20"
                            >
                                {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                                {submitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
