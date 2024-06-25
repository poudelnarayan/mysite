import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add("contact");

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove("contact");
    };
  }, []);
  return (
    <React.Fragment>
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>
          get in <span>touch</span>
        </h1>
        <span className="title-bg">contact</span>
      </section>

      <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                Don't be shy!
              </h3>
              <p className="open-sans-font mb-3">
                Feel free to get in touch with me. I am always open to discuss
                new projects, creative ideas or opportunities to be part of your
                visions.
              </p>
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
                  href="mailto:poudelnarayan434@gmail.com"
                >
                  poudelnarayan434@gmail.com
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
                  href="tel:+9779867513539"
                >
                  +977 9867513539
                </a>
              </p>
              <ul className="social list-unstyled pt-1 mb-5">
                <li className="facebook">
                  <a
                    title="Facebook"
                    href="https://www.facebook.com/narayanpoudelofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="fa" />
                  </a>
                </li>
                <li className="github">
                  <a
                    title="Github"
                    href="https://www.github.com/narayan434"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="fa" />
                  </a>
                </li>
                <li className="youtube">
                  <a
                    title="Youtube"
                    href="https://www.youtube.com/channel/UC2DTiU1Zf7oVGUDeF-cz3xw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="fa" />
                  </a>
                </li>
                <li className="instagram">
                  <a
                    title="Instagram"
                    href="https://www.instagram.com/narayan__434/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="fa" />
                  </a>
                </li>
              </ul>
            </div>
            {/* TODO: google captcha not working */}

            <div className="col-12 col-lg-8">
              <form className="contactform" method="post" action="/contact/">
                <div className="contactform">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="YOUR NAME"
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="YOUR EMAIL"
                      />
                    </div>
                    <div className="col-12 col-md-4">
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="YOUR SUBJECT"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        required
                        placeholder="YOUR MESSAGE"
                      ></textarea>
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div
                            className="g-recaptcha"
                            data-sitekey="6LdjymkaAAAAAKeY5OqPinrPESz1Jv5jCOI3BH2r"
                          ></div>
                          <br />
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <button
                            type="submit"
                            className="btn  color-btn  btn-contact"
                          >
                            <span>Send Message</span>s
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
