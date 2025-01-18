import { BiLogoInstagram, BiLogoPinterestAlt, BiLogoGoogle, BiLogoTiktok, BiLogoYoutube, BiNotepad, BiMap } from "react-icons/bi";
import { SiX } from "react-icons/si";

export default function Hero(){

    return(
        <section className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-24">
            <div className="relative w-full md:w-[280px] shrink-0 h-full">
                <img src="/phoneMock.png" alt="phone frame" className="px-12 md:px-0 md:absolute md:top-[10%]"/>
            </div>
            <div>
                <h1 className="font-theme text-gray-900 text-5xl md:text-7xl font-bold mb-6">Save, Organize, <br/> Collaborate</h1>
                <p className="text-gray-700 text-lg">
                    Organize your bookmarks, notes, and projects in one
                    place. Collaborate with others to share and manage your bookmarks.
                </p>
                <div className="flex items-center justify-between md:justify-start gap-2 md:gap-4 mt-12 mb-6">
                    <BiLogoInstagram className="size-8"/>
                    <BiLogoGoogle className="size-8"/>
                    <BiLogoTiktok className="size-8"/>
                    <SiX className="size-6"/>
                    <BiLogoYoutube className="size-8"/>
                    <BiLogoPinterestAlt className="size-8"/>
                    <BiNotepad className="size-8"/>
                    <BiMap className="size-8"/>
                </div>
                <div className="flex justify-center md:block">
                    <button className="bg-black text-white rounded-md hover:bg-gray-800 py-3 px-6">
                        Download now
                    </button>
                </div>
            </div>
        </section>
    )
}