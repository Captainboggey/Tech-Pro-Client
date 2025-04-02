import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const {signUpWithEmail,signInWithGoogle,signInWithGit,user}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const form= e.target;
        const email = form.email.value;
        const password = form.password.value;
        const registerInfo ={email,password};
        signUpWithEmail(email,password)
        .then(res=>console.log(res))
        .catch(error=>console.log(error))

    }
    const handleGoogle=()=>{
      signInWithGoogle()
      .then(res=>console.log(res))
      .catch(error=>console.error(error))
    }
    const handleGit=()=>{
      signInWithGit()
      .then(res=>console.log(res))
      .catch(error=>console.error(error))
    }
    return (
        <div className="hero  min-h-screen">
        <div className=" ">
  
          <div className="  lg:w-96  shrink-0 shadow-lg bg-base-300 rounded-lg">
            <div className="card-body  ">
              <h2 className="text-left my-5 text-2xl ">Register</h2>
              <button onClick={handleGoogle} className='btn  bg-transparent w-full gap-2 border-none '><FcGoogle /> Continue with Google</button>
              <button onClick={handleGit} className='btn  bg-transparent w-full gap-2 border-none '><IoLogoGithub/> Continue with Github</button>
              
              
                <form onSubmit={handleRegister} className='space-y-2'>
                
                  <div className='form-control'>
                  <label className="fieldset-label">Email</label>
                  <input name='email' type="email" className="input w-full " placeholder="Email" />
                  </div>
                  <div className='form-control'>
                  <label className="fieldset-label">Password</label>
                  <input name='password' type="password" className="input w-full" placeholder="Password" />
                  </div>
  
                  <div className='form-control'>
                  <input  type="submit" className='btn btn-neutral w-full mt-4' value="Register" />
                  <h2 className='mt-5'>Already have an account? <Link to={'/login'} className='text-red-500'> Login</Link> then</h2>
                  </div>
                  
                </form>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;