import Image from "next/image";

export default function AboutUs() {

    return(
        <section id="about-us" className="py-10">
            <div className="w-full">
                <h1 className="text-5xl font-theme font-bold py-4">About Us</h1>
                <p className="text-gray-700 md:text-lg">
                    Hi, we’re Maya and Colin, the developers behind Mivory! When we first started dating, we loved
                    sharing recipes, video ideas, and coding tools with each other. But over time, we found it hard to
                    remember where we saved specific posts or shared our favorite finds. That’s when the idea for
                    Mivory was born! It became such a time-saver for us that, after a year of using it ourselves, we
                    decided to share it with the world. We hope it helps you as much as it’s helped us!
                </p>
                <Image src="/maya-and-colin.svg" alt="Maya and Colin" width={500} height={500} />
            </div>
        </section>
    );
}