/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import "./css/menu.css";
import { Label } from "./Label";

export const MenuNavigation = ({ type, svg, text, sizeFont, selected }) => {
  const selectedClass = selected ? "menu-selected" : "";

  return (
    <a
      className={[
        type === "horizontal" ? "menu-hor" : "menu-ver",
        selectedClass,
      ].join(" ")}
      href="/"
    >
      {svg}
      <Label text={text} size={sizeFont} />
    </a>
  );
};

const TypeProps = ["horizontal", "vertical"];

MenuNavigation.propTypes = {
  type: PropTypes.oneOf(TypeProps),
  selected: PropTypes.bool,
  text: PropTypes.string,
  sizeFont: PropTypes.string,
};

MenuNavigation.defaultProps = {
  type: "horizontal",
  sizeFont: "sm",
  selected: false,
};
