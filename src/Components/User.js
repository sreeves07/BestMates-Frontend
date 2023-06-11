import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { MDBBtn } from 'mdb-react-ui-kit';
import { BiMessageAltDetail, BiSmile } from "react-icons/bi"
import "../Components/SignIn/SignInForm.css"
import "./User.css";

import logo from "../Images/LOGO_no_text.png"
import defaultProfilePic from "../Images/LOGO_favicon.png";

const API = process.env.REACT_APP_API_URL;

const User = ({ currentUser }) => {
  const { first_name, birthday, gender, profile_image, uid } = currentUser;

  const [profileImage, setProfileImage] = useState("");

  const age = (birthday) => {
    const birthYearSplit = new Date(birthday).toString().split(" ");
    const birthYearToNum = Number(birthYearSplit[3]);
    let currentYear = new Date().getFullYear();
    return currentYear - birthYearToNum;
  };

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

  return (
    <div>
      {/* provides link to single user card view */}
      <Link to={`/users/${uid}`}>
        <div className="userCard">
          <img
            className="rounded-circle"
            style={{ width: "9.0rem", height: "9.0rem" }}
            alt="Avatar"
            id="profileImage"
            src={profileImage || defaultProfilePic}
            // alt="user profile"
          />{" "}
          <br />
          <br></br>
          <span className="userCard-fname">{first_name} </span> <br />
          <span className="userCard-info">
            {" "}
            {gender} - Age: {age(birthday)}
          </span>{" "}
          <br />
        </div>
      </Link>
      <div className="user-btns">
        <MDBBtn
          id="fav-btn"
          style={{width: "40px", padding: "1px"}}
          className="sign-in-btn"
          onClick={(e) => console.log(e.target)}>
        ❤️
        </MDBBtn>
        <MDBBtn
          id="message-btn"
          style={{width: "40px", padding: "1px", paddingTop: "4px"}}
          className="sign-in-btn">
          <BiMessageAltDetail size="20"/>
        </MDBBtn>
      </div>
    </div>
  );
};

export default User;
