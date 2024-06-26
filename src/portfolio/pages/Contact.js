import React, { useEffect } from "react";
import ContactInfo from "../components/ContactInfo";
import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    document.body.classList.add("contact");
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
              <ContactInfo
                email="poudelnarayan434@gmail.com"
                phone="+977 9867513539"
              />
              <SocialLinks />
            </div>
            <div className="col-12 col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
