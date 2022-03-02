import axios from "axios";
import { useState, useEffect } from "react";
import "./conversation.css";

function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const FrdId = conversation.members.find((m) => m !== currentUser._id)

        const getUser = async () => {
            try {
                const res = await axios("/users?userId=" + FrdId)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [currentUser, conversation, user])

    return (
        <div className="conversation">
            <img src={user?.profilePicture ? PF + user.profilePicture : PF + "users/noAvatar.png"}
                alt="" className="conversationImg" />
            <span className="conversationName">{user?.username}</span>
        </div>
    );
}

export default Conversation;