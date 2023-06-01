import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import User from "./User";
import "./AllUsers.css";

// const API = process.env.REACT_APP_API_URL;

function AllUsers({ currentUsers }) {
  // const [users, setUsers] = useState([...currentUsers]);
  console.log(currentUsers);
  // const [preferences, setPreferences] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  // useEffect(() => {
  //   axios
  //     .get(`${API}/user`)
  //     .then((response) => {
  //       // console.log("user api response data=", response.data);
  //       setUsers(response.data);
  //     })
  //     .catch((c) => console.warn("catch", c));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${API}/user/:uid/answers`) // changed from :id
  //     .then((response) => {
  //       console.log(response.data);
  //       // console.log("user api response data=", response.data);
  //       setPreferences(response.data);
  //     })
  //     .catch((c) => console.warn("catch", c));
  // }, []);

  //get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="users">
      {currentUsers.map((currentUser) => {
        return currentUser.id ? (
          <User key={currentUser.id} currentUser={currentUser} />
        ) : null;
      })}
    </div>
  );
}

export default AllUsers;
