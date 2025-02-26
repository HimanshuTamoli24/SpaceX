import React from "react";
import { motion } from "framer-motion";

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
            <motion.div
                className="text-left left-8 bottom-28 sm:left-30 absolute z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="font-extralight my-1.5 text-3xl sm:text-3xl">{title}</h1>
                <h1 className="font-bold my-1.5 text-3xl sm:text-5xl">{subtitle}</h1>

                {/* Dynamic Button */}
                {buttonText ? (
                    <motion.button
                        className="cursor-pointer border-white border-2 px-10 py-3 mt-6 font-bold  text-sm uppercase hover:text-black hover:bg-white transition-discrete"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {buttonText}
                    </motion.button>
                ) : (
                    <motion.p
                        className="mt-2 max-w-[18rem] text-sm  text-wrap"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        {para}
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
}

export default LaunchSection;
