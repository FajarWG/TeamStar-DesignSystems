import PropTypes from "prop-types";
import "./css/comment.css";

export const Comment = ({ photo, label, desc, hour, like, reply }) => {
  return (
    <div className="comment">
      <div className="comment-img">
        <img src={photo} alt="avatar" />
      </div>
      <div className="comment-body">
        <div className="comment-bubble-user">
          <p>{label}</p>

          <p className="comment-desc">{desc}</p>
        </div>
        <div className="bottom-comment-user">
          <span className={like === 0 ? null : "like-blue"}>
            Like{like ? `-${like}` : null}
          </span>
          <span>Reply</span>
          <span> • {hour}h</span>
        </div>
        {reply === 0 ? null : (
          <span className="reply">View All {reply} Reply</span>
        )}
      </div>
    </div>
  );
};

Comment.propTypes = {
  photo: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
  hour: PropTypes.string.isRequired,
  like: PropTypes.number,
  reply: PropTypes.number,
};

Comment.defaultProps = {
  photo: "https://i.ibb.co/GQLyPHS/image.png",
  label: "Alvin tua SAlamony Sitanggang",
  desc: "Lorem ipsum sit amet",
  hour: "7",
  like: 0,
  reply: 0,
};
