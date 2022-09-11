import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import person2 from '../../assets/person2.jpg'
import person1 from '../../assets/person1.jpg'
import person3 from '../../assets/person3.jpg'
import person4 from '../../assets/person4.jpg'
import person5 from '../../assets/person5.jpg'
import person6 from '../../assets/person6.jpg'



export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
        
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src={person3} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}


        </ul>

       



      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={person1}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={person2}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">jessy Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={person3}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">maria john</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={person4}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jake tony</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={person5}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">martin rock</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={person6}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">jana micheal</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}