import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Info from "./portfolio/pages/Info";
import About from "./portfolio/pages/About";
import Hire from "./portfolio/pages/Hire";
import Contact from "./portfolio/pages/Contact";
import PageNotFound from "./portfolio/pages/PageNotFound";
import DisableCtrlS from "./shared/utils/DisableCtrls";
import Navigation from "./portfolio/components/Navigation";
import Preloader from "./portfolio/components/PreLoader";
import ColorSwitcher from "./portfolio/components/ColorSwitcher";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const element = document.getElementById("body");

    if (savedTheme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
      document.getElementById("color").href = "/static/CSS/skins/yellow.css";
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
      document.getElementById("color").href = "/static/CSS/skins/green.css";
    }
  }, []);

  return (
    <>
      <Preloader />
      {location.pathname !== "/pagenotfound" && <Navigation />}
      <DisableCtrlS />
      <ColorSwitcher />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/pagenotfound" />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
