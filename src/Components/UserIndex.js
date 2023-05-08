import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const API = process.env.REACT_APP_API_URL;

function UserIndex() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios
        .get(`${API}/users`)
        .then((response) => {
          console.log(response.data);
          setUsers(response.data);
        })
        .catch((c) => console.warn("catch", c));
    }, []);

  return (
    <div>
      <p className="users">
        {users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </p>
    </div>
  )
}

export default UserIndex






