import React, { useState, useEffect, useRef } from "react";
import SettingIcon from "./SettingIcon";
import ColorOption from "./ColorOption";
import ThemeOption from "./ThemeOption";

const ColorSwitcher = () => {
  const [displaySetting, setDisplaySetting] = useState({ isActive: false });
  const switcherRef = useRef(null);

  const toggleDisplaySetting = () => {
    setDisplaySetting((prevState) => ({ isActive: !prevState.isActive }));
  };

  const setActiveStyleSheet = (style) => {
    document.getElementById("color").href = `/static/CSS/skins/${style}.css`;
  };

  const settingTapHandler = () => {
    toggleDisplaySetting();
    console.log(displaySetting.isActive);
  };

  const handleClickOutside = (event) => {
    if (switcherRef.current && !switcherRef.current.contains(event.target)) {
      setDisplaySetting({ isActive: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const colors = [
    "purple",
    "red",
    "blueviolet",
    "blue",
    "goldenrod",
    "magenta",
    "yellowgreen",
    "orange",
    "green",
    "yellow",
  ];


  return (
    <div id="switcher" ref={switcherRef}>
      {displaySetting.isActive && (
        <div className="content-switcher">
          <h4>THEME SWITCHER</h4>
          <ul>
            <ThemeOption
              toggleDisplaySetting={toggleDisplaySetting}
            />
          </ul>
          <h4>COLOR SWITCHER</h4>
          <ul>
            {colors.map((color) => (
              <ColorOption
                key={color}
                color={color}
                setActiveStyleSheet={setActiveStyleSheet}
              />
            ))}
          </ul>
        </div>
      )}
      {!displaySetting.isActive && (
        <SettingIcon onSettingTap={settingTapHandler} />
      )}
    </div>
  );
};

export default ColorSwitcher;
