// Experience.js
import React from "react";
import Job from "./Job";

const Experience = () => (
  <div className="col-lg-6 m-15px-tb">
    <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
      &lt; Experience &nbsp;&gt;
    </h3>
    <div className="resume-box">
      <ul>
        <Job
          time="2019 - Present"
          title="Web Developer"
          company="Freelancing"
          description="Working as a responsive Full-Stack ( frontend + backend ) web developer since 2019"
        />
        <Job
          time="2019 - present"
          title="Android Developer"
          company="Frelancing"
          description="Can develop native and hybrid android apps according to the user requirements."
        />
        <Job
          time="2019 - Present"
          title="UI/UX Designer"
          company="Freelancing"
          description="Can be hired as UI/UX designer to give a new life to your webpage and apps."
        />
      </ul>
    </div>
  </div>
);

export default Experience;
