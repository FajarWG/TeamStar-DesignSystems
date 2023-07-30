import PropTypes from "prop-types";
import "./button.css";
import { ReactComponent as ArrowLeft } from "./assets/arrow-left.svg";

export const Button = ({
  hierarchy,
  size,
  label,
  variant,
  disabled,
  ...props
}) => {
  const mode =
    hierarchy === "primary"
      ? "button--primary"
      : hierarchy === "secondary"
      ? "button--secondary"
      : "button--tertiary";

  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      disabled={disabled}
      {...props}
    >
      {variant === "icon" ? (
        <ArrowLeft />
      ) : variant.includes("icon") ? (
        <>
          <ArrowLeft />
          {label}
        </>
      ) : (
        label
      )}
    </button>
  );
};

Button.propTypes = {
  hierarchy: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["label", "icon", "icon-label"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  hierarchy: "primary",
  size: "medium",
  variant: "label",
  disabled: false,
  onClick: undefined,
};
