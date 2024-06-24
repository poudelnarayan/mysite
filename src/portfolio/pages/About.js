import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import Experience from "../components/Experience";
import Education from "../components/Education";
import PersonalInfo from "../components/PersonalInfo";
import CounterList from "../components/CounterList";

const About = () => {
  useEffect(() => {
    document.body.classList.add("about");

    return () => {
      document.body.classList.remove("about");
    };
  }, []);

  const counters = [
    { stop: "5", label: "years of experience" },
    { stop: "10", label: "completed projects" },
    { stop: "4", label: "Happy customers" },
    { stop: "0", label: "awards won" },
  ];

  return (
    <React.Fragment>
      <a href="/" id="scroll-button">
        <FontAwesomeIcon icon={faAngleUp} className="fa" />
      </a>

      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>
          ABOUT <span>ME</span>
        </h1>
        <span className="title-bg">Resume</span>
      </section>

      <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <div className="container">
          <div className="row">
            <PersonalInfo />
            <CounterList counters={counters} />
          </div>
          <hr className="separator" />
          <div className="row">
            <Experience />
            <Education />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
