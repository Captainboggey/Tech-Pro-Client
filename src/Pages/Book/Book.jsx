import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const Book = () => {
    const {user}=useContext(AuthContext)
    const {language,amount}=useLoaderData()
    const handleBook = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;;
        const email = form.email.value;
        const phone = form.phone.value;
        const course = form.course.value;
        const amount = form.amount.value;
        const bookingInfo ={name,email,phone,course,amount}
        axios.post('http://localhost:4000/bookings',bookingInfo)
        .then(res=>console.log(res.data))
        .catch(error=>console.log(error))
    }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
  
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleBook} className="card-body">
        <h2 className="text-center text-3xl">Fill Up Your Booking Info</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' value={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" name='phone' placeholder="phone" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course</span>
          </label>
          <input type="text" name='course' value={language} className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Payable Amount</span>
          </label>
          <input type="text" name='amount' value={amount} className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary bg-pink-500 px-16 border-none">Book</button>
        </div>
      </form>
    </div>
  
</div>
            
        </div>
    );
};

export default Book;