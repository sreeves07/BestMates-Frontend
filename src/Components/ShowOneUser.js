import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
      {/************ PARENT ROW BEGIN*************************/}
      {/* <MDBRow className="user"> */}
      {/************** PARENT CARD BEGIN **************/}
      {/* <MDBCard className="userParentCard"> */}
      {/************** CARD PARENT ROW BEGIN **************/}
      <MDBRow className="userCard-ParentRow">
        {/********* IMAGE BEGIN **********/}
        <MDBCol className="userImage">
          <img id="showOneUserPhoto" src={image} alt="profile"></img>
          <p class="h2">{first_name}</p>

          <p class="h4">Bio: {bio}</p>
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
                    <MDBCol>City:{stringifyUserProperty(city)}</MDBCol>
                    <MDBCol>State:{stringifyUserProperty(state)}</MDBCol>
                    <MDBCol>Max Rent:{stringifyUserProperty(max_rent)}</MDBCol>
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
                    <MDBCol>Income:{stringifyUserProperty(income)}</MDBCol>
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
