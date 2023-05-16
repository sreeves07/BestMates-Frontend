import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ShowOneUser.css";

const API = process.env.REACT_APP_API_URL;

const ShowOneUser = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/user/${id}`)
      .then((response) => {
        console.log("user api response data=", response.data);
        setUser(response.data[0]);
      })
      .catch((c) => console.warn("catch", c));
  }, [id]);

  useEffect(() => {
    axios
      .get(`${API}/user/${id}/images`)
      .then((response) => {
        console.log("user api response data for images=", response.data);
        setImage(response.data[0].profile_image);
      })
      .catch((c) => console.warn("catch", c));
  }, [id]);

  const { first_name, gender, birthday } = user;

  const age = (birthday) => {
    const birthYearSplit = new Date(birthday).toString().split(" ");
    const birthYearToNum = Number(birthYearSplit[3]);
    let currentYear = new Date().getFullYear();
    return currentYear - birthYearToNum;
  };

  return (
    <div>
      <div className="user">
        <img id="showOneUserPhoto" src={image} alt="profile"></img>
        <h2>{first_name}</h2>
        <div>
          <span>Age: {age(birthday)}</span>
        </div>
      </div>

      <div className="ShowPageButtons">
        <Link to={`/users`}>
          <button id="backToUsersBtn">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowOneUser;
