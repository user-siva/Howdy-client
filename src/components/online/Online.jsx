import "./online.css";

function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="onlineFrd">
            <div className="rightbarImgContainer">
             <img src={PF+user.profilePicture} alt="" className="rightbarProfile" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
}

export default Online;