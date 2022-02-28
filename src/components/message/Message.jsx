import "./message.css";

function Message({ own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img src="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
                    alt="" className="messageImg" />
                <p className="messageText">I'm going to kill thanos</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    );
}

export default Message;