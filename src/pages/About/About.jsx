import React from 'react';
import "./About.css";
import aboutPic from "../../images/about-img.jpg";

// Stuff about the website goes here! 

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutPic} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About EZRead</h2>
            <p className='fs-17'>EZRead is a Professional Library Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Library, with a focus on dependability and Book database. We're working to turn our passion for Library into a booming online website. We hope you enjoy our Library as much as we enjoy offering them to you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
