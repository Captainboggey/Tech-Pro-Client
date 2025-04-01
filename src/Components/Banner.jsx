import React from 'react';
import man from "../../public/man-on-video-call.avif"
import woman from "../../public/woman-on-videocall.webp"
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className="hero bg-pink-400  text-black min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:relative md:p-20  '>
                <img
                    src={man}
                    className="lg:w-xl rounded-lg shadow-2xl" />
                    <img src={woman} className='lg:absolute rounded-lg mt-4 lg:mt-0  md:w-52 bottom-1 left-1' alt="" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Learn faster with the <br /> best1-on-1 language <br />tutor for you </h1>
                    <p className="py-6">
                       Take online lessons tailored to your level, budget and schedule
                    </p>
                    <button className="btn btn-primary md:px-28 bg-black border-none md:py-6 text-xl gap-2">Get Started <FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;