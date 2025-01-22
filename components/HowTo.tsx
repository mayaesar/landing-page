import Image from "next/image";
import VideoDisplay from "@/components/VideoDisplay";


export default function HowTo(){

    return(
        <section id="how-to">
            <div className="md:h-dvh flex flex-col md:flex-row items-center justify-center py-12 md:py-0 gap-12 md:gap-24 mb-12 md:mb-0">
                <div>
                    <h1 className="text-4xl md:text-6xl font-theme font-bold mb-6">
                        All of your favourite content
                        {" "}<span className="text-orange-600">Saved</span>{" "}
                        in one place
                    </h1>
                    <p className="text-gray-700 md:text-lg">
                        Instantly create a bookmark from any platform on the web and always have access to it.
                    </p>
                </div>
                <VideoDisplay videoUrl="/videoTest.MP4" />
            </div>

            <div className="md:h-dvh flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 mb-12 md:mb-0">
                <VideoDisplay videoUrl="/videoTest.MP4" />
                <div>
                    <h1 className="text-4xl md:text-6xl font-theme font-bold mb-6">
                        All of your saved content
                        {" "}<span className="text-orange-600">Organized</span>{" "}
                        the way you want
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            <div className="md:h-dvh flex flex-col md:flex-row items-center justify-center py-8 md:py-0 gap-12 md:gap-24 mb-12 md:mb-0">
                <div>
                    <h1 className="text-4xl md:text-6xl font-theme font-bold mb-6">
                        Share your favourites by
                        {" "}<span className="text-orange-600">Collaborating</span>{" "}
                        with your friends & family
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
                <VideoDisplay videoUrl="/videoTest.MP4" />
            </div>
        </section>

    )
}