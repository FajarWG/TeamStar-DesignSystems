import PropTypes from "prop-types";
import "./css/label.css";
import { InfoCircle } from "iconsax-react";

export const Label = ({ type, text }) => {
  return (
    <label className="label">
      {type === "required" ? (
        <span>*</span>
      ) : type === "change" ? (
        <span className="rectangle"></span>
      ) : null}
      {text}
      {type === "info" ? (
        <InfoCircle size={14} color="var(--primary300)" variant="Bold" />
      ) : null}
    </label>
  );
};

const TypeProps = ["default", "required", "info", "change"];

Label.propTypes = {
  type: PropTypes.oneOf(TypeProps),
  text: PropTypes.string.isRequired,
};

Label.defaultProps = {
  type: "default",
  text: "Label",
};
