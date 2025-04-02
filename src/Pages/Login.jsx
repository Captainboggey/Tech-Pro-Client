import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
  const {signInWithEmail}= useContext(AuthContext)
  const handleLogin= e=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const logInInfo={email,password}
    console.log(logInInfo)
    signInWithEmail(email,password)
    .then(res=>console.log(res))
    .catch(error=>console.error(error))

  }
  return (
    <div className="hero  min-h-screen">
      <div className=" ">

        <div className="  lg:w-96  shrink-0 shadow-lg bg-base-300 rounded-lg">
          <div className="card-body  ">
            <h2 className="text-left my-5 text-2xl ">Login</h2>
            <button className='btn  bg-transparent w-full gap-2 border-none '><FcGoogle /> Continue with Google</button>
            <button className='btn  bg-transparent w-full gap-2 border-none '><IoLogoGithub /> Continue with Github</button>
            
            
              <form onSubmit={handleLogin} className='space-y-2'>
              
                <div className='form-control'>
                <label className="fieldset-label">Email</label>
                <input name='email' type="email" className="input w-full " placeholder="Email" />
                </div>
                <div className='form-control'>
                <label className="fieldset-label">Password</label>
                <input name='password' type="password" className="input w-full" placeholder="Password" />
                </div>

                <div className='form-control'>
                <input type="submit" className='btn btn-neutral w-full mt-4' value="Login" />
                <h2 className='mt-5'>New Here? <Link to={'/register'} className='text-red-500'> Register</Link> First</h2>
                </div>
                
              </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;