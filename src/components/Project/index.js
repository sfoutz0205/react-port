import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Project (props) {
  return (
    <div className="grid-item" style={props.style}>
      <div className="project-info">
        <a href={props.liveUrl} className="project-title">{props.name}</a>
        <a href={props.gitUrl}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  )
}

export default Project;