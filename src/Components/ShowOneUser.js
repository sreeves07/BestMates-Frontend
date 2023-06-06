import axios from "axios";
// import { auth } from "../Firebase/config";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ShowOneUser.css";
import {
  MDBCol,
  MDBRow,
  MDBTypography,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const API = process.env.REACT_APP_API_URL;

const ShowOneUser = () => {
  let dateConvert = (date) => {
    console.log(date);
    let reverseDate = " ";
    reverseDate += date.slice(9, 11);
    reverseDate += "/";
    reverseDate += date.slice(6, 8);
    reverseDate += "/";
    reverseDate += date.slice(1, 5);
    return reverseDate;
  };
  let { uid } = useParams();
  // const [user, loading] = useAuthState(auth);
  const [oneUser, setOneUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/user/${uid}`)
      .then((response) => {
        console.log("user api response user data=", response.data);
        setOneUser(response.data[0]);
      })
      .catch((c) => console.warn("catch", c));
  }, [uid]);

  console.log("########", uid);

  const {
    small_bio,
    profile_image,
    first_name,
    last_name,
    city,
    state,
    zip_code,
    birthday,
    gender,
    sexual_orientation,
    has_pets,
    has_open_rooms,
    is_smoker,
    has_kids,
    is_disabled,
    is_sharing_bills,
    is_neat,
    is_religious,
    move_in_date,
    max_rent,
    credit_score,
    income,
    // is_employed: true,                //need to be added to backend
    is_student, //need to be added to backend
    // is_healthy: true,                 //need to be added to backend
    // has_allergies: false,             //need to be added to backend
    // has_chronic_condition: false,     //need to be added to backend (in Answers table)
    // has_visiting_nurse: false,        //need to be added to backend
    // has_home_assistance: false,       //need to be added to backend
    is_musician, //need to be added to backend
    is_singer, //need to be added to backend
    host_parties, //need to be added to backend
    // has_romantic_visits: false,       //need to be added to backend
    // has_family_friend_visits: false,  //need to be added to backend
    // has_night_life: false,            //need to be added to backend
  } = oneUser;

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
    return "N/A";
  };

  const calculateCreditScore = (creditScore) => {
    if (creditScore < 580) {
      return "Poor";
    }
    if (creditScore > 579 && creditScore < 670) {
      return "Fair";
    }
    if (creditScore > 669 && creditScore < 740) {
      return "Good";
    }
    if (creditScore > 739 && creditScore < 800) {
      return "Very Good";
    }
    if (creditScore > 779) {
      return "Excellent";
    }
    return "N/A";
  };

  let moveInDate = JSON.stringify(move_in_date);
  // let moveInDateToString = moveInDate.toString();
  console.log(dateConvert(`${moveInDate}`));

  return (
    <div className="ShowOneUser">
      {/************ PARENT ROW BEGIN*************************/}
      {/* <MDBRow className="user"> */}
      {/************** PARENT CARD BEGIN **************/}
      {/* <MDBCard className="userParentCard"> */}
      {/************** CARD PARENT ROW BEGIN **************/}
      <MDBRow className="userCard-ParentRow">
        <MDBCol className="userInfo md=5">
          {/********* IMAGE BEGIN **********/}
          <MDBCard className="userImage">
            <MDBCol>
              <img
                id="showOneUserPhoto"
                src={profile_image}
                alt="profile"
                className="rounded-circle"
                style={{ width: "9.0rem", height: "9.0rem" }}></img>
              <p className="h1">{first_name}</p>
              <p className="h6">Bio: {small_bio}</p>
            </MDBCol>
          </MDBCard>
          {/********* IMAGE END **********/}

          {/* CARD 1 -- BASIC INFO */}
          <MDBRow>
            <MDBCard className="mb-3 basicInfo">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Basic Info
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol>Age:{age(birthday)}</MDBCol>
                  <MDBCol>
                    Religious:{stringifyUserProperty(is_religious)}
                  </MDBCol>
                  <MDBCol>Gender: {gender}</MDBCol>
                  <MDBCol>
                    Disabled: {stringifyUserProperty(is_disabled)}
                  </MDBCol>
                  <MDBCol>Orientation: {sexual_orientation}</MDBCol>
                  <MDBCol>Children: {stringifyUserProperty(has_kids)}</MDBCol>
                  <MDBCol>Pets: {stringifyUserProperty(has_pets)}</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>Smoker: {stringifyUserProperty(is_smoker)}</MDBCol>
                  <MDBCol>Neat: {stringifyUserProperty(is_neat)}</MDBCol>
                  <MDBCol>Student: {stringifyUserProperty(is_student)}</MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>

          {/* CARD 2 -- LIVING SITUATION */}
          <MDBRow>
            <MDBCard className="mb-3 livingSituation">
              <MDBCardBody>
                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Living Situation
                  </MDBTypography>
                </MDBCardHeader>
                <MDBRow>
                  <MDBCol>City:{city}</MDBCol>
                  <MDBCol>State:{state}</MDBCol>
                  <MDBCol>Zip:{zip_code}</MDBCol>
                  <MDBCol>Max Rent:{max_rent}</MDBCol>
                  <MDBCol>
                    Open Rooms: {stringifyUserProperty(has_open_rooms)}
                  </MDBCol>
                  <MDBCol>
                    {" "}
                    Move-In-Date:
                    {dateConvert(`${moveInDate}`)}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>

          {/* CARD 2 -- FINANCIAL INFO */}

          <MDBRow>
            <MDBCard className="mb-3 financialInfo">
              <MDBCardBody>
                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Financial Info
                  </MDBTypography>
                </MDBCardHeader>

                <MDBRow>
                  <MDBCol>Income: $ {income}</MDBCol>
                  <MDBCol>
                    {" "}
                    Shares Expenses:
                    {stringifyUserProperty(is_sharing_bills)}
                  </MDBCol>
                  <MDBCol>
                    {" "}
                    Credit Score: {calculateCreditScore(credit_score)}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>

          {/* CARD 3 -- ACTIVITIES */}
          <MDBRow>
            <MDBCard className="mb-3 activities">
              <MDBCardBody>
                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Activities
                  </MDBTypography>
                </MDBCardHeader>

                <MDBRow>
                  <MDBCol>
                    Musician: {stringifyUserProperty(is_musician)}
                  </MDBCol>
                  <MDBCol>
                    {" "}
                    Singer:
                    {stringifyUserProperty(is_singer)}
                  </MDBCol>
                  <MDBCol>
                    {" "}
                    Hosts Parties:
                    {stringifyUserProperty(host_parties)}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>

          {/************** COLUMN 2 **************/}

          {/************** BUTTONS ************/}

          <MDBRow className="ShowPageButtons">
            <MDBCol></MDBCol>
            <MDBCol className="md=1">
              <Link to={`/users`}>
                <MDBBtn id="backToUsersBtn">Back</MDBBtn>
              </Link>
            </MDBCol>
            <MDBCol className="md=1">
              {" "}
              <Link to={`/users/:id/edit`}>
                <MDBBtn id="toEditForm">Edit</MDBBtn>
              </Link>
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ShowOneUser;
