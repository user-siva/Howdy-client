import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useEffect,useState} from "react"
import axios from "axios"
import {useParams} from "react-router"

function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user,setUser] = useState({})
    const username = useParams().username

    useEffect(() => {
      const fetchUsers = async () => {
          const res = await axios.get(`/users?username=${username}`)
          setUser(res.data)
      }
      fetchUsers()
    },[username])

    return (
        <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src={user.coverPicture || PF+"users/noCover.png"} alt="" className="profileCoverImg"/>
                <img src={PF+user.profilePicture || PF+"users/noAvatar.png"} alt="" className="profileImg"/>
              </div>
              <div className="profileInfo">
                  <h4 className="ProfileName">{user.username}</h4>
                  <span className="ProfileDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
                <Feed username={username}/>
                <Rightbar user={user}/>
            </div>
        </div>
      </div>
    </>
    );
}

export default Profile;