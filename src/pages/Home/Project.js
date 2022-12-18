import React from 'react';

const Projects = ({project}) => {
     return (
          <div className='dark:bg-black px-12'>
          
          <div className="card card-compact w-96 bg-base-100 shadow-xl dark:bg-black">
          <figure><img src={project.img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-white text-center ">{project.name}</h2>
            <p className='text-white'>{project.description}</p>
            <div className="card-actions justify-end">
              <button className="btn bg-gradient-to-r from-yellow-400 to-black text-white">Click</button>
            </div>
          </div>
        </div>
          </div>
     );
};

export default Projects;