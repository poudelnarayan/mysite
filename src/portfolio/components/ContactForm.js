import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Input from "./Input";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

import { useForm } from "../../shared/hooks/form-hook";

const ContactForm = () => {
  const recaptcha = useRef();
  const [isVerified, setIsVerified] = useState(false);

  const handleReCAPTCHAChange = (token) => {
    if (recaptcha.current.getValue()) {
      setIsVerified(true);
    }
  };

  async function submitForm(event) {
    event.preventDefault();
    if (!isVerified) {
      alert("Please verify the reCAPTCHA!");
    } else {
      alert("Form submission successful!");
    }
  }

  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      subject: {
        value: "",
        isValid: false,
      },
      message: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  return (
    <form className="contactform" onSubmit={submitForm}>
      <div className="contactform">
        <div className="row">
          <Input
            element="input"
            id="name"
            placeholder="YOUR NAME"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            onInput={inputHandler}
            name="name"
            type="text"
            errorText="Please enter a valid name"
          />
          <Input
            element="input"
            id="email"
            type="email"
            placeholder="YOUR EMAIL"
            validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            name="email"
            errorText="Please enter a valid email"
          />
          <Input
            element="input"
            id="subject"
            placeholder="SUBJECT"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            onInput={inputHandler}
            name="subject"
            type="text"
            errorText="minimum 5 characters"
          />
          <div className="col-12">
            <Input
              element="textarea"
              id="message"
              placeholder="YOUR MESSAGE"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
              onInput={inputHandler}
              name="message"
              errorText="minimum 10 characters"
              className="col-12"
            />
            <p style={{ color: "#37474f" }}>
              {" "}
              This site is protected by reCAPTCHA and the Google
            </p>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <ReCAPTCHA
                  ref={recaptcha}
                  onChange={handleReCAPTCHAChange}
                  sitekey={process.env.REACT_APP_SITE_KEY}
                />
                <br />
              </div>
              <div className="col-md-6 col-sm-12">
                <button
                  type="submit"
                  disabled={!isVerified || !formState.isValid}
                  className="btn color-btn btn-contact"
                >
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
