

export default function HowTo(){

    return(
        <section id="how-to">
            <div className="md:h-dvh md:flex items-center justify-center gap-24">
                <div>
                    <h1 className="text-6xl font-theme font-bold mb-6">
                        All of your favourite content
                        {" "}<span className="text-orange-600">Saved</span>{" "}
                        in one place
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="relative w-full md:w-[280px] shrink-0 h-full">
                    <img src="/phoneMock.png" alt="phone frame" className="md:absolute top-[10%]"/>
                </div>
            </div>

            <div className="md:h-dvh flex flex-col-reverse md:flex-row items-center justify-center gap-24">
                <div className="relative w-full md:w-[280px] shrink-0 h-full">
                    <img src="/phoneMock.png" alt="phone frame" className="md:absolute top-[10%]"/>
                </div>
                <div>
                    <h1 className="text-6xl font-theme font-bold mb-6">
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

            <div className="md:h-dvh md:flex items-center justify-center gap-24">
                <div>
                    <h1 className="text-6xl font-theme font-bold mb-6">
                        Share your favourites by
                        {" "}<span className="text-orange-600">Collaborating</span>{" "}
                        with your friends & family
                    </h1>
                    <p className="text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="relative w-full md:w-[280px] shrink-0 h-full">
                    <img src="/phoneMock.png" alt="phone frame" className="md:absolute top-[10%]"/>
                </div>
            </div>
        </section>

    )
}