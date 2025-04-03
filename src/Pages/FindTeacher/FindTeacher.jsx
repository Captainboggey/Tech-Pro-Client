import React from 'react';
import teacher from "../../../public/MatcherSemHero.c1a6f64d.avif"
import { useLoaderData } from 'react-router-dom';
import Teacher from './Teacher';

const FindTeacher = () => {
    const teachers = useLoaderData()
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={teacher}
                        className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Online English tutors & <br /> teachers for private lessons</h1>
                        <p className="py-6">
                        Looking for an online English tutor? Preply is the leading online language learning platform worldwide. You can choose from 34196 English teachers with an average rating of 4.91 out of 5 stars given by 297911 customers. Book a lesson with a private English teacher today and start learning. Not entirely happy with your tutor? No worries, Preply offers free tutor replacement till you're 100% satisfied. Looking for a different way to learn a language? Explore online English classes.
                        </p>
                        <button className="btn btn-primary bg-pink-500 px-16 border-none">Get Started</button>
                    </div>
                </div>
            </div>
            <h2 className="text-center text-3xl my-5">Our Beloved Teacher</h2>

            <h2 className="text-3xl">Total Available Teachers {teachers.length}</h2>
            <div>
                {
                    teachers.map(teacher=><Teacher teacher={teacher} key={teacher._id}></Teacher>)
                }
            </div>

        </div>
    );
};

export default FindTeacher;