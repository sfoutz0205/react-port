import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Project (props) {
  return (
    <div className="project-item" style={props.style}>
      <a href={props.liveUrl}>{props.name}</a>
      <a href={props.gitUrl}>
      <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  )
}

export default Project;