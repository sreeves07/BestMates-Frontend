import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';
import "./AllUsers.css"

const API = process.env.REACT_APP_API_URL;

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/user`)
      .then((response) => {
        // console.log("user api response data=", response.data);
        setUsers(response.data);
      })
      .catch((c) => console.warn('catch', c));
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/user/:id/answers`)
      .then((response) => {
        console.log(response.data);
        // console.log("user api response data=", response.data);
        setPreferences(response.data);
      })
      .catch((c) => console.warn('catch', c));
  }, []);

  return (
    <div className="users">
      {users.map((user) => {
        return  user.first_name? <User key={user.id} user={user} /> : null;
      })}
    </div>
  );
}

export default AllUsers;
