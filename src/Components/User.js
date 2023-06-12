import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContextAuthProvider } from "../Firebase/context";
import axios from "axios";
import { MDBBtn } from 'mdb-react-ui-kit';
import { BiMessageAltDetail, BiSmile } from "react-icons/bi"
import "../Components/SignIn/SignInForm.css"
import "./User.css";

import logo from "../Images/LOGO_no_text.png"
import defaultProfilePic from "../Images/LOGO_favicon.png";

//import { MDBBtn } from "mdb-react-ui-kit";

const API = process.env.REACT_APP_API_URL;

const User = ({ currentUser }) => {
  const { first_name, birthday, gender, profile_image, uid } = currentUser;

  const { user } = useContextAuthProvider();
  const loggedInUserUID = user.uid;
  const likedUserUID = uid;
  // console.log(currentUser);
  // console.log("UID = ", uid)
  // console.log("USER.UID = ",user.uid)
  // console.log("LoggedInUserUID = ",loggedInUserUID)

  const [profileImage, setProfileImage] = useState("");
  const [toggle, setToggle] = useState(false);

  const [postedLikedUserUID, setPostedLikedUserUID] = useState("");

  const age = (birthday) => {
    const birthYearSplit = new Date(birthday).toString().split(" ");
    const birthYearToNum = Number(birthYearSplit[3]);
    let currentYear = new Date().getFullYear();
    return currentYear - birthYearToNum;
  };

  function addLikedMate() {
    setPostedLikedUserUID(likedUserUID);
    // if (toggle === true) {

    //   console.log("Liked User = ", postedLikedUserUID);
    //   console.log("USER ADDED");
    // }
    // setPostedLikedUserUID("LIKED USER DELETED");
  }

  function handleClickToggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    axios
      .get(`${API}/user/${uid}/images`) // changed from :id
      .then((response) => {
        // console.log(response.data);
        // console.log("userPROFILE-IMAGE=", response.data);
        setProfileImage(response.data[0].profile_image);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  useEffect(() => {
    if (toggle) {
      addLikedMate();
    }
  }, [toggle]);

  return (
    <div>
      {/* provides link to single user card view */}

      <div className="userCard">
        <Link to={`/users/${uid}`}>
          <img
            className="rounded-circle"
            style={{ width: "9.0rem", height: "9.0rem" }}
            alt="Avatar"
            id="profileImage"
            src={profileImage || defaultProfilePic}
            // alt="user profile"
          />{" "}
        </Link>
        <br />
       
        <span className="userCard-fname">{first_name} </span> <br />
        <span className="userCard-info">
          {" "}
          {gender} - Age: {age(birthday)}
        </span>{" "}
        <br />
        <span className="userCard-likedToggle" onClick={handleClickToggle}>
          {toggle ? <span>💖</span> : <span>♡</span>}
        </span>
      </div>
    </div>
  );
};

export default User;
{
  /* <tr>
      <td>
        {bookmark.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={bookmark.url} target="_blank" rel="noreferrer">
          {bookmark.name}
        </a>
      </td>
      <td>
        <Link to={`/bookmarks/${bookmark.id}`}>✏️</Link>
      </td>
    </tr> */
}

// <tr>
//   <td>
//     {song.is_favorite ? (
//       <span>⭐️</span>
//     ) : (
//       <span>&nbsp; &nbsp; &nbsp;</span>
//     )}
//   </td>
//   <td>
//     <a href={song.url} target="_blank" rel="noreferrer">
//       {song.name}
//     </a>
//   </td>
//   <td>
//     {/* <Link to={`/songs/${song.id}`}>✏️</Link> */}
//     <Link to={`/songs/${song.id}`}><span className="songEditIcon">🎸</span></Link>
//   </td>
// </tr>
