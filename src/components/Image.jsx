import PropTypes from "prop-types";
import "./css/image.css";
import noimg from "./assets/Image.png";

export const Image = ({ size, link }) => {
  return (
    <img className={`image image-${size}`} src={link ? link : noimg} alt="" />
  );
};

Image.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  link: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  size: "md",
  link: "",
  alt: "no image",
};
