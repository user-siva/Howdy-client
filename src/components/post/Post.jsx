import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {useState,useEffect,useContext} from "react"
import axios from "axios"
import {format} from "timeago.js"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

function Post({post}) {
    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user,setUser] = useState({})

    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user:currentUser} = useContext(AuthContext)

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUsers()
    },[post.userId])

    const likeHandler = async () => {
        try {
           await  axios.put("/post/"+post._id+"/like",{userId:currentUser._id})
        }catch(error){
            console.error();
        }
        setLike(isLiked ? like-1 :like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post" >
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                         <img src={user.profilePicture ? PF+user.profilePicture : PF+"users/noAvatar.png"} alt="" className="postProfile" />
                        </Link>
                        <span className="postUserName">{user.username}</span>
                        <span className="postTime">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={PF+post.img} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className="postIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} peoples liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;