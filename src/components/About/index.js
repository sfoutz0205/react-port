import React from 'react';
import profileImg from '../../assets/profile-img.jpg'


function About() {
  return (
    <section>
      <div className="page-container">
        <div id="about-header">
          <img src={profileImg} width="200" height="200" alt="Sophie Foutz" className="profile-img" />
            <div className="section-title">
              <h2>About Me</h2>
            </div>
          </div>
          <p id="about-text">My name is Sophie Foutz. I am 29 years old and currently living in Santa Fe, NM. I work for 
              the family business, a Native American art gallery called Shiprock Santa Fe and, for the past
              six months, I have been attending an online coding boot-camp through the University of Utah. I am
              excited to continue to learn and grow in the tech field and look forward to beginning down this new 
              career path. 
          </p>
      </div>
    </section>
  );
}

export default About;