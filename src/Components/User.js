import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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
      {/* provides link to single user card view */}
       <Link to={`/users/${id}`}>
          <div className="userCard">
            <img class="rounded-circle" style={{width: "9.0rem", height: "9.0rem"}}
              alt="Avatar"
              id="profileImage"
              src={image}
              // alt="user profile"
            /> <br/>
            <span className="userCard-fname">{first_name} </span> <br/>
            <span className="userCard-info"> Age:{age} {gender}  </span> <br/>
          </div>
      </Link>
    </div>
  );
};

export default User;
