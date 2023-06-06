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
    return userPropertyToString;
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
        {/********* IMAGE BEGIN **********/}
        <MDBCol className="userImage">
          <img id="showOneUserPhoto" src={profile_image} alt="profile"></img>
          <p className="h2">{first_name}</p>

          <p className="h6">Bio: {small_bio}</p>
        </MDBCol>
        {/********* IMAGE END **********/}

        {/*************** INFO BEGIN *************/}

        <MDBCard className="mb-3 basicInfo">
          <MDBCardHeader>
            <MDBTypography tag="h5" className="mb-0">
              Basic Info
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBRow>
              <MDBCol>
                {/* ROW 1 -- BASIC INFO */}

                <MDBCol className="userInfo"></MDBCol>

                <MDBRow>
                  <MDBCol>Age:{age(birthday)}</MDBCol>
                  <MDBCol>
                    Religious:{stringifyUserProperty(is_religious)}
                  </MDBCol>
                  <MDBCol>Gender: {gender}</MDBCol>
                  <MDBCol>Orientation: {sexual_orientation}</MDBCol>
                  <MDBCol>Children: {stringifyUserProperty(has_kids)}</MDBCol>
                </MDBRow>

                {/* ROW 2 -- LIVING SITUATION*/}

                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Living Situation
                  </MDBTypography>
                </MDBCardHeader>

                <MDBCol>
                  <MDBRow>
                    <MDBCol>City:{city}</MDBCol>
                    <MDBCol>State:{state}</MDBCol>
                    <MDBCol>Max Rent:{max_rent}</MDBCol>
                    <MDBCol>
                      {" "}
                      Move-In-Date:
                      {dateConvert(`${moveInDate}`)}
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Financial Info
                  </MDBTypography>
                </MDBCardHeader>

                <MDBCol>
                  <MDBRow>
                    <MDBCol>Income: $ {stringifyUserProperty(income)}</MDBCol>
                    <MDBCol>
                      {" "}
                      Shares Expenses:
                      {stringifyUserProperty(is_sharing_bills)}
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                {/* ************ INFO END *********** */}
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        {/************** CARD PARENT ROW END **************/}
        {/* </MDBRow> */}
        {/************** PARENT CARD END **************/}
        {/* </MDBCard> */}
        {/************* PARENT ROW END ***********/}

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
      </MDBRow>
    </div>
  );
};

export default ShowOneUser;
