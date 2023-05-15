import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const API = process.env.REACT_APP_API_URL;

function AllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/user`)
      .then((response) => {
        // console.log("user api response data=", response.data);
        setUsers(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="users">
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
}

export default AllUsers;
