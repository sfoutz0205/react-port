import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


function Footer () {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a href="https://github.com/sfoutz0205">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sophie-foutz-618b78148/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/sophieifoutz">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </li>
        </ul>
      </div>

    </footer>
        
  )
}

export default Footer;