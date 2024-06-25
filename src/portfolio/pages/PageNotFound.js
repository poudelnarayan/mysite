// NotFoundPage.js
import React, { useEffect } from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  useEffect(() => {
    document.body.classList.add("about");

    return () => {
      document.body.classList.remove("about");
    };
  }, []);
  //TODO:make redirection  better
  return (
    <React.Fragment>
      <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>
          NOT <span>FOUND</span>
        </h1>
        <span className="title-bg">Page Not Found</span>
      </section>
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className="not-found-link">
          Go Back Home
        </a>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;
