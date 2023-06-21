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
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");

  let dateConvert = (date) => {
    // console.log(date);
    if (date !== "N/A") {
      let reverseDate = " ";
      reverseDate += date.slice(9, 11);
      reverseDate += "/";
      reverseDate += date.slice(6, 8);
      reverseDate += "/";
      reverseDate += date.slice(1, 5);
      return reverseDate;
    }
    return date;
  };
  let { uid } = useParams();
  // const [user, loading] = useAuthState(auth);
  const [oneUser, setOneUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/user/${uid}`)
      .then((response) => {
        // console.log("user api response user data=", response.data);
        setOneUser(response.data[0]);
      })
      .catch((c) => console.warn("catch", c));

    axios
      .get(`${API}/user/${uid}/images`) // changed from :id
      .then((response) => {
        // console.log(response.data);
        // console.log("userPROFILE-IMAGE=", response.data);
        setProfileImage(response.data[0].profile_image);
      })
      .catch((c) => console.warn("catch", c));

    axios
      .get(`${API}/user/${uid}/bios`) // changed from :id
      .then((response) => {
        console.log(response.data);
        // console.log("userPROFILE-IMAGE=", response.data);
        setBio(response.data[0].small_bio);
      })
      .catch((c) => console.warn("catch", c));
  }, [uid]);

  const {
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

  let moveInDate = JSON.stringify(move_in_date) || "N/A";
  // let moveInDateToString = moveInDate.toString();
  // console.log(dateConvert(`${moveInDate}`));

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
          <MDBRow className="userImage">
            <MDBCol>
              <img
                id="showOneUserPhoto"
                src={profileImage}
                alt="profile"
                className="rounded-circle"
                style={{ width: "17rem", height: "17rem" }}></img>
              <p className="h1">{first_name}</p>
              <p className="h6">Bio: {bio || "N/A"}</p>
            </MDBCol>
          </MDBRow>

          {/********* IMAGE END **********/}

          {/* ROW 1 -- BASIC INFO */}
          <MDBRow className="mb-3 basicInfo">
            <MDBCardHeader>
              <MDBTypography tag="h5" className="mb-0 header basicInfoHeader">
                Basic Info
              </MDBTypography>
            </MDBCardHeader>
            {/* BASIC INFO -- ROW 1 */}
            <MDBRow className="basicInfoRow1">
              <MDBCol id="basicInfo-Age">Age: {age(birthday)}</MDBCol>
              <MDBCol id="basicInfo-Gender">Gender: {gender}</MDBCol>
              <MDBCol id="basicInfo-Orientation">
                Orientation: {sexual_orientation}
              </MDBCol>
              <MDBCol id="basicInfo-Disabled">
                Disabled: {stringifyUserProperty(is_disabled)}
              </MDBCol>

              <MDBCol>Student: {stringifyUserProperty(is_student)}</MDBCol>
            </MDBRow>
            {/* BASIC INFO ROW 2 */}
            <MDBRow className="basicInfoRow2">
              <MDBCol id="basicInfo-Smoker">
                Smoker: {stringifyUserProperty(is_smoker)}
              </MDBCol>
              <MDBCol id="basicInfo-Neat">
                Neat: {stringifyUserProperty(is_neat)}
              </MDBCol>
              <MDBCol id="basicInfo-Religious">
                Religious: {stringifyUserProperty(is_religious)}
              </MDBCol>

              <MDBCol id="basicInfo-Children">
                Children: {stringifyUserProperty(has_kids)}
              </MDBCol>
              <MDBCol id="basicInfo-Pets">
                Pets: {stringifyUserProperty(has_pets)}
              </MDBCol>
            </MDBRow>
          </MDBRow>

          {/* ROW 2 -- LIVING SITUATION */}
          <MDBRow className="mb-3 livingSituation">
            <MDBCardHeader>
              <MDBTypography
                tag="h5"
                className="mb-0 header"
                id="livingSituationHeader">
                Living Situation
              </MDBTypography>
            </MDBCardHeader>
            {/* LIVING SITUATION -- ROW 1  */}
            <MDBRow className="livingSituationRow1">
              <MDBCol id="livingSituation-City">City: {city}</MDBCol>
              <MDBCol id="livingSituation-State">State: {state}</MDBCol>
              <MDBCol id="livingSituation-Zip">Zip: {zip_code}</MDBCol>
            </MDBRow>
            {/* LIVING SITUATION -- ROW 2  */}
            <MDBRow className="livingSituationRow2">
              <MDBCol id="livingSituation-MaxRent">
                Max Rent:$ {max_rent}
              </MDBCol>
              <MDBCol id="livingSituation-HasOpenRooms">
                Open Rooms: {stringifyUserProperty(has_open_rooms)}
              </MDBCol>
              <MDBCol id="livingSituation-MoveInDate">
                {" "}
                Move-In:
                {dateConvert(`${moveInDate}`)}
              </MDBCol>
            </MDBRow>
          </MDBRow>

          {/* ROW 3 -- FINANCIAL INFO */}

          <MDBRow className="mb-3 financialInfo">
            <MDBCardHeader>
              <MDBTypography
                tag="h5"
                className="mb-0 header"
                id="financialSituationHeader">
                Financial Info
              </MDBTypography>
            </MDBCardHeader>

            {/* FINANCIAL SITUATION -- ROW 1  */}
            <MDBRow className="financialSituationRow1">
              <MDBCol id="financialSituation-Income">Income: $ {income}</MDBCol>
              <MDBCol id="financialSituation-sharesExpenses">
                {" "}
                Shares Expenses:
                {stringifyUserProperty(is_sharing_bills)}
              </MDBCol>
              <MDBCol id="financialSituation-creditScore">
                {" "}
                Credit Score: {calculateCreditScore(credit_score)}
              </MDBCol>
            </MDBRow>
          </MDBRow>

          {/* ROW 4 -- ACTIVITIES */}
          <MDBRow className="mb-3 activities header">
            <MDBCardHeader>
              <MDBTypography
                tag="h5"
                className="mb-0 header"
                id="activitiesHeader">
                Activities
              </MDBTypography>
            </MDBCardHeader>
            {/* ACTIVITIES SITUATION -- ROW 1  */}
            <MDBRow className="activitiesRow1">
              <MDBCol>Musician: {stringifyUserProperty(is_musician)}</MDBCol>
              <MDBCol id="activities-singer">
                {" "}
                Singer:
                {stringifyUserProperty(is_singer)}
              </MDBCol>
              <MDBCol id="activities-hostsParties">
                Hosts Parties:{stringifyUserProperty(host_parties)}
              </MDBCol>
            </MDBRow>
          </MDBRow>

          {/************** COLUMN 2 **************/}

          {/************** BUTTONS ************/}

          <MDBRow className="ShowPageButtons">
            <Link to={`/users`}>
              <MDBBtn id="backToUsersBtn">Back</MDBBtn>
            </Link>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ShowOneUser;
