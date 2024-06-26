import React from "react";
import {
  faEnvelopeOpen,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = ({ email, phone }) => (
  <div>
    <p className="open-sans-font custom-span-contact position-relative">
      <FontAwesomeIcon
        icon={faEnvelopeOpen}
        className="position-absolute contact-icon"
        size="2x"
        style={{ marginLeft: "-50px" }}
      />
      <span className="d-block">mail me</span>
      <a
        style={{ color: "unset", textDecoration: "none" }}
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </p>
    <p className="open-sans-font custom-span-contact position-relative">
      <FontAwesomeIcon
        icon={faPhoneSquare}
        className="position-absolute contact-icon"
        size="2x"
        style={{ marginLeft: "-50px" }}
      />
      <span className="d-block">call me</span>
      <a
        style={{
          color: "unset",
          textDecoration: "none",
          accentColor: "none",
        }}
        href={`tel:${phone}`}
      >
        {phone}
      </a>
    </p>
  </div>
);

export default ContactInfo;
