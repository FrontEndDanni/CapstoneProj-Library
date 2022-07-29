import React from 'react';
import "./Register.css";
import registerPic from "../../images/register.png";

// Stuff about the website goes here! 

const Register = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Register</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {registerPic} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Create an Account:</h2>
            <p className='fs-17'>Registration input would go here.</p>
            <p className='fs-17'>But there is none for now.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;
