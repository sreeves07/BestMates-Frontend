import { Link } from "react-router-dom";
import avatarImage from "../Images/unisex-profile-pic.png";

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const User = (user) => {
  // const { first_name, age, gender, sexual_orientation, is_religious } = user;

  return (
    <div>
      <div className="userCard">
        <img
          id="profileImage"
          src={avatarImage}
          // style={{ width: "25", height: "25" }}
          alt="user profile image"
        />
        <p> Name: {user.first_name} </p>
        <p> Age:{user.age} </p>
        <p>Gender: {user.gender}</p>
      </div>
      {/* <Link to={`/gallery/${user.id}`}>
        <h4 id="seeArtworkDetails">See User details!</h4>
      </Link> */}
    </div>
  );
};

export default User;
