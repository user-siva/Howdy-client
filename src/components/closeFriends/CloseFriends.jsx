import "./closeFriends.css"

function CloseFriends({user}) {
    return (
        <li className="sidebarFriend">
          <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
          <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
}

export default CloseFriends;