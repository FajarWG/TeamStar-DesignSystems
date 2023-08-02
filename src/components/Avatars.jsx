import PropTypes from "prop-types";
import "./css/avatars.css";

export const Avatars = ({ type, img, size, label, desc }) => {
  return (
    <div className="avatars">
      <div className={`avatars-img avatars--img-${size}`}>
        <img src={img} alt="avatar" />
      </div>

      <div className={`avatars--desc avatars--desc-${size}`}>
        <p>{label}</p>
        {type === "desc" ? <span>{desc}</span> : null}
      </div>
    </div>
  );
};

export const TypeProps = ["desc", "nodesc"];
export const SizeProps = ["sm", "md", "lg"];

Avatars.propTypes = {
  type: PropTypes.oneOf(TypeProps),
  size: PropTypes.oneOf(SizeProps),
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

Avatars.defaultProps = {
  type: "desc",
  size: "md",
  img: "https://i.ibb.co/GQLyPHS/image.png",
  label: "Olivia Rhye",
  desc: "example@gmail.com",
};
