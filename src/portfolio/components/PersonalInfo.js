// PersonalInfo.js
import React from "react";
import PersonalInfoList from "./PersonalInfoList";

const personalInfoDataLeft = [
  { title: "first name", value: "Narayan" },
  { title: "last name", value: "Poudel" },
  { title: "Age", value: "Years" },
  { title: "Nationality", value: "Nepali" },
  { title: "Freelance", value: "Available" },
];

const personalInfoDataRight = [
  { title: "Address", value: "Butwal" },
  { title: "phone", value: "9867513539", link: { href: "tel:+9779867513539" } },
  {
    title: "Gmail",
    value: "poudelnarayan434",
    link: { href: "mailto:poudelnarayan434@gmail.com" },
  },
  {
    title: "Faceboook",
    value: "/hellonarayanpoudel",
    link: {
      href: "https://www.facebook.com/hellonarayanpoudel/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  { title: "languages", value: "Nepali, English" },
];

const PersonalInfo = () => (
  <div className="col-12 col-lg-5 col-xl-6">
    <div className="row">
      <div className="col-12">
        <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
          &lt; Personal Infos &nbsp;&gt;
        </h3>
      </div>
      <PersonalInfoList items={personalInfoDataLeft} />
      <PersonalInfoList items={personalInfoDataRight} />
      <div className="col-12 mt-3">
        <a
          href="{% static 'files/My_CV.pdf' %}"
          className="btn  color-btn  btn-download"
          download
        >
          <span>Download CV</span>
        </a>
      </div>
    </div>
  </div>
);

export default PersonalInfo;
