import { Link } from "react-router-dom";
import avatarImage from "../Images/unisex-profile-pic.png";

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const User = ({user}) => {
const { first_name, age, gender, id } = user;

  return (
    <div>
      <div className="userCard">
        <img
          id="profileImage"
          src={avatarImage}
          alt="user profile image"
        /> <br/>
        <span className="userCard-fname"> Name: {first_name} </span> <br/>
        <span className="userCard-age"> Age:{age} </span> <br/>
        <span className="userCard-gender">Gender: {gender}</span>
      </div>
      <Link to={`/users/${id}`}>
        <h4 id="profilePic">See RoomMate details!</h4>
      </Link>
    </div>
  );
};

export default User;
