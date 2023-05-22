import { Link } from "react-router-dom";
//import avatarImage from "../Images/unisex-profile-pic.png";
import { useState, useEffect } from "react";
import axios from "axios";
import PreferenceIndex from "./PreferenceIndex";
import "./User.css"

const API = process.env.REACT_APP_API_URL;

const User = ({user}) => {
const { first_name, age, gender, id } = user;


const [image, setImage] = useState([]);

useEffect(() => {
  axios
    .get(`${API}/user/${id}/images`)
    .then((response) => {
      // console.log("user api response data for images=", response.data);
      setImage(response.data[0].profile_image);
    })
    .catch((c) => console.warn("catch", c));
}, [id]);

  return (
    <div>
       <Link to={`/users/${id}`}>
          <div className="userCard">
            <img
              id="profileImage"
              // src={avatarImage}
              // src={`/users/id/{image}`}
              src={image}
              alt="user profile"
            /> <br/>
            <span className="userCard-fname">{first_name} </span> <br/>
            <span className="userCard-info"> Age:{age}, {gender}  </span> <br/>
            {/* <span className="userCard-gender">Gender: </span> */}
          </div>
      </Link>
      {/* <PreferenceIndex  user={user} id={id}/> */}
    </div>
  );
};

export default User;
