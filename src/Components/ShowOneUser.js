import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ShowOneUser.css";

const API = process.env.REACT_APP_API_URL;

const ShowOneUser = () => {
  let dateConvert = (date) => {
    let reverseDate = " ";
    reverseDate += date.slice(9, 11);
    reverseDate += "/";
    reverseDate += date.slice(6, 8);
    reverseDate += "/";
    reverseDate += date.slice(1, 5);
    return reverseDate;
  };

  let { id } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [image, setImage] = useState([]);
  const [bio, setBio] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/user/${id}`)
      .then((response) => {
        console.log("user api response user data=", response.data);
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

  useEffect(() => {
    axios
      .get(`${API}/user/${id}/bios`)
      .then((response) => {
        console.log("user api response data for bio=", response.data);
        setBio(response.data[0].small_bio);
      })
      .catch((c) => console.warn("catch", c));
  }, [id]);

  const {
    first_name,
    birthday,
    city,
    gender,
    has_kids,
    has_open_rooms,
    has_pets,
    income,
    is_disabled,
    is_neat,
    is_religious,
    is_sharing_bills,
    is_smoker,
    last_name,
    max_rent,
    move_in_date,
    sexual_orientation,
    state,
  } = user;

  const age = (birthday) => {
    const birthYearSplit = new Date(birthday).toString().split(" ");
    const birthYearToNum = Number(birthYearSplit[3]);
    let currentYear = new Date().getFullYear();
    return currentYear - birthYearToNum;
  };

  const stringifyUserProperty = (userProperty) => {
    let userPropertyToString = JSON.stringify(userProperty);
    if (userPropertyToString === "true") {
      return "Yes";
    }
    if (userPropertyToString === "false") {
      return "No";
    }
    return userPropertyToString;
  };

  let moveInDate = JSON.stringify(move_in_date);
  // let moveInDateToString = moveInDate.toString();
  console.log(dateConvert(`${moveInDate}`));

  return (
    <div className="ShowOneUser">
      <div className="user">
        <img id="showOneUserPhoto" src={image} alt="profile"></img>
        <h2>{first_name}</h2>
        <span id="personalInfoBio">Bio: {bio}</span>
        <div className="border">
          <div className="userInfo">
            <div className="basicInfo">
              <h5 id="basicInfoH5">Basic Info</h5>
              <div id="basicInfoAttributes">
                <div id="basicInfoGroup">
                  <span>Age:{age(birthday)}</span>
                  <span> Gender:{gender}</span>
                  <span>
                    Orientation:{stringifyUserProperty(sexual_orientation)}{" "}
                  </span>
                  <span>Children:{stringifyUserProperty(has_kids)} </span>
                </div>
                <div id="basicInfoGroup">
                  <span>Religious:{stringifyUserProperty(is_religious)} </span>
                  <span>Is Neat:{stringifyUserProperty(is_neat)} </span>
                  <span>Smoker:{stringifyUserProperty(is_smoker)} </span>
                </div>
              </div>
            </div>
            <div className="livingSituationAndFinancialInfo">
              <div className="userLivingSituation">
                <h5>Living Situation</h5>
                <div id="livingSituationAttributes">
                  <div className="livingSituationGroup">
                    <span>City:{stringifyUserProperty(city)} </span>
                    <span>State:{stringifyUserProperty(state)} </span>
                    <span>Max Rent:{stringifyUserProperty(max_rent)} </span>
                    <span>
                      Move-In-Date:
                      {dateConvert(`${moveInDate}`)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="userFinances">
                <h5>Financial Info </h5>
                <span>Income:{stringifyUserProperty(income)} </span>
                <span>
                  Shares Expenses:{stringifyUserProperty(is_sharing_bills)}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ShowPageButtons">
        <Link to={`/users`}>
          <button id="backToUsersBtn">Back</button>
        </Link>
        <Link to={`/users/:id/edit`}>
          <button id="toEditForm">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowOneUser;
