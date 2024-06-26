import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Set loading to true when location changes
    setLoading(true);

    // Simulate a loading delay to mimic data fetching or route loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Adjust the delay as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [location]);

  return (
    loading && (
      <div id="preloader" className="preloader">
        <div className="black_wall"></div>
        <div className="loader"></div>
      </div>
    )
  );
};

export default Preloader;
