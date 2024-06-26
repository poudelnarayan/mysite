import React, { useEffect } from "react";
import "./Hire.css";
import TitleSection from "../components/TitleSection";
import ServiceBlock from "../components/ServiceBlock";
import InterestSection from "../components/InterestSection";

import {
  faObjectUngroup,
  faCode,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

const Hire = () => {
  useEffect(() => {
    document.body.classList.add("hire");
    return () => {
      document.body.classList.remove("hire");
    };
  }, []);

  return (
    <React.Fragment>
      <TitleSection
        mainTitle="HIRE"
        highlightText="ME"
        backgroundText="HIRING"
      />
      <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <div className="services container">
          <div className="col-12">
            <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
              &lt; What I DO &nbsp;&gt;
            </h3>
          </div>
          <div className="row">
            <ServiceBlock
              icon={faObjectUngroup}
              color="#d76850"
              title="App Development"
              description="I develop top-notch apps using Flutter and Kotlin, focusing on intuitive designs and seamless functionality. My passion for tech drives me to create user-friendly solutions that enhance daily interactions and experiences."
              linkTo="/contact"
            />
            <ServiceBlock
              icon={faCode}
              color="steelblue"
              title="Web Development"
              description="I'm skilled in both the MERN stack and Django, enabling me to build robust web applications. Whether it's crafting  single-page applications developing powerful backends ,I thrive on turning complex problems into elegant, effective solutions."
              linkTo="/contact"
            />
            <ServiceBlock
              icon={faBullseye}
              color="purple"
              title="System Analysis"
              description="I excel in Data Structures and Algorithms, with robust knowledge in AI and blockchain, enabling me to build smart, secure, and efficient software solutions."
              linkTo="/contact"
            />
          </div>
          <InterestSection />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hire;
