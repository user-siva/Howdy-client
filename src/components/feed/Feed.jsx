import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import {useState,useEffect} from "react"
import axios from "axios"

function Feed({ username }) {
    const [posts,setPosts] = useState([])
    
    useEffect(() => {
        const fetchPosts = async () => {
            const res = username 
            ? await axios.get("/post/profile/"+username) 
            : await axios.get("post/timeline/620cc682d418417a9dd24938");
            setPosts(res.data)
        }
        fetchPosts()
    },[username])

    return (
        <div className="feed">
           <div className="feedWrapper">
               <Share />
               {posts.map((p) => (
                <Post key={p._id} post={p} />
               ))}
           </div>
        </div>
    );
}

export default Feed;