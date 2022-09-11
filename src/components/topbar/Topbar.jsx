import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import person1 from '../../assets/person1.jpg'
import { Link } from "react-router-dom"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SendIcon from '@mui/icons-material/Send';
import Groups2Icon from '@mui/icons-material/Groups2';



export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BeFree</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link className="linkk" to="/login"><span className="topbarLink">Login</span></Link>
          <Link className="linkk" to="/"><span className="topbarLink">Home</span></Link>
          <Link className="linkk" to="/Profile"><span className="topbarLink">Profile</span></Link>
          <Link className="linkk" to="/Register"><span className="topbarLink">Register</span></Link>

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person id="personicon" />
            <span className="topbarIconBadge">1</span>
            <div className="hovereffect"><PersonAddIcon id="icon" /><p>Tony freddo</p></div>
            </div>
          

            <div className="topbarIconItem">
             <Chat />
             <span className="topbarIconBadge">1</span>
            <div className="hovereffect"><SendIcon id="icon"/> <p>Tony freddo "hi"</p></div>
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
           <Notifications />
           <span className="topbarIconBadge">1</span>
            <div className="hovereffect"><Groups2Icon id="icon"/> <p>Kings added you</p></div>
            <span className="topbarIconBadge">1</span>
          </div>

          



          </div>
          
         
        </div>
        
      </div>
     
    
  );
}