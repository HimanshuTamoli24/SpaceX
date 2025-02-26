import React from 'react';
import LaunchSection from '../Components/Launch';
import ImageSlider from "../Components/Slider.jsx"
function Heavy() {
  const newImage = [
    "/heavy/10001.jpg",
    "/heavy/10002.jpg",
    "/heavy/10003.jpg",
    "/heavy/10004.jpg",
    "/heavy/10005.jpg",
    "/heavy/10006.jpg",
    "/heavy/10007.jpg",
    "/heavy/10008.jpg",
    "/heavy/10009.jpg",
    "/heavy/10010.jpg",
  ]
  return (
    <>
      <div className='min-h-screen w-full relative z-10'>
        {/* Correct the image path */}
        <img className="w-full h-full object-cover absolute z-[-1]" src="/heavy/10001.jpg" alt="heavy" />
        <div className='relative flex flex-col justify-center items-center uppercase h-screen text-center text-white'>
          <h1 className='  sm:text-7xl text-4xl font-bold'>
            Falcon Heavy
          </h1>
          <h6 className='text-xl  my-3 font-extralight'>
            Over 5 Million Lbs of Thrust
          </h6>
        </div>
      </div>

      <LaunchSection
        imgSrc="/heavy/10002.jpg"
        subtitle="Falcon Heavy First 
        Flight"
        title="Video" />

      <LaunchSection
        imgSrc="/heavy/10003.jpg"
        title="Engines"
        subtitle="Falcon 9 Fuel Cells"
        para="Falcon 9's Fuel Cells are a combination of solid-state and liquid-state cells, with solid cells being the primary fuel cell materials used in Falcon 9's first stage and liquid cells being used in the second stage." />


      <div className="relative w-full min-h-screen flex flex-col  gap-y-4 sm:flex-row items-center justify-center z-10">
        {/* Image Section */}
        <img
          className="w-full sm:w-4xl object-center object-cover h-auto rounded-xl border hover:border-2 hover:border-blue-100 sm:mx-20 mx-4"
          src="/heavy/10004.jpg"
          alt="Falcon Heavy"
        />

        {/* Text Section */}
        <div className="flex flex-col items-start sm:ml-10 sm:mx-8 uppercase p-3 w-full sm:w-1/2 text-white gap-y-5">
          <h1 className="text-2xl sm:text-3xl">Unmatched Performance</h1>
          <p className="text-sm sm:text-base text-white/60">
            With more than 5 million pounds of thrust at liftoff, Falcon Heavy is one of the most capable rockets flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage, and fuel—to orbit.
          </p>
        </div>
      </div>


      <div className='relative w-full min-h-screen flex items-center justify-start z-10'>
        <img className="w-full h-full object-cover absolute z-[-1]" src="/10005.jpg" alt="heavy" />

        <div className='  flex flex-col  uppercase  pr-4 items-start ml-10 w-1/3 text-white gap-y-5'>
          <p className='text-sm   font-extralight flex justify-end break-words  '>  ENGINES</p>
          <h1 className='text-xl  flex justify-end break-words '> SEA LEVEL | <span className=' px-1 text-amber-50/30'>  VACUUM</span></h1>
          <p className='text-sm   text-white/80 flex justify-end'>Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use RP-1 and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.</p>
        </div>
      </div>
      <ImageSlider media={newImage} />
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

export default Heavy;
