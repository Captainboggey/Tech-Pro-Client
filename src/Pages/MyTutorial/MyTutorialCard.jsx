import axios from 'axios';
import React, { useState } from 'react';
import { FaBook, FaStar } from 'react-icons/fa';
import { LuLanguages } from 'react-icons/lu';
import { RiGraduationCapLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const MyTutorialCard = ({tutorial}) => {
    const {name,tagOne,tagTwo,flag,star,review,lessons,amount,duration,language,pp,description,email,_id}=tutorial;
   
    const handleDelete =(id)=>{
        axios.delete(`http://localhost:4000/becomeTeacher/${id}`)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
      }
    return (
        <div className="card card-side bg-base-100 shadow-sm my-10">
        <figure className='md:w-40 w-28 rounded-none'>
            <img
                src={pp}
                className='w-full'
                alt="Movie" />
        </figure>
        <div className="card-body">
            <div className='flex  justify-between'>
            <div className='flex gap-2 items-center'>
            <h2 className="card-title">{name}</h2>
            <img src={flag} className='w-5 h-4' alt="" />

            </div>
            <div>
          <div className='flex gap-4'>
          <div>
          <h2><span className='items-center flex gap-2'><FaStar />  {star} </span><br /> {review} reviews</h2>
          </div>
          <div>
          <h2><span className='items-center flex gap-2'>{amount}</span><br /> {duration}  lesson</h2>
          </div>
          </div>
          

            </div>

            </div>
            <div className='flex w-20 items-center gap-4'>
                <p className='bg-blue-200 text-black p-1 rounded-lg'>{tagOne}</p>
                <p className='bg-green-200 text-black p-1 rounded-lg'>{tagTwo}</p>
            </div>
            <div>
                <p className='items-center gap-2 flex'><RiGraduationCapLine/> {language}</p>
            </div>
            <div>
                <p className='items-center gap-2 flex'><FaBook/>{lessons} Lessons</p>
            </div>
            <div>
                <p className='items-center gap-2 flex'><LuLanguages/>{language}</p>
            </div>
            <p>{description}</p>
            <div className="card-actions flex justify-end">
                <Link to={`/updateTutorial/${_id}`} ><button className="btn btn-primary bg-pink-500 px-16 border-none">Update</button></Link>
                <button onClick={()=>handleDelete(_id)} className="btn btn-primary bg-black text-white px-16 border-none">Delete</button>
            </div>
        </div>
    </div>
    );
};

export default MyTutorialCard;