import PropTypes from "prop-types";
import "./css/button.css";
import { ArrowLeft } from "iconsax-react";

export const Button = ({ type, size, label, variant, disabled, ...props }) => {
  const mode =
    type === "primary"
      ? {
          css: "button--primary",
          icon: "var(--neutral0)",
        }
      : type === "secondary"
      ? {
          css: "button--secondary",
          icon: "var(--neutral0)",
        }
      : {
          css: "button--tertiary",
          icon: "var(--primary300)",
          disable: "var(--primary500)",
        };

  const sizeIcon = size === "sm" ? "14" : size === "md" ? "19" : "22";

  return (
    <button
      type="button"
      className={[
        "button",
        `${variant !== "icon" ? `button--${size}` : `button-icon--${size}`}`,
        mode.css,
      ].join(" ")}
      disabled={disabled}
      {...props}
    >
      {variant === "icon" ? (
        <ArrowLeft
          size={sizeIcon}
          color={!disabled ? mode.icon : mode.disable}
        />
      ) : variant.includes("icon") ? (
        <>
          <ArrowLeft
            size={sizeIcon}
            color={!disabled ? mode.icon : mode.disable}
          />
          {label}
        </>
      ) : (
        label
      )}
    </button>
  );
};

export const TypeProps = ["primary", "secondary", "tertiary"];
export const VariantsProps = ["label", "icon", "icon-label"];
export const SizeProps = ["sm", "md", "lg"];

Button.propTypes = {
  type: PropTypes.oneOf(TypeProps),
  size: PropTypes.oneOf(SizeProps),
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(VariantsProps),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  size: "md",
  variant: "label",
  label: "Button",
  disabled: false,
  onClick: undefined,
};
