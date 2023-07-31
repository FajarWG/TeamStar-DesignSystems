/* eslint-disable react-refresh/only-export-components */

import PropTypes from "prop-types";
import "./css/badges.css";

export const Badges = ({ type, size, label }) => {
  const mode =
    type === "primary"
      ? "badges--primary"
      : type === "secondary"
      ? "badges--secondary"
      : type === "success"
      ? "badges--success"
      : "badges--danger";

  return (
    <span className={["badges", `badges--${size}`, mode].join(" ")}>
      {label}
    </span>
  );
};

export const TypeProps = ["primary", "secondary", "success", "danger"];
export const SizeProps = ["sm", "md", "lg"];

Badges.propTypes = {
  type: PropTypes.oneOf(TypeProps),
  size: PropTypes.oneOf(SizeProps),
  label: PropTypes.string.isRequired,
};

Badges.defaultProps = {
  type: "primary",
  size: "md",
  label: "Badges",
};
