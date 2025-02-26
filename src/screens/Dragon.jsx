import React from "react";
import {ImageSlider} from '../Components';

function Dragon() {
  const image = [

    "/dragon/10007.jpg",
    "/dragon/10008.jpg",
    "/dragon/10009.jpg",
    "/dragon/10010.jpg",
    "/dragon/10011.jpg",
    "/dragon/10012.jpg",
    "/dragon/10013.jpg",
    "/dragon/10014.jpg",
    "/dragon/10015.jpg",
  ]

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center  relative">
        <img
          className=" w-full h-full object-cover absolute z-[-1]"
          src="/dragon/10002.jpg"
          alt="dragon"
        />
        <div className="uppercase flex flex-col justify-center items-center">
          <h1 className="sm:text-6xl text-4xl font-bold">DRAGON</h1>
          <h6 className="sm:text-xl text-sm font-extralight">
            Sending Humans and Cargo Into Space
          </h6>
        </div>
      </div>
      <div className="w-full min-h-screen flex justify-start items-end  relative">
        <img
          className=" w-full h-full object-cover absolute z-[-1]"
          src="/dragon/10003.jpg"
          alt="dragon"
        />
        <div className="  gap-y-3.5 w-xl sm:m-24  mx-12 my-16 uppercase flex flex-col  text-start ">
          <h6 className="text-sm font-extralight"> video</h6>
          <h1 className="sm:text-5xl text-4xl font-bold">Crew Dragon Interior </h1>
        </div>
      </div>
      <div className="w-full min-h-screen flex justify-center  items-center sm:justify-end sm:items-start   relative">
        <img
          className=" w-full h-full object-cover absolute z-[-1]"
          src="/dragon/10004.jpg"
          alt="dragon"
        />
        <div className="  gap-y-3.5 w-xl sm:my-72 uppercase px-3.5 flex flex-col  ">
          <h1 className="text-5xl font-bold">Taking humans to space </h1>
          <p className="text-sm sm:pr-8 ">
            In 2020, SpaceX returned America’s ability to fly NASA astronauts to
            and from the International Space Station on American vehicles for
            the first time since 2011. In addition to flying astronauts to space
            for NASA, SpaceX’s Dragon spacecraft can also carry commercial
            astronauts to Earth orbit, the ISS or beyond
          </p>
          <button className=" cursor-pointer w-fit border-white border-2 px-10 py-3 mt-6 font-bold text-sm uppercase hover:text-black hover:bg-white transition-all">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full min-h-screen flex   my-8 flex-col-reverse  sm:flex-col md:flex-row items-center justify-between px-6 md:px-16 relative">
        {/* Text Section (Left Side) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left uppercase">
          <h1 className="text-5xl font-bold">DRAGON PARACHUTE SYSTEM</h1>
          <p className="text-sm font-extralight mt-4">
            The Dragon spacecraft is equipped with two drogue parachutes to stabilize the spacecraft following reentry and four main parachutes to further decelerate the spacecraft prior to landing.
          </p>
          <button className="cursor-pointer w-fit border-white border-2 px-10 py-3 mt-6 font-bold text-sm uppercase hover:text-black hover:bg-white transition-all">
            Watch Video
          </button>
        </div>

        {/* Image Section (Right Side) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8">
          <img className="w-full md:w-4/5 h-auto rounded-2xl object-cover" src="dragon/10012.jpg" alt="new image" />
        </div>

      </div>

      <ImageSlider media=
        {image} />

    </>
  );
}

export default Dragon;
