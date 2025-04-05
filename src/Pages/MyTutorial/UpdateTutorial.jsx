import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const UpdateTutorial = () => {

    const {name,tagOne,tagTwo,flag,star,review,lessons,amount,duration,language,pp,description,_id}=useLoaderData()
    const{user}=useContext(AuthContext)
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const tagOne = form.tagOne.value;
        const tagTwo = form.tagTwo.value;
        const flag = form.flag.value;
        const star = form.star.value;
        const review = form.review.value;
        const lessons = form.lessons.value;
        const amount = form.amount.value;
        const duration = form.duration.value;
        const language = form.language.value;
        const pp =  form.pp.value;
        const description = form.description.value;
        
        const teacherInfo ={name,tagOne,tagTwo,flag,star,review,lessons,amount,duration,language,pp,description};
        axios.put(`http://localhost:4000/becomeTeacher/${_id}`,teacherInfo)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
        
      }
      
    return (
        <div>
            <h2 className="text-center text-3xl mt-10">Update Your Tutorial</h2>
            <div className="hero  min-h-screen">
  <div className="hero-content ">
    <div className="text-center lg:text-left"></div>
    
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleUpdate} className="card-body">
        <div className='grid grid-cols-2 gap-3'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' value={name} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">TagOne</span>
          </label>
          <input type="text" name='tagOne' value={tagOne} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">TagTwo</span>
          </label>
          <input type="text" name='tagTwo' value={tagTwo} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country Flag</span>
          </label>
          <input type="text" name='flag' value={flag} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Star</span>
          </label>
          <input type="text" name='star' value={star} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <input type="text" name='review' value={review} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Lessons</span>
          </label>
          <input type="text" name='lessons'  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount</span>
          </label>
          <input type="text" name='amount' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Duration</span>
          </label>
          <input type="text" name='duration' value={duration} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Language</span>
          </label>
          <input type="text" name='language' value={language} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Picture</span>
          </label>
          <input type="text" name='pp' value={pp} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='description' value={description} className="input input-bordered" required />
        </div>
        </div>
        
       
        <div className="form-control mt-6">
          <button className="btn  bg-pink-500 border-none btn-primary">Update Info</button>
        </div>
      </form>
    </div>
    </div>
    </div>
        </div>
    );
};

export default UpdateTutorial;