import React from 'react';
import LaunchSection from '../Components/Launch';
import ImageSlider from '../Components/Slider';
function Falcon() {
  const newImages = [
    "/10002.jpg",
    "/10003.jpg",
    "/10004.jpg",
    "/10005.jpg",
    "/10006.jpg",
    "/10007.jpg",
    "/10008.jpg",
    "/10009.jpg",
    "/10010.jpg",
    "/10011.jpg",
    "/10012.jpg",
    " public/10011.jpg"

  ];

  return (
    <>
      {/* Background Section */}
      <div className="relative min-h-screen w-full">
        {/* Background Image */}
        <img
          src="/10002.jpg"
          className="absolute inset-0 w-full h-full object-cover -z-10"
          alt="Falcon 9 Background"
        />

        {/* Falcon 9 Heading Section */}
        <div className="relative flex flex-col justify-center items-center h-screen text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase">Falcon 9</h1>
          <h3 className="text-lg sm:text-xl my-2.5 uppercase">
            First Orbital Class Rocket Capable of Reflight
          </h3>
        </div>
      </div>

      {/* Launch Section */}
      <LaunchSection
        title="Falcon 9 In Flight"
        subtitle="Video"
        imgSrc="/10004.jpg"
        buttonText="View Live"
      />
      <LaunchSection
        title="Engines"
        subtitle="Merlin"
        imgSrc="/10005.jpg"
        para="Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse."
      />
      <ImageSlider media={newImages}  />

      <div className='w-full min-h-80 justify-center flex flex-col items-center'>
        <p className='text-sm text-center text-white/50'>For information about our launch services, contact sales@spacex.com</p>
        <div className='flex-col flex justify-center items-center gap-2.5 '>
          <button className=" cursor-pointer border-white border-2 px-10 py-3 mt-6 font-bold text-sm uppercase hover:text-black hover:bg-white transition-all">
            Download User's Guide
          </button>
          <button className=" cursor-pointer border-white border-2 px-10 py-3 mt-6 font-bold text-sm uppercase hover:text-black hover:bg-white transition-all">
            Capabilities and Services
          </button></div>
      </div>

    </>
  );
}

export default Falcon;
