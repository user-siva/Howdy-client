import "./message.css";
import { format } from "timeago.js"

function Message({ message, own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img src="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
                    alt="" className="messageImg" />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    );
}

export default Message;