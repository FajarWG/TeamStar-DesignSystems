import PropTypes from "prop-types";
import "./css/input.css";
import { ArrowRight3 } from "iconsax-react";

export const Input = ({
  value,
  label,
  names,
  placeholder,
  hint,
  type,
  disabled,
  icon,
  onChange,
}) => (
  <div className="input">
    {icon && (
      <ArrowRight3
        className="input-icon"
        size={22}
        color={!disabled ? "var(--primary300)" : "var(--secondary200)"}
      />
    )}
    {label && (
      <label
        className={`small ifta-label ${!icon ? "ifta-label-noicon" : null}`}
        htmlFor="input1"
      >
        {label}
      </label>
    )}

    <input
      type={type}
      value={value}
      name={names}
      className={icon ? "ifta-field-icon" : "ifta-field"}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
    {hint && <p className="ifta-hint">{hint}</p>}
  </div>
);

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  names: PropTypes.string,
  placeholder: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  label: "Label",
  names: "name",
  placeholder: "Placeholder",
  hint: "",
  type: "text",
  disabled: false,
  icon: true,
  onChange: () => {},
};
