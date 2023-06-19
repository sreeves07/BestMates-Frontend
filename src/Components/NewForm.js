import React from "react";
// Manage State of Values
import { useState } from "react";
// Enable Navigation to a Different View
import { useNavigate } from "react-router-dom";
// Enable Connection to Firebase User Authorization (Login)
import { useContextAuthProvider } from "../Firebase/context";
import axios from "axios";
// Firebase Firestore Database
import { db } from "../Firebase/config";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
// User Picture Upload Widget from Cloudinary
// import UploadWidget from "./UploadWidget.js"
import "../Components/NewForm.css";
// imports for material design bootstrap
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

// Set API Variable to Port for this React App to display in Browser
const API = process.env.REACT_APP_API_URL;

function NewForm() {
  //Set state for auth and newUser
  const { user, profilePhotoUrl, setFirstName, setUserCity } = useContextAuthProvider();
  const { uid, email } = user;

  const [newUser, setNewUser] = useState({
    first_name: "Cleo",
    last_name: "Patra",
    email: `${user.email}`,
    city: "Long Island City",
    state: "NY",
    zip_code: 11101,
    birthday: "1990-06-19",
    move_in_date: "2024-08-19",
    gender: "Male",
    sexual_orientation: "Heterosexual",
    has_pets: false,
    has_open_rooms: false,
    is_smoker: false,
    has_kids: false,
    is_disabled: false,
    is_sharing_bills: false,
    is_neat: false,
    is_religious: false,
    is_musician: false,
    is_partyhost: false,
    has_private_room: false,
    has_private_bathroom: false,
    has_house: false,
    has_high_rise: false,
    is_employed: false,
    low_noise: false,
    max_rent: 1000,
    credit_score: 600,
    income: 80000,
  });

  let navigate = useNavigate();

  // AXIOS CALL -  make an axios call to backend to be able to post info re new user from form

  const addNewUser = (newUser) => {
    axios
      .put(`${API}/user/${uid}`, newUser)
      .then((res) => {
        setFirstName(newUser.first_name);
        setUserCity(newUser.city)
        navigate(`/preferences`);
        console.log("res.data", res.data);
      })
      .catch((c) => console.warn("catch", c));
  };

  // Capture changes made by user and send to backend
  // set updated state of newUser to what the user enters
  const handleTextChange = (event) => {
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
  };
  // console.log("newly added user", newUser)

  const handleCheckboxChange = (event) => {
    setNewUser({ ...newUser, [event.target.id]: !newUser[event.target.id] });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    event.target.className += " was-validated";
    addNewUser(newUser);

    try {
      await addDoc(collection(db, "users"), {
        uid: uid,
        email: email,
        profilePhotoUrl: profilePhotoUrl,
        ...newUser,
      });

      await setDoc(doc(db, "userChats", uid), {});
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  }

  return (
    <div className="newFormBox ">
      <form className="newform needs-validation" onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol md="8" className="mb-4">
            <MDBCard className="newForm-card">
              <MDBCardHeader className="py-2">
                <MDBTypography tag="h5" className="mb-0 ">
                  <strong>Profile Information</strong>
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody className="newForm-cardbody">
                {/* ********** Basic Info - Row 1 ********** */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBInput
                      className="background-light-purple"
                      label="First name"
                      type="text"
                      onChange={handleTextChange}
                      value={newUser.first_name}
                      id="first_name"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      className="background-light-purple"
                      label="Last name"
                      type="text"
                      onChange={handleTextChange}
                      value={newUser.last_name}
                      id="last_name"
                      required
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Basic Info -  Row 2 ********** */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBInput
                      label="City"
                      type="text"
                      className="background-light-purple"
                      onChange={handleTextChange}
                      value={newUser.city}
                      id="city"
                      required
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput
                      label="State"
                      type="text"
                      className="background-light-purple"
                      onChange={handleTextChange}
                      value={newUser.state}
                      id="state"
                      required
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput
                      className="background-light-purple"
                      label="Zip Code"
                      type="number"
                      onChange={handleTextChange}
                      value={newUser.zip_code}
                      id="zip_code"
                      required
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Basic Info - Row 3 ********** */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    {" "}
                    {/* md="3" */}
                    <MDBInput
                      className="birthDate-attribute birthdate-MDB-input background-light-purple"
                      label="Date of Birth"
                      type="date"
                      onChange={handleTextChange}
                      value={newUser.birthday}
                      id="birthday"
                      required
                    />
                  </MDBCol>

                  <MDBCol>
                    <select
                      style={{ color: "rgb(102, 102, 102)" }}
                      className="gender-attribute form-control background-light-purple"
                      onChange={handleTextChange}
                      value={newUser.gender}
                      id="gender"
                      required>
                      <option defaultValue={"gender"}>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Intersex">Intersex</option>
                      <option value="Non-Binary">Non-Binary</option>
                      <option value="Transgender">Transgender</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </MDBCol>

                  <MDBCol>
                    <select
                      style={{ color: "rgb(102, 102, 102)" }}
                      className="orientation-attribute form-control background-light-purple"
                      onChange={handleTextChange}
                      value={newUser.sexual_orientation}
                      id="sexual_orientation"
                      required>
                      <option defaultValue={"orientation"}>Orientation</option>
                      <option value="Heterosexual">Heterosexual</option>
                      <option value="Pansexual">Pansexual</option>
                      <option value="BiSexual">BiSexual</option>
                      <option value="Homosexual">Homosexual</option>
                      <option value="Asexual">Asexual</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">
                        Prefer not to say
                      </option>
                    </select>
                  </MDBCol>
                </MDBRow>

                {/*B  ********** Basic Info -  Row 4  **********  */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBInput
                      label="Email"
                      type="text"
                      className="background-light-purple"
                      onChange={handleTextChange}
                      value={newUser?.email}
                      id="email"
                      required
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput
                      label="Move-In Date"
                      type="date"
                      className="background-light-purple"
                      onChange={handleTextChange}
                      value={newUser.move_in_date}
                      id="move_in_date"
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Basic Info - Row 5 (Financial Attributes) ********** */}

                <MDBRow className="mb-5">
                  <MDBCol>
                    <MDBInput
                      label="Credit Score"
                      className="background-light-purple"
                      type="number"
                      min="300"
                      max="850"
                      onChange={handleTextChange}
                      value={newUser.credit_score}
                      id="credit_score"
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Income (USD $)"
                      type="number"
                      className="background-light-purple"
                      min="0"
                      onChange={handleTextChange}
                      value={newUser.income}
                      id="income"
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Max Rent (USD $)"
                      type="number"
                      className="background-light-purple"
                      min="0"
                      onChange={handleTextChange}
                      value={newUser.max_rent}
                      id="max_rent"
                      required
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Attributes (Financial) - Row 6 - (Checkboxes- Row A)**********
                <p>
                  <em>Select all that apply to you...</em>
                </p> */}
                <MDBRow className="mb-3">
                  {/* <MDBTypography tag="h6" className="mb-0 " ><strong>Your Attributes</strong><hr></hr></MDBTypography> */}
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Employed"
                      onChange={handleCheckboxChange}
                      value={newUser.is_employed}
                      id="is_employed"
                    />
                  </MDBCol>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Share Bills"
                      onChange={handleCheckboxChange}
                      value={newUser.is_sharing_bills}
                      id="is_sharing_bills"
                    />
                  </MDBCol>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Student"
                      onChange={handleCheckboxChange}
                      value={newUser.is_student}
                      id="is_student"
                    />
                  </MDBCol>

                  {/* <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Smoker"
                      onChange={handleCheckboxChange}
                      value={newUser.is_smoker}
                      id="is_smoker"
                    />
                  </MDBCol> */}

                  {/* <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Party Host"
                      onChange={handleCheckboxChange}
                      value={newUser.is_partyhost}
                      id="is_partyhost"
                    />
                  </MDBCol> */}
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Disabled"
                      onChange={handleCheckboxChange}
                      value={newUser.is_disabled}
                      id="is_disabled"
                    />
                  </MDBCol>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Have Rooms"
                      onChange={handleCheckboxChange}
                      value={newUser.has_open_rooms}
                      id="has_open_rooms"
                    />
                  </MDBCol>

                </MDBRow>
                <MDBRow
                  className="mb-3"
                  style={{
                    display: `${newUser.has_open_rooms ? "" : "none"}`,
                  }}>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Private Room"
                      onChange={handleCheckboxChange}
                      value={newUser.has_private_room}
                      id="has_private_room"
                    />
                  </MDBCol>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Private Bath"
                      onChange={handleCheckboxChange}
                      value={newUser.has_private_bathroom}
                      id="has_private_bathroom"
                    />
                  </MDBCol>

                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="High Rise"
                      onChange={handleCheckboxChange}
                      value={newUser.has_high_rise}
                      id="has_high_rise"
                    />
                  </MDBCol>

                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="House"
                      onChange={handleCheckboxChange}
                      value={newUser.has_house}
                      id="has_house"
                    />
                  </MDBCol>
                </MDBRow>


                {/* ********** Attributes (LifeStyle, Amenities) - Row 7 - (Checkboxes- Row B) ********** */}

                <MDBRow className="mb-3">
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Very Neat"
                      onChange={handleCheckboxChange}
                      value={newUser.is_neat}
                      id="is_neat"
                    />
                  </MDBCol>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Low Noise"
                      onChange={handleCheckboxChange}
                      value={newUser.low_noise}
                      id="low_noise"
                    />
                  </MDBCol>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Smoker"
                      onChange={handleCheckboxChange}
                      value={newUser.is_smoker}
                      id="is_smoker"
                    />
                  </MDBCol> 

                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Party Host"
                      onChange={handleCheckboxChange}
                      value={newUser.is_partyhost}
                      id="is_partyhost"
                    />
                  </MDBCol> 

                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Musician"
                      onChange={handleCheckboxChange}
                      value={newUser.is_musician}
                      id="is_musician"
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Attributes (LifeStyle, Obligations) - Row 8 - (Checkboxes- Row C) ********** */}

                <MDBRow className="mb-3">
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Religious"
                      onChange={handleCheckboxChange}
                      value={newUser.is_religious}
                      id="is_religious"
                    />
                  </MDBCol>

                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Have Kids"
                      onChange={handleCheckboxChange}
                      value={newUser.has_kids}
                      id="has_kids"
                    />
                  </MDBCol>

                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Have Pets"
                      onChange={handleCheckboxChange}
                      value={newUser.has_pets}
                      id="has_pets"
                    />
                  </MDBCol>


                </MDBRow>

                {/* ********** Attributes (Activities) - Row 9 - (Checkboxes- Row D) ********** */}

                {/* <MDBRow
                  className="mb-3"
                  style={{
                    display: `${newUser.has_open_rooms ? "" : "none"}`,
                  }}>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Private Room"
                      onChange={handleCheckboxChange}
                      value={newUser.has_private_room}
                      id="has_private_room"
                    />
                  </MDBCol>
                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="Private Bath"
                      onChange={handleCheckboxChange}
                      value={newUser.has_private_bathroom}
                      id="has_private_bathroom"
                    />
                  </MDBCol>

                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="High Rise"
                      onChange={handleCheckboxChange}
                      value={newUser.has_high_rise}
                      id="has_high_rise"
                    />
                  </MDBCol>

                  <MDBCol className="check">
                    <MDBCheckbox
                      name="flexCheck"
                      label="House"
                      onChange={handleCheckboxChange}
                      value={newUser.has_house}
                      id="has_house"
                    />
                  </MDBCol>
                </MDBRow> */}

                {/* ********** (Create Account Button) - Row 10 - (Checkboxes- Row E) ********** */}

                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBBtn
                      className="newForm-submitBtn sign-in-btn"
                      type="submit">
                      Submit
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>

                {/* ********** End of Input Fields  ********** */}
              </MDBCardBody>
            </MDBCard>
            <br></br>
          </MDBCol>
        </MDBRow>
      </form>
    </div>
  );
}

export default NewForm;

// Additional Preferences

// is_employed: true,      //need to be added to backend
// is_student: false,      //need to be added to backend
// is_healthy: true,       //need to be added to backend
// has_allergies: false,   //need to be added to backend
// is_disabled: false,     //need to be added to backend
// has_chronic_condition: false,    //need to be added to backend
// has_visiting_nurse: false,       //need to be added to backend
// has_home_assistance: false,      //need to be added to backend
// is_musician: false,     //need to be added to backend
// is_singer: false,       //need to be added to backend
// host_parties: false,    //need to be added to backend
// has_romantic_visits: false,       //need to be added to backend
// has_family_friend_visits: false,  //need to be added to backend
// has_night_life: false,            //need to be added to backend
