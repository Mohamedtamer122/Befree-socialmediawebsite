import "./register.css";
import {Link} from 'react-router-dom'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function Register() {
  return (
    <div className="login">
      <Link className="thebuttonn" to="/"><button className="returntohomepage"><KeyboardReturnIcon id="arrowicon" /></button></Link>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"><p className="titlee">Befree</p></h3>
          <span className="loginDesc">
           <p>Connect with friends and the world around you on Befree.</p> 
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="customiedp">Befree</p>
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className=" mybutton">Sign Up</button>
            <button className="mybutton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}