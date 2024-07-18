import React from "react";
import PropTypes from "prop-types";
import { FaWpforms } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
const Button = ({ title, color, onAdd, showAdd}) => {
  return (
    <button
      style={{ backgroundColor: color, textAlign: "start" }}
      className="btn"
      onClick={onAdd}
    >
      {}
      {showAdd ? (
        <RiCloseLargeLine style={{ marginRight: "20px" }} />
      ) : (
        <FaWpforms size={20} style={{ marginRight: "20px" }} />
      )}
      {title}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  title: "Button!",
  color: "#9BA98F",
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};
