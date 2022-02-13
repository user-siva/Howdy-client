import "./rightbar.css"

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Hattori</b> have birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="onlineFrdList">
                    <li className="onlineFrd">
                        <div className="rightbarImgContainer">
                            <img src="assets/users/8.png" alt="" className="rightbarProfile" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Goku</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;