import React from 'react';
import man from "../../public/man-on-video-call.avif"
import woman from "../../public/woman-on-videocall.webp"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:relative p-20  '>
                <img
                    src={man}
                    className="w-xl rounded-lg shadow-2xl" />
                    <img src={woman} className='lg:absolute md:w-52 bottom-1 left-1' alt="" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Learn faster with the <br /> best1-on-1 language <br />tutor for you </h1>
                    <p className="py-6">
                       Take online lessons tailored to your level, budget and schedule
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;