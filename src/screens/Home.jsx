import React from "react";
import LaunchSection from "../Components/Launch";

function Home() {
    return (
        <>
            {/* Main Background Section */}
            <div className="relative w-full h-screen flex items-center justify-start text-white uppercase">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    autoPlay
                    muted
                    loop
                    src="/video1.mp4"
                ></video>
 
                {/* Content */}
                <div className="text-left left-8 bottom-28 sm:left-30 absolute z-10">
                    <h3 className="sm:text-xl text-sm text-white/60">UPCOMING LAUNCH</h3>
                    <h1 className="font-bold my-1.5 text-3xl sm:text-5xl">Starship's Eighth</h1>
                    <h1 className="font-bold my-1.5 text-3xl sm:text-5xl">Flight Test</h1>
                    <button className=" cursor-pointer border-white border-2 px-10 py-3 mt-6 font-bold text-sm uppercase hover:text-black hover:bg-white transition-all">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Reusable Launch Sections */}
            <LaunchSection
                title="UPCOMING LAUNCH"
                subtitle="Starlink Mission"
                imgSrc="/image4.png"
                buttonText="WATCH"
            />
            <LaunchSection
                title="RECENT LAUNCH"
                subtitle="Starlink Mission"
                imgSrc="/image0.png"
                buttonText="REWATCH"
            />
            <LaunchSection
                title="ADVANCING HUMAN"
                subtitle="SPACEFLIGHT"
                imgSrc="/image1.png"
                buttonText="LEARN MORE"
            />
            <LaunchSection
                title="TO MAKE LIFE"
                subtitle="MULTIPLANETARY"
                imgSrc="/image2.png"
                buttonText="LEARN MORE"
            />
        </>
    );
}

export default Home;
