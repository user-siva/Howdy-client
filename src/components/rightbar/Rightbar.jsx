import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummyData"

function Rightbar({profile}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

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
            <h4 className="rightbarTitle">User Information:</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarKey">City:</span>
                    <span className="rightbarValue">TamilNadu</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarKey">From:</span>
                    <span className="rightbarValue">Tirunelveli</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarKey">Relationship:</span>
                    <span className="rightbarValue">Morattu Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Information:</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={ `${PF}users/1.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Robert Downey</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={ `${PF}users/1.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Robert Downey</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={ `${PF}users/1.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Robert Downey</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={ `${PF}users/1.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Robert Downey</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={ `${PF}users/1.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Robert Downey</span>
                </div>
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar />}
            </div>
        </div>
    );
}

export default Rightbar;