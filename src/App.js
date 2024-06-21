import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { ColorContext } from "./shared/context/color-context";
import Info from "./portfolio/pages/Info";
import About from "./portfolio/pages/About";
import Hire from "./portfolio/pages/Hire";
import Contact from "./portfolio/pages/Contact";
import PageNotFound from "./portfolio/pages/PageNotFound";

const App = () => {
  const [color, setColor] = useState("black");

  const changeColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      <Router>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/pagenotfound" />} />
        </Routes>
      </Router>
    </ColorContext.Provider>
  );
};

export default App;
