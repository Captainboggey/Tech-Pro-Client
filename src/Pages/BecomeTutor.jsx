import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import axios from 'axios';

const BecomeTutor = () => {
  const {user}= useContext(AuthContext)
  const handleAssignInfo = e =>{
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
    const email = user?.email;
    const teacherInfo ={name,tagOne,tagTwo,flag,star,review,lessons,amount,duration,language,pp,description,email};
    console.log(teacherInfo)
    axios.post('http://localhost:4000/becomeTeacher',teacherInfo)
    .then(res=>console.log(res.data))
    .catch(error=>console.log(error))
  }
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content ">
    <div className="text-center lg:text-left"></div>
    <h2 className="text-center text-2xl">Become a Tutor today!</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleAssignInfo} className="card-body">
        <div className='grid grid-cols-2 gap-3'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">TagOne</span>
          </label>
          <input type="text" name='tagOne' placeholder="tagOne" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">TagTwo</span>
          </label>
          <input type="text" name='tagTwo' placeholder="tagTwo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country Flag</span>
          </label>
          <input type="text" name='flag' placeholder="Flag" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Star</span>
          </label>
          <input type="text" name='star' placeholder="Star" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <input type="text" name='review' placeholder="review" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Lessons</span>
          </label>
          <input type="text" name='lessons' placeholder="lessons" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Amount</span>
          </label>
          <input type="text" name='amount' placeholder="Amount" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Duration</span>
          </label>
          <input type="text" name='duration' placeholder="Duration" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Language</span>
          </label>
          <input type="text" name='language' placeholder="Language" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Profile Picture</span>
          </label>
          <input type="text" name='pp' placeholder="pp" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
        </div>
        </div>
        
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Assign Info</button>
        </div>
      </form>
    </div>
    </div>
    </div>
    );
};

export default BecomeTutor;