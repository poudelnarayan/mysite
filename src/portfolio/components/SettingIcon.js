import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SettingIcon = (props) => {
  return (
    <div id="showSwitcher" className="styleSecondColor">
      <FontAwesomeIcon
        icon={faCog}
        spin
        className="fa"
        onClick={props.onSettingTap}
        color="black"
        size="lg"
      />
    </div>
  );
};

export default SettingIcon;
