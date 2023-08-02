import PropTypes from "prop-types";
import "./css/anchortext.css";
import { ArrowLeft } from "iconsax-react";

export const AnchorText = ({ size, type, label, disabled }) => {
  const mode = {
    icon: "var(--neutral0)",
    disable: "var(--secondary200)",
    disableText: "anchortext--disabled",
  };

  const disabledMode = disabled ? mode.disableText : null;

  const sizeIcon = size === "sm" ? "14" : size === "md" ? "19" : "19";

  return (
    <span
      className={[
        disabled ? disabledMode : `anchortext`,
        `anchortext--${size}`,
      ].join(" ")}
    >
      {type === "icon" ? (
        <ArrowLeft
          size={sizeIcon}
          color={!disabled ? mode.icon : mode.disable}
        />
      ) : (
        <>
          <ArrowLeft
            size={sizeIcon}
            color={!disabled ? mode.icon : mode.disable}
          />
          {label}
        </>
      )}
    </span>
  );
};

const TypeProps = ["text", "icon"];
const SizeProps = ["sm", "md", "lg"];

AnchorText.propTypes = {
  size: PropTypes.oneOf(SizeProps),
  type: PropTypes.oneOf(TypeProps),
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

AnchorText.defaultProps = {
  size: "md",
  type: "text",
  label: "Anchor Text",
  disabled: false,
};
