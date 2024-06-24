// PersonalInfoItem.js
import React from "react";

const PersonalInfoItem = ({ title, value, link }) => (
  <li>
    <span className="title">{title} :</span>{" "}
    <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
      {link ? (
        <a
          href={link.href}
          target={link.target}
          rel={link.rel}
          style={{ color: "unset", textDecoration: "none" }}
        >
          {value}
        </a>
      ) : (
        value
      )}
    </span>
  </li>
);

export default PersonalInfoItem;
