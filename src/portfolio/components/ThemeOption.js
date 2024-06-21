import React from "react";

const ThemeOption = (props) => {
  const handleTheme = (theme) => {
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
    console.log(theme);
  };
  return (
    <li>
      <img
        src={`/static/Image/${props.theme}.png`}
        alt={`${props.theme}`}
        onClick={() => handleTheme(props.theme)}
      />
    </li>
  );
};

export default ThemeOption;
