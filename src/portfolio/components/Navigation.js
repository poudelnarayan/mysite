import React from "react";
import "./Navigation.css"; // Ensure this is after Bootstrap

import "@fortawesome/fontawesome-free/css/all.min.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <nav>
        <header className="header" id="navbar-collapse-toggle">
          <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
            <li className="icon-box">
              <i className="fa fa-home"></i>
              <a href="/">
                <h2>Home</h2>
              </a>
            </li>
            <li className="icon-box">
              <i className="fa fa-user"></i>
              <a href="/about">
                <h2>About</h2>
              </a>
            </li>
            <li className="icon-box">
              <i className="fa fa-envelope-open"></i>
              <a href="/contact">
                <h2>Contact</h2>
              </a>
            </li>
          </ul>

          <nav role="navigation" className="d-block d-lg-none">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className="list-unstyled" id="menu">
                <li>
                  <a href="/">
                    <i className="fa fa-home"></i>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="/about">
                    <i className="fa fa-user"></i>
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    <i className="fa fa-envelope-open"></i>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
