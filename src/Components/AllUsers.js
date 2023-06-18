import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import { useContextAuthProvider } from "../Firebase/context";
import axios from "axios";
import User from "./User";
import "./AllUsers.css";

const API = process.env.REACT_APP_API_URL;

function AllUsers({ currentUsers }) {
  const { zipcode, user } = useContextAuthProvider();
  // console.log("currentUsers =", currentUsers);
  const loggedInUserUID = user.uid;
  const [loggedInUserLikes, setLoggedInUserLikes] = useState();

  // logged in user likes table fetch
  useEffect(() => {
    axios
      .get(`${API}/user/${loggedInUserUID}/likes`)
      .then((response) => {
        if (response.data.length) setLoggedInUserLikes(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="users">
      {currentUsers
        .filter((currentUser) => {
          return currentUser?.zip_code?.toString().includes(zipcode);
        })
        .map((currentUser) => {
          return currentUser.uid ? (
            <User
              key={currentUser.uid}
              currentUser={currentUser}
              loggedInUserLikes={loggedInUserLikes}
            />
          ) : null;
        })}
    </div>
  );
}

export default AllUsers;
