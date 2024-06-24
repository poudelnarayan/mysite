// BoxStats.js
import React from "react";
import Counter from "../components/Counter";

const BoxStats = ({ stop, speed, label }) => (
  <div className="col-6">
    <div className="box-stats with-margin count-box">
      <h3>
        <Counter stop={stop} speed={speed} />
      </h3>
      <p className="open-sans-font m-0 position-relative text-uppercase">
        {label}
      </p>
    </div>
  </div>
);

export default BoxStats;
