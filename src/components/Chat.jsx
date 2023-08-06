import PropTypes from "prop-types";
import "./css/chat.css";
import TickSquare from "./assets/TickSquare";
import TickSquare2 from "./assets/TickSquare2";

export const Chat = ({
  type,
  label,
  state,
  user,
  photo,
  desc,
  hour,
  img,
  file,
}) => {
  return (
    <div className="chat">
      {user === "self" ? (
        <>
          <div className="chat-bubble-user">
            {type === "image" ? (
              <img src={img} alt="img" className="img-chat" />
            ) : type === "file" ? (
              <div className="file-chat-self">
                <img src={file} alt="img" className="img-file" />
              </div>
            ) : (
              <p className="chat-desc">{desc}</p>
            )}
            <div className="bottom-chat-user">
              {state === "sent" ? <TickSquare /> : <TickSquare2 />}
              <span>{hour}</span>
            </div>
          </div>
          <div className="chat-img">
            <img src={photo} alt="avatar" />
          </div>
        </>
      ) : (
        <>
          <div className="chat-img">
            <img src={photo} alt="avatar" />
          </div>
          <div className="chat-bubble">
            <p>{label}</p>

            {type === "image" ? (
              <img src={img} alt="img" className="img-chat" />
            ) : type === "file" ? (
              <div className="file-chat">
                <img src={file} alt="img" className="img-file" />
              </div>
            ) : (
              <p className="chat-desc">{desc}</p>
            )}
            <span>{hour}</span>
          </div>
        </>
      )}
    </div>
  );
};

export const TypeProps = ["default", "image", "file"];
export const UserProps = ["self", "other"];
export const StateProps = ["sent", "seen"];

Chat.propTypes = {
  type: PropTypes.oneOf(TypeProps),
  state: PropTypes.oneOf(StateProps),
  user: PropTypes.oneOf(UserProps),
  label: PropTypes.string,
  photo: PropTypes.string,
  desc: PropTypes.string,
  hour: PropTypes.string,
  img: PropTypes.string,
  file: PropTypes.string,
};

Chat.defaultProps = {
  type: "default",
  label: "Name",
  desc: "Lorem ipsum sit amet",
  hour: "10:07",
  photo: "https://i.ibb.co/GQLyPHS/image.png",
  img: "https://i.ibb.co/ZHrLrDN/image.png",
  file: "https://i.ibb.co/qjMnjLv/image.png",
};
