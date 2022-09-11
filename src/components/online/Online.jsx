import "./online.css";
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'

export default function Online({user}) {
  let adder=1
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={person1} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}