import VideoDisplay from "@/components/VideoDisplay";


export default function HowTo(){

    return(
        <section id="how-to">
            <div className="md:h-dvh flex flex-col md:flex-row items-center justify-center py-12 md:py-0 gap-12 md:gap-24 mb-12 md:mb-0">
                <div>
                    <h1 className="text-4xl md:text-6xl font-theme font-bold mb-6">
                        <span className="text-pink-700">Save</span>{" "}Everything, Effortlessly
                    </h1>
                    <p className="text-gray-700 md:text-lg">
                        Instantly save links, articles, and media from anywhere online. With easy-to-use tools at your fingertips, capturing content on the go has never been simpler.
                    </p>
                </div>
                <VideoDisplay videoUrl="/videoTest.MP4" />
            </div>

            <div className="md:h-dvh flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24 mb-12 md:mb-0">
                <VideoDisplay videoUrl="/videoTest.MP4" />
                <div>
                    <h1 className="text-4xl md:text-6xl font-theme font-bold mb-6">
                       <span className="text-pink-700">Organize</span>{" "}Your World
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Create custom collections to categorize your saved content in a way that makes sense for you. Whether it’s for work, study, or personal interests, our intuitive design helps you find what you need, exactly when you need it.
                    </p>
                </div>
            </div>

            <div className="md:h-dvh flex flex-col md:flex-row items-center justify-center py-8 md:py-0 gap-12 md:gap-24 mb-12 md:mb-0">
                <div>
                    <h1 className="text-4xl md:text-6xl font-theme font-bold mb-6">
                        <span className="text-pink-700">Collaborate</span>{" "}with Ease
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Share your collections with friends, family, or colleagues. Work together, exchange ideas, and discover new content as a team. Collaboration has never been so simple and inspiring.
                    </p>
                </div>
                <VideoDisplay videoUrl="/videoTest.MP4" />
            </div>
        </section>

    )
}