import React from "react";

import BoxStats from "./BoxStats";

const CounterList = ({ counters }) => (
  <div className="col-12 col-lg-7 col-xl-6 mt-5 mt-lg-0">
    <div className="row">
      {counters.map((counter, index) => (
        <BoxStats key={index} speed="800" {...counter} />
      ))}
    </div>
  </div>
);

export default CounterList;
