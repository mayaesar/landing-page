
export default function Header(){
    return (
        <nav className="flex items-center gap-6 md:gap-60 text-2xl">
            <div className="flex items-center shrink-0">
                <img src="/iconBookmarks.svg" alt="logo of a bookmark" className="size-16"/>
                <h1 className="hidden md:block text-orange-600 font-semibold">Shelf It</h1>
            </div>
            <div className="flex items-center gap-6 text-lg">
                <a href="#how-to">How To Use</a>
                <a href="#about-us">About Us</a>
            </div>
        </nav>
    );
}