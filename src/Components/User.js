import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContextAuthProvider } from "../Firebase/context";
import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import { BiMessageAltDetail, BiSmile } from "react-icons/bi";
import "../Components/SignIn/SignInForm.css";
import "./User.css";

import logo from "../Images/LOGO_no_text.png";
import defaultProfilePic from "../Images/LOGO_favicon.png";
//import { MDBBtn } from "mdb-react-ui-kit";

const API = process.env.REACT_APP_API_URL;

const User = ({ currentUser, loggedInUserLikes }) => {
  const { first_name, birthday, gender, profile_image, uid, id } = currentUser;
  const { user } = useContextAuthProvider();
  const loggedInUserUID = user.uid;
  const likedUserUID = uid;
  // console.log(currentUser);
  // console.log("UID = ", uid);
  // console.log("USER.UID = ",user.uid)
  // console.log("LoggedInUserUID = ", loggedInUserUID);

  const [profileImage, setProfileImage] = useState("");
  const [toggle, setToggle] = useState(false);
  const [checkIfLikedUser, setCheckIfLikedUser] = useState();

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

  // _____________# -FETCHES-# _____________________

  //profile images fetch
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

  //faves fetch fetches the liked user table for each individual user on component load
  useEffect(() => {
    axios
      .get(`${API}/user/${uid}/likes`)
      .then((response) => {
        // console.log("*****LIKES*****", response.data);
        // console.log("userPROFILE-IMAGE=", response.data);

        if (response.data[0]?.liked_mate_uid) {
          // console.log("DATA LIKED UID", response.data[0]?.liked_mate_uid);
          setCheckIfLikedUser(response.data[0]);
        }
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  // console.log(loggedInUserLikes);

  //************ */
  useEffect(() => {
    const checkIfUserIsLikedByLoggedInUser = loggedInUserLikes?.find(
      (likedUser) => likedUser.liked_mate_uid === uid
    );
    if (checkIfUserIsLikedByLoggedInUser) {
      setToggle(true);
    }
  }, [checkIfLikedUser]);

  // useEffect(() => {
  //   if (toggle) {
  //     addLikedMate();
  //   }
  // }, [toggle]);

  const handleClickToggle = () => {
    setToggle(!toggle);

  // PlEASE DO NOT DELETE  
  //   if (toggle === false) {
  //     const presentInLikes = loggedInUserLikes.find(
  //       (likedUser) => !loggedInUserLikes.liked_mate_uid !== uid
  //     );

  //     if (!presentInLikes) {
  //       axios
  //         .post(`${API}/user/${loggedInUserUID}/likes`, {
  //           mate_uid: `${loggedInUserUID}`,
  //           liked_mate_uid: `${likedUserUID}`,
  //         })
  //         .then((response) => {
  //           console.log(response.data);
  //           window.alert("Added to Fave-Mates!");
  //           // console.log("userPROFILE-IMAGE=", response.data);
  //         })
  //         .catch((c) => console.warn("catch", c));
  //     }
  //   }
  //   if (toggle === true) {
  //     axios
  //       .delete(`${API}/user/${loggedInUserUID}/likes`)
  //       .then((response) => {
  //         console.log(response.data);
  //         window.alert("Removed from Fave-Mates!");
  //         // console.log("userPROFILE-IMAGE=", response.data);
  //       })
  //       .catch((c) => console.warn("catch", c));
  //   }
  };

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
        <br></br>
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

