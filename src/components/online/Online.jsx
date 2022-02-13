import "./online.css";

function Online({user}) {
    return (
        <li className="onlineFrd">
            <div className="rightbarImgContainer">
             <img src={user.profilePicture} alt="" className="rightbarProfile" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
}

export default Online;