
export default function Header(){
    return (
        <nav className="flex items-center gap-6 md:gap-60 text-2xl">
            <div className="flex items-center gap-2 shrink-0">
                <img src="/micory-icon-no-bg.svg" alt="mivory icon: smart elephant" className="size-16"/>
                <h1 className="hidden md:block text-pink-950 font-semibold">MIVORY</h1>
            </div>
            <div className="flex items-center gap-6 text-lg">
                <a href="#how-to">How To Use</a>
                <a href="#about-us">About Us</a>
            </div>
        </nav>
    );
}