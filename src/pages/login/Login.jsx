import "./login.css";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Login() {
  return (
    <div className="login">
      <Link className="thebuttonn" to="/"><button className="returntohomepage"><KeyboardReturnIcon id="specialicon"/>Return To homepage</button></Link>
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="mainsection">
          <h3 className="loginLogo"><p className="yes">Befree</p></h3>
          <span className="loginDesc">
            <p className="text">Connect with friends and the world around you on Befree.</p>
          </span>
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <p className="textt">Befree</p>
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="myloginbutton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
              <button className="mybutton">
              Create a New Account
              </button>
              
        
          </div>
        </div>
      </div>
    </div>
  );
}