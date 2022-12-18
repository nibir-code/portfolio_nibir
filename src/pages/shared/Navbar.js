import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <div className ="px-none ">
      <div className="navbar bg-gradient-to-r from-yellow-500 to-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-black to-yellow-500 rounded-box w-52">
            <li><a><Link className='font-bold text-white' to="/">Home</Link></a></li>
            <li><a><Link className='font-bold text-white' to="/about">About Me</Link></a></li>
            <li><a><Link className='font-bold text-white' to="/contact">Contact With Me</Link></a></li>
            <li><a><Link className='font-bold text-white' to="/blogs">Blogs</Link></a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-3xl font-bold text-center text-white  bg-clip-text animate-pulse">Nibir's Porfolio</a>
      </div>
    </div>
      </div>
     );
};

export default Navbar;