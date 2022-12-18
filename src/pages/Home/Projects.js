import React from 'react';
import carRepair from "../../assets/Car-repair-service.PNG";
import sportoo from "../../assets/sporto.PNG";
import doctors from '../../assets/doctors-service.PNG';
import Project from "./Project";


const Projects = () => {

     const projects = [
          {
               _id : 1 ,
               name : 'Car Repair Service',
               description : 'React , Firebase , Mongodb',
               img : carRepair

          },
          {
               _id : 2 ,
               name : 'Sporto',
               description : 'React , Firebase',
               img : sportoo

          },
          {
               _id : 3 ,
               name : "Doctor's Service",
               description : 'Very good in service which you get',
               img : doctors

          },
     ]

     return (
          
          <div className=" bg-black ">
          <div className="text-center">
          <h1 className=" text-white font-bold  text-4xl pb-20 animate-pulse">Project'S</h1>
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 hero-content flex-col lg:flex-row'>
          {
               projects.map(project => <Project key={project._id} project={project}></Project>)
          }
          </div>
          </div>
     );
};

export default Projects;