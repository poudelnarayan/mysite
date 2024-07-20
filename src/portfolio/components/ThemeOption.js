import React, { useState, useEffect } from "react";
import "./ThemeOption.css";

const ThemeOption = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);
    return savedTheme ? savedTheme : "dark";
  });
  

  useEffect(() => {
    const element = document.getElementById("body");
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
      document.getElementById("color").href = "/static/CSS/skins/yellow.css";
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
      document.getElementById("color").href = "/static/CSS/skins/green.css";
    }
    console.log("Current theme:", theme);

    // Save the theme to localStorage whenever it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div id="app-cover">
      <div className="toggle-button-cover">
        <div className="button-cover">
          <div className="button r" id="button">
            <input
              type="checkbox"
              className="checkbox"
              checked={theme === "light"}
              onChange={handleToggle}
            />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeOption;
