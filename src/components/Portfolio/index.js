import React from 'react';
import Project from '../Project';

import img1 from '../../assets/images/tek-talk.jpg';
import img2 from '../../assets/images/book-search.jpg';
import img3 from '../../assets/images/budget-tracker.jpg';
import img4 from '../../assets/images/tech-blog.jpg';
import img5 from '../../assets/images/holiday-planner.jpg';
import img6 from '../../assets/images/recipe-finder.jpg';

function Portfolio () {

  const projects = [
    {
      id: 1,
      name: 'TekTalk',
      liveUrl: 'https://pure-springs-79722.herokuapp.com/',
      gitUrl: 'https://github.com/sfoutz0205/TekTalk',
      style: {
        backgroundImage: "url( " + img1 + ")"
      }
    },
    {
      id: 2,
      name: 'Book Search',
      liveUrl: 'https://guarded-bayou-27523.herokuapp.com/`',
      gitUrl: 'https://github.com/sfoutz0205/book-search',
      style: {
        backgroundImage: "url( " + img2 + ")"
      }
    },
    {
      id: 3,
      name: 'Budget Tracker',
      liveUrl: 'https://limitless-coast-99338.herokuapp.com/',
      gitUrl: 'https://github.com/sfoutz0205/budget-tracker',
      style: {
        backgroundImage: "url( " + img3 + ")"
      }
    },
    {
      id: 4,
      name: 'Tech Blog',
      liveUrl: 'https://safe-island-81053.herokuapp.com/',
      gitUrl: 'https://github.com/sfoutz0205/tech-blog',
      style: {
        backgroundImage: "url( " + img4 + ")"
      }
    },
    {
      id: 5,
      name: 'Holiday Planner',
      liveUrl: 'https://desolate-inlet-16467.herokuapp.com/',
      gitUrl: 'https://github.com/sfoutz0205/holiday-planner',
      style: {
        backgroundImage: "url( " + img5 + ")",
      }
    },
    {
      id: 6,
      name: 'Recipe Finder',
      liveUrl: 'https://sfoutz0205.github.io/Recipe-Finder/',
      gitUrl: 'https://github.com/sfoutz0205/Recipe-Finder',
      style: {
        backgroundImage: "url( " + img6 + ")"
      }
    }
  ];


  return (
    <section id="project-container">
      <div className="section-title">
        <h2 id="project-header">My Projects</h2>
      </div>
      <div id="project-grid">
        {projects.map(project => (
          <Project {...project}
          key={project.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio;