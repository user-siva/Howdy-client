import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummyData"
import {useEffect,useState} from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import {Add,Remove} from "@mui/icons-material"
import axios from "axios"
import { useContext } from "react"

function Rightbar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends,setFriends] = useState([])
    const {user:currentUser,dispatch} = useContext(AuthContext)
    const [followed,setFollowed] = useState(currentUser.followings.includes(user?.id))

    useEffect(() => {
        const getFrds = async () => {
          try{
            const frdlist = await axios.get("/users/friends/"+ user._id)
            console.log(frdlist.data)
            setFriends(frdlist.data)
          }catch(err){
              console.log(err);
          }
        }
        getFrds()
    },[user])

    const handleClick = async () => {
        try {
            if(followed){
                await axios.put("/users/"+user._id+"/unfollow",{userId:currentUser._id})
                dispatch({type:"UNFOLLOW",payload:user._id})
            }else{
                await axios.put("/users/"+user._id+"/follow",{userId:currentUser._id})
                dispatch({type:"FOLLOW",payload:user._id})
            }

        }catch(err) {
            console.log(err);
        }
        setFollowed(!followed)
    }


    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Hattori</b> have birthday today</span>
                </div>
                <img src={`${PF}ad.png`} alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="onlineFrdList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
            {user.username !== currentUser.username && (
                <button className="rightbarFollowBtn" onClick={handleClick}>
                    {followed ? "Unfollow" : "Follow"}
                    {followed ? <Remove /> : <Add />}
                </button>
            )}
            <h4 className="rightbarTitle">User Information:</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarKey">City:</span>
                    <span className="rightbarValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarKey">From:</span>
                    <span className="rightbarValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarKey">Relationship:</span>
                    <span className="rightbarValue">
                      {user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}
                    </span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends:</h4>
            <div className="rightbarFollowings">
                {friends.map((frd) => (
                    <>
                    <Link to={"/profile/"+frd.username} style={{textDecoration:"none"}}>
                    <div className="rightbarFollowing">
                    <img src={frd.profilePicture ? PF+frd.profilePicture : PF+"users/noAvatar.png"} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">{frd.username}</span>
                    </div>
                    </Link>
                    </>
                ))}
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar />}
            </div>
        </div>
    );
}

export default Rightbar;