import "./login.css"
import {useRef,useContext} from "react"
import {loginCall} from "../../ApiCalls"
import {AuthContext} from "../../context/AuthContext"

function Login() {
    const email = useRef()
    const password = useRef()
    const {user,isFetching,error,dispatch} = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault()
        loginCall({email:email.current.value,password:password.current.value},dispatch)
    }
    console.log(user)
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
                    <form className="loginBox" onSubmit={handleClick}>                       
                        <input type="text" placeholder="Email" type="email" className="loginInput" ref={email} required />
                        <input type="text" placeholder="Password" type="password" className="loginInput" ref={password} minLength="6" required />
                        <button className="loginButton" disabled={isFetching}>
                            {isFetching ? "Loading..." : "Login"}
                        </button>
                        <span className="loginForget">Forget Password?</span>
                        <button className="registerButton">
                            {isFetching ? "Loading..." : "Register"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;