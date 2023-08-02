import PropTypes from "prop-types";
import "./css/checkbox.css";

export const Checkbox = ({ size, checked, label }) => {
  return (
    <label className="checkbox">
      {label}
      <input type="checkbox" defaultChecked={checked} />
      <span className={["checkmark", `checkmark--${size}`].join(" ")}></span>
    </label>
  );
};

Checkbox.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  checked: PropTypes.bool,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  size: "md",
  checked: false,
  label: "",
};
