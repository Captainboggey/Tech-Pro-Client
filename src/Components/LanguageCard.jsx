import React from 'react';
import { FaLanguage } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';

const LanguageCard = () => {
    return (
        <div className='grid grid-cols-3 gap-2 my-10 '>
            <div className='border-2 card '>
             <Link to={'/findTutor/English'}>   <h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> English Tutors </h2></Link>
            </div>
            <div className='border-2 card'>
                <Link to={'/findTutor/Spanish'}><h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> Spanish Tutors</h2></Link>
            </div>
            <div className='border-2 card'>
                <h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> French Tutors</h2>
            </div>
            <div className='border-2 card'>
                <h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> German Tutors</h2>
            </div>
            <div className='border-2 card'>
                <h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> Italian Tutors</h2>
            </div>
            <div className='border-2 card'>
                <h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> Chinese Tutors</h2>
            </div>
            <div className='border-2 card'>
                <h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> Arabic Tutors</h2>
            </div>
            <div className='border-2 card'>
                <h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> Japanese Tutors</h2>
            </div>
            <div className='border-2 card'>
                <h2 className="text center text-3xl p-4 font-bold flex gap-6"><FaLanguage /> Portuguese Tutors</h2>
            </div>
        </div>
    );
};

export default LanguageCard;