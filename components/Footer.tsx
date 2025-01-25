
export default function Footer(){

    return (
        <footer className="flex flex-col w-full items-center gap-6 mb-10 pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row w-full items-center justify-between mb-6 gap-6">
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center">
                        <img src="/micory-icon-no-bg.svg" alt="logo of a bookmark" className="size-8"/>
                        <h1 className="text-pink-950 font-semibold">MIVORY</h1>
                    </div>
                    <a className="text-sm md:text-lg" href="/terms-and-conditions" target="_blank">Terms & Conditions </a>
                    <a className="text-sm md:text-lg" href="/privacy-policy" target="_blank">Privacy Policy </a>
                </div>

                <a href="#hero" className="bg-pink-600 text-white rounded-md px-4 py-2 shrink-0 hover:bg-pink-700">
                    Early Access
                </a>
            </div>

            <p className="text-xs text-gray-700">©2025 Mivory. All rights reserved.</p>

        </footer>
    );
}