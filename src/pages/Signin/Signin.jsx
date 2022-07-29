import React from 'react';
import "./Signin.css";
import loginPic from "../../images/login.png";

// Stuff about the website goes here! 

const Signin = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Sign In</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {loginPic} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Sign In Below:</h2>
            <p className='fs-17'>Sign in inputs would go here.</p>
            <p className='fs-17'>But they aren't ready yet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin;
