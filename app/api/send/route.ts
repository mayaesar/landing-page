import { Resend } from 'resend';
import WelcomeEmail from "@/components/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const runtime = process.env.NODE_ENV === 'production' ? 'edge' : undefined;

const validateTurnstile = async (token: string, ip: string | null) => {
    const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: token,
            remoteip: ip,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const outcome = await result.json();

    if (!outcome.success) {
        throw new Error("Captcha error");
    }
}

export async function POST(request: Request) {
    const { email, token } = await request.json()
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');

    if (!email || typeof email !== 'string') {
        return new Response('Invalid email address', {
            status: 400,
        })
    }

    if (!token) {
        return new Response('Captcha error', {
            status: 400,
        })
    }

    try {
        await validateTurnstile(token, ip);

        const result = await resend.emails.send({
            from: 'welcome@mivory.app',
            to: email,
            subject: 'Welcome to Mivory!',
            react: WelcomeEmail()
        });

        return Response.json(result)
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Failed to send email', {
            status: 500,
        })
    }
}