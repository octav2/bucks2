// app/api/quote/route.ts
// Quote-audit submission endpoint.
// NOTE: Wire this to your email provider (Resend, SendGrid, form backend) as needed.
// For now it validates the payload and returns success so the form confirmation can display.

import { NextResponse } from 'next/server';

interface QuotePayload {
    propertyType?: string;
    challenge?: string;
    budget?: string;
    name?: string;
    address?: string;
    email?: string;
    phone?: string;
    floorplan?: string | null;
}

export async function POST(request: Request) {
    try {
        const body: QuotePayload = await request.json();

        const required = [
            body.propertyType,
            body.challenge,
            body.budget,
            body.name,
            body.address,
            body.email,
        ];

        if (required.some((v) => typeof v !== 'string' || (v as string).trim() === '')) {
            return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
        }

        // TODO: dispatch to your email/SMS pipeline here.
        console.log('[quote] lead received', body);

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
    }
}
