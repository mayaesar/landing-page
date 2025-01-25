import { Resend } from 'resend';
import WelcomeEmail from "@/components/WelcomeEmail";




const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
        return new Response('Invalid email address', {
            status: 400,
        })
    }

    try {
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