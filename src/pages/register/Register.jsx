import "./register.css"

function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Howdy</h3>
                    <span className="loginDesc">
                        Connect with your friends and the world around you on Howdy.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" placeholder="UserName" className="loginInput" />
                        <input type="text" placeholder="Email" className="loginInput" />
                        <input type="text" placeholder="Password" className="loginInput" />
                        <input type="text" placeholder="Password again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="registerButton">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;