import PropTypes from "prop-types";
import "./css/divider.css";

export const Divider = ({ variant, label }) => {
  return (
    <div className="divider">
      {variant === "middle" ? (
        <div className="divider-line" />
      ) : variant === "right" ? (
        <div className="divider-line" />
      ) : null}

      {variant !== "default" ? (
        <span className="divider-label">{label}</span>
      ) : (
        <div className="divider-line" />
      )}

      {variant === "middle" ? (
        <div className="divider-line" />
      ) : variant === "left" ? (
        <div className="divider-line" />
      ) : null}
    </div>
  );
};

Divider.propTypes = {
  variant: PropTypes.oneOf(["default", "left", "middle", "right"]),
  label: PropTypes.string,
};

Divider.defaultProps = {
  variant: "default",
  label: "Content",
};
