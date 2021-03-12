import React from "react";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";

function Header() {
  return (
    <div>
      <div>
        <h2>Where in the world?</h2>
        <div>
          <Brightness2OutlinedIcon />
          <h4>Dark Mode</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
