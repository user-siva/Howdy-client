import "./share.css"
import { PermMedia,Label,Room,EmojiEmotions } from "@mui/icons-material"
import { AuthContext } from "../../context/AuthContext"
import {useContext,useRef,useState} from "react"
import axios from "axios"

function Share(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user} = useContext(AuthContext)
    const desc = useRef()
    const [file,setFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId:user._id,
            desc:desc.current.value
        }
        if(file){
            const data = new FormData()
            const fileName = file.name
            data.append("file",file)
            data.append("name",fileName)
            newPost.img = fileName
            console.log(newPost);
            try{
                await axios.post("/upload",data)
            }catch(error){
                console.log(error)
            }
        }

        try{
            await axios.post("/post",newPost)
        }catch(error){}
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user.profilePicture ? PF+user.profilePicture : PF = "users/noAvatar.png"} alt="" className="shareProfile" />
                    <input placeholder={"What's on your mind,"+user.username+"?"} ref={desc} className="shareInput" />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={submitHandler} encType="multipart/form-data">
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                            <input type="file" id="file" style={{display:"none"}} accept=".png,.jpeg,.jpg" id="file" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
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
                    <button className="shareBtn" type="submit">Share</button>
                </form>
            </div>
        </div>
    );
}

export default Share;