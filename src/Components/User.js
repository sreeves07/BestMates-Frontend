import { Link } from "react-router-dom";
import avatarImage from "../Images/unisex-profile-pic.png"

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const User = ({ user }) => {
  const { first_name, age, gender, orientation, religion } = user;

  return (
    <div>
      <div className="userCard">
      <img id="profileImage" src={avatarImage} style={{ width: "25", height: "25" }}alt="user profile image" />
      <h2> Name: {first_name} </h2>
      <h3> Age:{age} </h3>
      <h3>Gender: {gender}</h3>
      </div>
      {/* <Link to={`/gallery/${user.id}`}>
        <h4 id="seeArtworkDetails">See User details!</h4>
      </Link> */}
      <User/>
    </div>
  );
};

export default User;
