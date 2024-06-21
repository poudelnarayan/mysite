import React from "react";

const SettingIcon = (props) => {
  return (
    <div id="showSwitcher" className="styleSecondColor">
      <i className="fa fa-cog fa-spin" onClick={props.onSettingTap}></i>
    </div>
  );
};

export default SettingIcon;
