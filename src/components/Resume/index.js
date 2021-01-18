import React from 'react';
import resumeDwnld from '../../assets/resume.pdf';

function Resume () {
  return (
    <section className="page-content">
      <div className="section-title">
        <h2>Resume</h2>
      </div>
      <div className="page-text">
        <p>
          <a href={resumeDwnld} download="resume.pdf" target="_blank" rel="noreferrer">Download resume</a>
        </p>

        <h3>Front-End Skills</h3>
          <p>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
          </p>

          <h3>Back-End Skills</h3>
            <p>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </p>
      </div>
    </section>
  );
}

export default Resume;
