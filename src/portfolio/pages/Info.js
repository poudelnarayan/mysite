import React, { useEffect } from "react";
import "./Info.css"; // Make sure to create this CSS file or adjust the path accordingly.
import { Link } from "react-router-dom";

const Info = () => {
  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add("home");

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <React.Fragment>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="page_inbox"
        page_id="101191275136247"
      ></div>

      <section className="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
        <div className="color-block d-none d-lg-block"></div>
        <div className="row home-details-container align-items-center">
          <div className="col-lg-4 bg position-fixed d-none d-lg-block"></div>
          <div className="col-12 col-lg-8 offset-lg-4 home-details text-left text-lg-left">
            <div>
              <img
                src="/static/Image/myimg.png" // Adjust the path if necessary
                className="img-fluid main-img-mobile d-none d-sm-block d-lg-none"
                alt="me"
              />
              <h6 className="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">
                Hi there !
              </h6>
              <h1 className="text-uppercase">
                <span>I'm</span> Narayan Poudel
              </h1>
              <p className="open-sans-font">
                I'm a web designer & android developer focused on crafting clean
                & user‑friendly experiences. I am passionate about building
                excellent software that improves the lives of those around me.
              </p>
              <div className="row">
                <Link
                  to="/about"
                  className="btn color-btn btn-about col-md-5 col-sm-5 col-5 my-1 mx-2"
                >
                  <span> More About Me</span>
                </Link>
                <Link
                  to="/hire"
                  className="btn color-btn   btn-hire col-md-5 col-sm-5 col-5 my-1 mx-2"
                >
                  <span> hire Me</span>
                </Link>
              </div>
              <a
                href="https://www.facebook.com/groups/939224100171362/"
                className="btn btn-fb col-md-10 col-sm-10 col-10 my-1 mx-2 "
              >
                <span> Join Facebook Community</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Info;
