import { Link } from "react-router-dom";

// ARTWORK DISPLAYED IN gallery.map in GALLERY.js
const User = ({ user }) => {
  const { first_name, last_name, gender } = user;

  return (
    <div>
      {/* <img id="galleryImage" src={image} alt="artwork" /> */}
      <h1>
        {first_name} {last_name}
      </h1>
      <h3>Gender: {gender}</h3>

      {/* <Link to={`/gallery/${user.id}`}>
        <h4 id="seeArtworkDetails">See User details!</h4>
      </Link> */}
    </div>
  );
};

export default User;
