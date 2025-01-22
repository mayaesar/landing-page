import Image from "next/image";

export default function VideoDisplay({videoUrl}: {videoUrl: string}){

    return(
        <div className="relative w-full p-4 md:p-0 md:max-w-[280px] aspect-[8/16] shrink-0 overflow-hidden">
            {/* Video Inside Frame */}
            <video
                src={videoUrl}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full z-0 object-cover overflow-hidden rounded-3xl p-5 md:p-4"
            />
            {/* SVG Frame */}
            <Image
                src="/phoneMock.svg"
                alt="phone frame"
                fill={true}
                className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
            />

        </div>
    );
}