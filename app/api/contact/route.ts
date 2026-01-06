import { ContactFormEmail } from '@/components/email/contact-form-email';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate required fields
        const { firstName, lastName, email, service, message } = body;

        if (!firstName || !lastName || !email || !service || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'PodLab Contact Form <noreply@podlablv.com>',
            to: ['info@podlablv.com'],
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            react: ContactFormEmail({
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                phone: body.phone,
                company: body.company,
                website: body.website,
                service: body.service,
                budget: body.budget,
                message: body.message,
                referral: body.referral,
            }),
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: error.message || 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
