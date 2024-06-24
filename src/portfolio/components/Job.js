// Job.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Job = ({ time, title, company, description }) => (
  <li>
    <div className="icon">
      <FontAwesomeIcon icon={faBriefcase} className="fa" />
    </div>
    <span className="time open-sans-font text-uppercase">{time}</span>
    <h5 className="poppins-font text-uppercase">
      {title} <span className="place open-sans-font">{company}</span>
    </h5>
    <p className="open-sans-font">{description}</p>
  </li>
);

export default Job;
