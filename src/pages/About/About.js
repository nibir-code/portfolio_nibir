import React from 'react';
import './About.css';

const About = () => {
     
     return (
         <div className="dark:bg-black">
         <div className="hero min-h-screen">
         <div className="hero-content text-center">
           <div className="max-w-md ">
           <a  href="https://drive.google.com/drive/u/0/folders/1kp54f99s4QmHrx-SuibYdjzbi4-6jEVn" target='_blank'>
           <button class="py-2 px-4 bg-blue-500 text-white bg-gradient-to-r from-yellow-400 to-black font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none  focus:ring-opacity-75 accent-primary-focus animate-pulse">Click here</button>
           </a>
          
             <h1 className="text-7xl font-bold text-white">Hello there</h1>
             <p className="py-6 text-white text-4xl">Name: Mufashim Fuad Nibir</p>
             <p className='py-3 text-white'>Undergrade: East-West University(B.sc-Electronics & Telecommunications Engineering) </p>
             <p className='py-3 text-white'>College: Birshreshtha Noor Mohammad Public College(GPA-5.00)</p>
             <p className='text-white'>School: Monipur High School(GPA-5.00)</p>
             <p className='py-4 text-white'>Address : 1166/1 East sherwrapara, Mirpur, Dhaka-1216</p>
             <p className='text-white'>To work in a company which have
             professional environment where I
             can utilize and develop my
             engineering skills.</p>
           </div>
         </div>
       </div>
         </div>
     );
};

export default About;