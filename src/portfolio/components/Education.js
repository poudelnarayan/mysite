// Education.js
import React from "react";
import School from "./School";

const Education = () => (
  <div className="col-lg-6 m-15px-tb">
    <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
      &lt; Education &nbsp;&gt;
    </h3>
    <div className="resume-box">
      <ul>
        <School
          time="2020+"
          degree="Bachloer Degree"
          school="Kantipur Engineering College"
          description="Joined Bachloer of Computer Engineering in Kantipr Engineering College (KEC)"
        />
        <School
          time="2020"
          degree="College Degree"
          school="Tilottama E.S.S"
          description="Completed +2 on Computer Science from Tilottama English Secondary School"
        />
        <School
          time="2017"
          degree="SEE"
          school="GyanPunj B.M"
          description="Passed School Level Examination from Gyan punja Bidhaya Mandir Secondary School."
        />
      </ul>
    </div>
  </div>
);

export default Education;
