import PropTypes from "prop-types";
import "./css/dots.css";

export const Dots = ({ size, states }) => {
  const mode = states === "offline" ? "dots--offline" : "dots--online";

  return <span className={["dots", `dots--${size}`, mode].join(" ")}></span>;
};

Dots.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  states: PropTypes.oneOf(["offline", "online"]),
};

Dots.defaultProps = {
  size: "md",
  states: "online",
};
