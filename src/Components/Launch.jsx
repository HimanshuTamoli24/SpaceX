import React from "react";

function LaunchSection({ title, subtitle, imgSrc, buttonText, para }) {
    return (
        <div className="relative w-full h-screen flex items-center justify-start text-white uppercase">
            {/* Background Image */}
            <img
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src={imgSrc}
                alt="Launch Background"
            />

            {/* Content */}
            <div className="text-left left-8 bottom-28 sm:left-30 absolute z-10">
                <h1 className="font-extralight my-1.5 text-3xl  sm:text-3xl">{title}</h1>
                <h1 className="font-bold my-1.5 text-3xl sm:text-5xl">{subtitle}</h1>

                {/* Dynamic Button */}
                {buttonText ? <button className=" cursor-pointer border-white border-2 px-10 py-3 mt-6 font-bold text-sm uppercase hover:text-black hover:bg-white transition-discrete">
                    {buttonText}
                </button> : <p className="mt-2 max-w-[18rem] text-sm text-wrap ">{para}</p>
                }
            </div>
        </div>
    );
}

export default LaunchSection;
