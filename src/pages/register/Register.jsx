import "./register.css"
import {useRef} from "react"
import axios from "axios"
import {useNavigate} from "react-router"

function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if(password.current.value !== passwordAgain.current.value){
            passwordAgain.current.setCustomValidity("Oops! Password don't match.")
        }else{
            const user = {
                username : username.current.value,
                email : email.current.value,
                password : password.current.value,
            }

        try{
            await axios.post("/auth/register",user)
            navigate("/login")
        }catch(error) {
            console.log(error)
        }
    }
}

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
                    <form onSubmit={handleClick} className="loginBox">
                        <input type="text" placeholder="UserName" ref={username} className="loginInput" required/>
                        <input type="text" placeholder="Email" ref={email} type="email" className="loginInput" required/>
                        <input type="text" placeholder="Password" ref={password} type="password" minLength="6" className="loginInput" required/>
                        <input type="text" placeholder="Password again" ref={passwordAgain} type="password" minLength="6" className="loginInput" required/>
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="registerButton">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;