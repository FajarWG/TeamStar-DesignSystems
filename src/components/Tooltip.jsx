import PropTypes from "prop-types";
import { useState } from "react";
import "./css/tooltip.css";

export const Tooltip = ({ content, direction, delay, label }) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return (
    <>
      <div
        className="Tooltip-Wrapper"
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {label}
        {active && (
          <div className={`Tooltip-Tip ${direction || "top"}`}>{content}</div>
        )}
      </div>
    </>
  );
};

export const Direction = ["top", "right", "bottom", "left"];

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(Direction),
  delay: PropTypes.number,
  label: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  label: "Tooltip",
  content: "Test Tooltip",
  direction: "right",
  delay: 200,
};
