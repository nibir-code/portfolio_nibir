import React from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
     const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();
   
       emailjs.sendForm('mailMe', 'template_f3qzz9b', form.current, 'Zk3D9gcCVRwDDdTVG')
         .then((result) => {
             alert('message send successfully')
         }, (error) => {
             alert(error.message);
         });
         e.target.reset()
     };
   
     return (
          <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left text-transparent text-8xl bg-clip-text bg-gradient-to-r from-white to-yellow-500">
      <h1 className="text-7xl font-bold text-center">Text Me </h1>
      <h1 className='text-center text-7xl font-bold'>Here</h1>
    </div>
    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-black to-yellow-500" ref={form} onSubmit={sendEmail}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered bg-gradient-to-r from-black to-yellow-500 text-white" required name='client-name' ref={form}  />
        </div>
        <div className="form-control">
          <label className="label bg-gradient-to-r from-black to-yellow-500">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered bg-gradient-to-r from-black to-yellow-500 text-white" required name='email'  ref={form}/>
        </div>
        <div className="form-control h-20px" >
        <label className="label">
          <span className="label-text text-white">Message</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xl bg-gradient-to-r from-black to-yellow-500 text-white" required name='message'  ref={form} />
      </div>
        <div className="form-control mt-6" >
          <button  onSubmit={sendEmail} className="btn bg-gradient-to-r from-black to-black text-xl font-bold" >Send</button>
        </div>
      </div>
    </form>
  </div>
</div>
     );
};

export default Contact;