import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import "./User.css";

// const API = process.env.REACT_APP_API_URL;

const User = ({ currentUser }) => {
  const { first_name, birthday, gender, id, profile_image } = currentUser;

  const age = (birthday) => {
    const birthYearSplit = new Date(birthday).toString().split(" ");
    const birthYearToNum = Number(birthYearSplit[3]);
    let currentYear = new Date().getFullYear();
    return currentYear - birthYearToNum;
  };

  return (
    <div>
      {/* provides link to single user card view */}
      <Link to={`/users/${id}`}>
        <div className="userCard">
          <img
            className="rounded-circle"
            style={{ width: "9.0rem", height: "9.0rem" }}
            alt="Avatar"
            id="profileImage"
            src={profile_image}
            // alt="user profile"
          />{" "}
          <br />
          <span className="userCard-fname">{first_name} </span> <br />
          <span className="userCard-info">
            {" "}
            Age:{age(birthday)} {gender}
          </span>{" "}
          <br />
        </div>
      </Link>
    </div>
  );
};

export default User;
