import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => (
  <ul className="social list-unstyled pt-1 mb-5">
    <li className="facebook">
      <a
        title="Facebook"
        href="https://www.facebook.com/hellonarayanpoudel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="fa" />
      </a>
    </li>
    <li className="github">
      <a
        title="Github"
        href="https://github.com/poudelnarayan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="fa" />
      </a>
    </li>
    <li className="youtube">
      <a
        title="Youtube"
        href="https://www.youtube.com/channel/UC2DTiU1Zf7oVGUDeF-cz3xw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} className="fa" />
      </a>
    </li>
    <li className="instagram">
      <a
        title="Instagram"
        href="https://www.instagram.com/_narayan_poudel_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="fa" />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
