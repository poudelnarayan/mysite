// School.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const School = ({ time, degree, school, description }) => (
  <li>
    <div className="icon">
      <FontAwesomeIcon icon={faGraduationCap} className="fa" />
    </div>
    <span className="time open-sans-font text-uppercase">{time}</span>
    <h5 className="poppins-font text-uppercase">
      {degree}
      <span className="place open-sans-font">{school}</span>
    </h5>
    <p className="open-sans-font">{description}</p>
  </li>
);

export default School;
