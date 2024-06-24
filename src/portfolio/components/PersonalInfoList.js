// PersonalInfoList.js
import React from "react";
import PersonalInfoItem from "./PersonalInfoItem";

const PersonalInfoList = ({ items }) => (
  <div className="col-6">
    <ul className="about-list list-unstyled open-sans-font">
      {items.map((item, index) => (
        <PersonalInfoItem key={index} {...item} />
      ))}
    </ul>
  </div>
);

export default PersonalInfoList;
