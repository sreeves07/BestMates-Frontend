import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const ShowOneUser = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState([]);

  const { first_name } = user;

  useEffect(() => {
    axios
      .get(`${API}/user/${id}`)
      .then((response) => {
        console.log("user api response data=", response.data);
        setUser(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, [id]);

  return (
    <article>
      <div className="user">
        {/* <img id="showOneUserPhoto" src={image} alt="profile image"></img> */}
        <h1>{first_name}</h1>
      </div>

      <div className="ShowPageButtons">
        <Link to={`/users`}>
          <button id="backToUsersBtn">Back</button>
        </Link>
      </div>
    </article>
  );
};

export default ShowOneUser;
