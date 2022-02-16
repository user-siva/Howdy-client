import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src={`${PF}ad.png`} alt="" className="profileCoverImg"/>
                <img src={`${PF}users/1.jpg`} alt="" className="profileImg"/>
              </div>
              <div className="profileInfo">
                  <h4 className="ProfileName">Siva Ganesh</h4>
                  <span className="ProfileDesc">This is some text for description</span>
              </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
      </div>
    </>
    );
}

export default Profile;