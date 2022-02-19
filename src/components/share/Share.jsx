import "./share.css"
import { PermMedia,Label,Room,EmojiEmotions } from "@mui/icons-material"

function Share(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={PF+"users/7.jpg"} alt="" className="shareProfile" />
                    <input placeholder="What's on your mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareBtn">Share</button>
                </div>
            </div>
        </div>
    );
}

export default Share;