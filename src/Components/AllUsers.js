import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import User from "./User";
import "./AllUsers.css";

// const API = process.env.REACT_APP_API_URL;

function AllUsers({ currentUsers }) {
  console.log("currentUsers =", currentUsers);
  
  return (
    <div className="users">
      {currentUsers.map((currentUser) => {
        return currentUser.uid ? (
          <User key={currentUser.uid} currentUser={currentUser} />
        ) : null;
      })}
    </div>
  );
}

export default AllUsers;
