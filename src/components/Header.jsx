import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <div>
      <header>
        <h1>{title}</h1>
        {location.pathname === "/" && (
          <Button
            title={showAdd ? "Close Form" : "Open Form"}
            color={showAdd ? "brown" : "#9BA98F"}
            onAdd={onAdd}
            showAdd={showAdd}
          />
        )}
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker !",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
