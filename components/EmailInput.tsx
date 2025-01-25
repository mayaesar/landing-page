'use client'

import React, {useState} from "react";

export default function EmailInput() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }), // Send the email input to your API
            });

            if (response.ok) {
                setEmail('');
                setStatus('successfully joined! 🎉');

            } else {
                setStatus('Oops something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-4 md:mr-6">
                <input type="email"
                       name="email"
                       placeholder="example@email.com"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="bg-gray-400 bg-opacity-10 flex-1 rounded-md px-4 py-2 text-gray-700 focus:outline-pink-600"/>

                <button type="submit"
                        className="bg-pink-600 text-white rounded-md px-4 py-2 shrink-0 hover:bg-pink-700">Early Access
                </button>
            </form>
            {status && <p>{status}</p>}
        </div>

    )
}