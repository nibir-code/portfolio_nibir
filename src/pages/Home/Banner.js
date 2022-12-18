import React from 'react';
import nibir from '../../assets/nibir photo.jpg'
import '../Home/Banner.css';
import './Banner.css';
import { FaGithub ,FaFacebook, FaLinkedin} from 'react-icons/fa';

const Banner = () => {
     return (
<div
 className="hero min-h-screen dark:bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={nibir} className="max-h-40 rounded-full custom" />
    <div className="custom">
      <h1 className="text-7xl font-bold px-10 ">Front-End-Developer</h1>
      <p className="py-6 text-4xl font-bold dark:text-white px-10">MERN STACK</p>
        <div className="px-10 flex gap-4">
          <a href='https://github.com/nibir-code' target='_blank'> <FaGithub className="text-white text-3xl"/></a>
            <a href='https://www.facebook.com/nibir101'  target='_blank'> <FaFacebook className="text-white text-3xl"/></a>
            <a href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BqmXWBysOReSIifCG3b8m%2FA%3D%3D'  target='_blank'> <FaLinkedin className="text-white text-3xl"/></a>
        </div>
    </div>
  </div>
</div>
     );
};

export default Banner;