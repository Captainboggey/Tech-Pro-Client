import React, { useContext } from 'react';
import { CiLogin } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const{logout,user}=useContext(AuthContext)
    const navLinks=<>
     <Link to={'/findTutor'}><li><h1>Find Tutors</h1></li></Link>
     <Link to={'/myTutorials'}><li><h1>My Tutorial</h1></li></Link>
     <Link><li><h1>My Booked Tutorial</h1></li></Link>
     <Link to={'/becomeTutor'}><li><h1>Become a tutor</h1></li></Link>
    </>
    const handleLogout=()=>{
        return logout()
        .then()
        .catch()
    }
    return (
        <div className="navbar bg-pink-400 text-black shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                        
                    </ul>
                </div>
                <div className='lg:flex navbar'><Link to={'/'}><h2 className="btn btn-ghost text-xl font-bungee">Tech Pro</h2></Link>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>

                </div>
            </div>

            <div className="navbar-end">
               {
                user?<Link to={'/login'}> <h2 onClick={handleLogout} className="btn md:px-8 text-black bg-transparent border-1 text-center gap-3 "><CiLogin /> Logout</h2></Link>:<Link to={'/login'}> <h2 className="btn md:px-8 text-black bg-transparent border-1 text-center gap-3 "><CiLogin /> Login</h2></Link>
               }
            </div>
        </div>
    );
};

export default Navbar;