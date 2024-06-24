import React from "react";

const ColorOption = ({ color, setActiveStyleSheet }) => {
  return (
    <li>
      <img
        src={`/static/Image/${color}.png`}
        alt={color}
        onClick={() => setActiveStyleSheet(color)}
        title={color}
        className="color hand-cursor"
      />
    </li>
  );
};

export default ColorOption;
