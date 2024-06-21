import React, { useEffect } from "react";

import "./About.css";

const About = () => {
  useEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add("about");

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove("about");
    };
  }, []);

  return (
    <React.Fragment>
      {/* TODO */}
      <a href="/" id="scroll-button">
        <span className="fa fa-angle-up"></span>
      </a>

      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>
          ABOUT <span>ME</span>
        </h1>
        <span className="title-bg">Resume</span>
      </section>

      <section className="main-content revealator-slideup revealator-once revealator-delay1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 col-xl-6">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                    &lt; Personal Infos &nbsp;&gt;
                  </h3>
                </div>
                <div className="col-12 d-block d-sm-none">
                  {/* <img
                    src="{% static 'Image/img-mobile.jpg' %}"
                    className="img-fluid main-img-mobile"
                    alt="mypicture"
                  /> */}
                </div>
                <div className="col-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    <li>
                      {" "}
                      <span className="title">first name :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Narayan
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span className="title">last name :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Poudel
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span className="title">Age :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Years
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span className="title">Nationality :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Nepali
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span className="title">Freelance :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Available
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="about-list list-unstyled open-sans-font">
                    <li>
                      {" "}
                      <span className="title">Address :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Butwal
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span className="title">phone :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        <a
                          // style="color:unset;text-decoration:none;"
                          href="tel:+9779867513539"
                        >
                          9867513539
                        </a>
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span className="title">Gmail :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        <a
                          // style="color:unset;text-decoration:none;"
                          href="mailto:poudelnarayan434@gmail.com"
                        >
                          poudelnarayan434
                        </a>
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span className="title">Faceboook :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        {" "}
                        <a
                          // style="color:unset;text-decoration:none;"
                          href="https://www.facebook.com/narayan434/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          /narayan434
                        </a>
                      </span>
                    </li>
                    <li>
                      {" "}
                      <span className="title">languages :</span>{" "}
                      <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                        Nepali, English
                      </span>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-12 mt-3">
                  <a
                    href="{% static 'files/My_CV.pdf' %}"
                    className="btn btn-download"
                    download
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
              <div className="row">
                <div className="col-6">
                  <div className="box-stats with-margin count-box">
                    <h3>
                      <span
                        className="poppins-font position-relative count-text"
                        data-speed="1300"
                        data-stop="5"
                      >
                        0
                      </span>
                    </h3>
                    <p className="open-sans-font m-0 position-relative text-uppercase">
                      years of <span className="d-block">experience</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats with-margin count-box">
                    <h3>
                      <span
                        className="poppins-font position-relative count-text"
                        data-speed="1500"
                        data-stop="15"
                      >
                        0
                      </span>
                    </h3>
                    <p className="open-sans-font m-0 position-relative text-uppercase">
                      completed <span className="d-block">projects</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats count-box">
                    <h3>
                      <span
                        className="poppins-font position-relative count-text"
                        data-speed="1500"
                        data-stop="20"
                      >
                        0
                      </span>
                    </h3>
                    <p className="open-sans-font m-0 position-relative text-uppercase">
                      Happy<span className="d-block">customers</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats count-box">
                    <h3>
                      <span
                        className="poppins-font position-relative count-text"
                        data-speed="1500"
                        data-stop="7"
                      >
                        0
                      </span>
                    </h3>
                    <p className="open-sans-font m-0 position-relative text-uppercase">
                      awards <span className="d-block">won</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="separator" />
          <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase  custom-title ft-wt-600">
                &lt; My Skills &nbsp;&gt;
              </h3>
            </div>
            <div className="html col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p90">
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                html
              </h6>
            </div>
            <div className="js col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p40">
                <span>40%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                javascript
              </h6>
            </div>
            <div className="css col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p70">
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                css
              </h6>
            </div>
            <div className="php col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p50">
                <span>50%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                php
              </h6>
            </div>
            <div className="python col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p60">
                <span>60%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                Python
              </h6>
            </div>
            <div className="flutter col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p50">
                <span>50%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                Flutter
              </h6>
            </div>
            <div className="Java col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p40">
                <span>40%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                JAVA
              </h6>
            </div>
            <div className="c col-6 col-md-3 mb-3 mb-sm-5">
              <div className="c100 p40">
                <span>40%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                C++
              </h6>
            </div>
          </div>

          <hr className="separator mt-1" />

          <div className="row">
            <div className="col-lg-6 m-15px-tb">
              <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                &lt; Experience &nbsp;&gt;
              </h3>
              <div className="resume-box">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                      2019 - Present
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      Web Developer{" "}
                      <span className="place open-sans-font">Lumbini Tech</span>
                    </h5>
                    <p className="open-sans-font">
                      Working as a responsive Full-Stack ( frontend + backend )
                      web developer since 2019 on Lumbini Tech
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                      20019 - present
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      Android Developer{" "}
                      <span className="place open-sans-font">Lumbini Tech</span>
                    </h5>
                    <p className="open-sans-font">
                      Can develop native and hybrid android apps according to
                      the user requirements.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-briefcase"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                      2019 - Present
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      UI/UX Designer{" "}
                      <span className="place open-sans-font">Lumbini Tech</span>
                    </h5>
                    <p className="open-sans-font">
                      Can be hired as UI/UX designer to give a new life to your
                      webpage and apps.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 m-15px-tb">
              <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
                &lt; Education &nbsp;&gt;
              </h3>
              <div className="resume-box">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                      2020+
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      Bachloer Degree
                      <span className="place open-sans-font">
                        Kantipur Engineering College
                      </span>
                    </h5>
                    <p className="open-sans-font">
                      Joined Bachloer of Computer Engineering in Kantipr
                      Engineering College (KEC){" "}
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                      2020
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      {" "}
                      College Degree
                      <span className="place open-sans-font">
                        Tilottama E.S.S
                      </span>
                    </h5>
                    <p className="open-sans-font">
                      Completed +2 on Computer Science from Tilottama English
                      Secondary School
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <span className="time open-sans-font text-uppercase">
                      2017
                    </span>
                    <h5 className="poppins-font text-uppercase">
                      SEE{" "}
                      <span className="place open-sans-font">GyanPunj B.M</span>
                    </h5>
                    <p className="open-sans-font">
                      Passed School Level Examination from Gyan punja Bidhaya
                      Mandir Secondary School.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
