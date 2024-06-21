import React, { useEffect } from "react";
import "./Hire.css"; // Ensure to create and add styles from your inline CSS to this file

const Hire = () => {
  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add("hire");

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove("hire");
    };
  }, []);
  return (
    <React.Fragment>
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>
          HIRE <span>ME</span>
        </h1>
        <span className="title-bg">HIRING</span>
      </section>

      <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <div className="services container">
          <div className="col-12">
            <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
              &lt; What I DO &nbsp;&gt;
            </h3>
          </div>
          <div className="row">
            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div className="ineer-box">
                <div className="icon box">
                  <em
                    className="fa fa-object-ungroup sky-color"
                    aria-hidden="true"
                  ></em>
                </div>
                <h3 className="poppins-font">App Development</h3>
                <div className="text">
                  App development is the act or process by which a mobile app or
                  a computer software is developed for respective devices based
                  on the requirement such as tailored software or customized
                  software.
                </div>
                <div className="link-box">
                  <a href="/contact" className="btn col-md-6 col-sm-6">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div className="ineer-box">
                <div className="icon box">
                  <em className="fa fa-code iron-color" aria-hidden="true"></em>
                </div>
                <h3 className="poppins-font">Web Development</h3>
                <div className="text">
                  Web development is the work involved in developing a Web site
                  for the Internet or an intranet. Web development can range
                  from developing a simple single page of plain text to complex
                  Internet apps.
                </div>
                <div className="link-box">
                  <a href="/contact" className="btn col-md-6 col-sm-6">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div className="ineer-box">
                <div className="icon box">
                  <em
                    className="fa fa-bullseye purple-color"
                    aria-hidden="true"
                  ></em>
                </div>
                <h3 className="poppins-font">System Analysis</h3>
                <div className="text">
                  A systems analyst researches problem, plans solutions,
                  recommends software and systems, and coordinates the
                  development to meet business or other requirements of
                  stakeholders.
                </div>
                <div className="link-box">
                  <a href="/contact" className="btn col-md-6 col-sm-6">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
            <div className="service-block col-lg-4 col-md-6 col-sm-12 l-mobile-only">
              <div className="ineer-box">
                <div className="icon box">
                  <em
                    className="fa fa-building sky-color"
                    aria-hidden="true"
                  ></em>
                </div>
                <h3 className="poppins-font">Domain & Hosting</h3>
                <div className="text">
                  Domain Registration is leasing an address that directs people
                  to specific website files via a browser. As an analogy,
                  Hosting is the “land” where your website files live.
                </div>
                <div className="link-box">
                  <a href="/contact" className="btn col-md-6 col-sm-6">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="interest"
            style={{ marginTop: "120px", marginBottom: "120px" }}
          >
            <div className="col-md-12">
              <div className="work col-md-7">
                <h3 className="poppins-font" style={{ color: "#ffb400" }}>
                  Interested to work?
                </h3>
                <p className="work">
                  You can make me work either by involving me in some projects
                  or hire me as a full-time or part-time developer.
                </p>
                <a href="/contact" className="btn">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hire;
