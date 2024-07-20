import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <React.Fragment>
      <nav>
        <header className="header" id="navbar-collapse-toggle">
          <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1 ">
            <li className="icon-box" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon icon={faHome} className="fa icon" />
              <Link to="/">
                <h2>Home</h2>
              </Link>
            </li>
            <li className="icon-box">
              <FontAwesomeIcon icon={faUser} className="fa" />
              <Link to="/about">
                <h2>About</h2>
              </Link>
            </li>
            <li className="icon-box">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="fa" />
              <Link to="/contact">
                <h2>Contact</h2>
              </Link>
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
                  <Link to="/">
                    <FontAwesomeIcon icon={faHome} className="fa" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <FontAwesomeIcon icon={faUser} className="fa" />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="fa" />
                    <span>Contact</span>
                  </Link>
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
