import React from "react";
import PropTypes from "prop-types";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import Brightness2Icon from "@material-ui/icons/Brightness2";

function Header({ theme, toggleTheme }) {
  return (
    <div>
      <div>
        <h2>Where in the world?</h2>
        <div>
          {theme === "dark" ? (
            <Brightness2Icon onClick={toggleTheme} />
          ) : (
            <Brightness2OutlinedIcon onClick={toggleTheme} />
          )}
          <h4>Dark Mode</h4>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func,
};
export default Header;
