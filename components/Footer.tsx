
export default function Footer(){

    return (
        <footer className="flex flex-col w-full items-center gap-6 mb-10 pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row w-full items-center justify-between mb-6 gap-6">
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center">
                        <img src="/iconBookmarks.svg" alt="logo of a bookmark" className="size-8"/>
                        <h1 className="text-orange-600 font-semibold">Shelf It</h1>
                    </div>
                    <a className="text-sm md:text-lg" href="/terms-and-conditions" target="_blank">Terms & Conditions </a>
                    <a className="text-sm md:text-lg" href="/privacy-policy" target="_blank">Privacy Policy </a>
                </div>

                <button className="bg-black text-white text-sm rounded-md hover:bg-gray-800 py-2 px-4">
                    Download now
                </button>
            </div>

            <p className="text-xs text-gray-700">© 2025 Shelf It. All rights reserved.</p>

        </footer>
    );
}