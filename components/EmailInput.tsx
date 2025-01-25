'use client'

import React, {useState} from "react";
import Turnstile, { useTurnstile } from "react-turnstile";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function EmailInput() {
    const turnstile = useTurnstile();
    const [status, setStatus] = useState('');
    const [token, setToken] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!token) {
            setStatus('Captcha error.');
            turnstile.reset();
            return;
        }

        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email");

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token }), // Send the email input to your API
            });

            if (response.ok) {
                setStatus('successfully joined! 🎉');

            } else {
                setStatus('Oops something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('An unexpected error occurred. Please try again later.');
        }

        turnstile.reset();
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <div className="flex items-center gap-4 md:mr-6">
                    <input type="email"
                           name="email"
                           placeholder="example@email.com"
                           className="bg-gray-400 bg-opacity-10 flex-1 rounded-md px-4 py-2 text-gray-700 focus:outline-pink-600"
                    />

                    <button type="submit"
                            className="bg-pink-600 text-white rounded-md px-4 py-2 shrink-0 hover:bg-pink-700">Early
                        Access
                    </button>
                </div>

                {
                    turnstileSiteKey && (
                        <Turnstile sitekey={turnstileSiteKey} onVerify={setToken} theme="light" className="mt-3" />
                    )
                }
            </form>
            {status && <p>{status}</p>}
        </div>

    )
}