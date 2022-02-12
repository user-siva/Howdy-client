import "./post.css"
import {MoreVert} from "@mui/icons-material"

function Post() {
    return (
        <div className="post" >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="assets/users/7.jpg" alt="" className="postProfile" />
                        <span className="postUserName">Siva</span>
                        <span className="postTime">2 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hey! It's my first post.
                    </span>
                    <img src="assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postIcon" src="assets/like.png" alt="" />
                        <img className="postIcon" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">55 peoples liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">3 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;