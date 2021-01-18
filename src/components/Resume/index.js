import React from 'react';
import resumeDwnld from '../../assets/resume.pdf';

function Resume () {
  return (
    <section>
      <div className="page-container">
        <div className="page-content">
        <div className="section-title">
          <h2>Proficiencies</h2>
        </div>
        <div className="page-text">

          <h3 className="resume-title">Front-End Skills</h3>
            <p>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Bootstrap</li>
            </p>

          <h3 className="resume-title">Back-End Skills</h3>
            <p>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </p>
              <p className="resume-title">
                <a href={resumeDwnld} download="resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
