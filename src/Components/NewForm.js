<<<<<<< Updated upstream
import React from 'react'
  // Manage State of Values
import { useState } from "react";
  // Enable Navigation to a Different View
import { useNavigate } from "react-router-dom";
  // Enable Connection to Firebase User Authorization (Login)
import { useContextAuthProvider} from "../Firebase/context"
=======
import React from "react";
// Manage State of Values
import { useState, useEffect } from "react";
// Enable Navigation to a Different View
import { useNavigate, useParams } from "react-router-dom";
// Enable Connection to Firebase User Authorization (Login)
import { auth } from "../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
>>>>>>> Stashed changes
import axios from "axios";
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

function NewForm({ id }) {
  //Set state for auth and newUser
<<<<<<< Updated upstream
  const {user} = useContextAuthProvider();

=======
  const [user, loading] = useAuthState(auth);

  console.log("user =", user);

  const [mateId, setMateId] = useState();
>>>>>>> Stashed changes
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    city: "",
    state: "",
    zip_code: "",
    birthday: "",
    gender: "",
    sexual_orientation: "",
    email: `${user.email}`,
    has_pets: false,
    has_open_rooms: false,
    is_smoker: false,
    has_kids: false,
    is_disabled: false,
    is_sharing_bills: false,
    is_neat: false,
    is_religious: false,
    move_in_date: "",
    max_rent: "",
    credit_score: "",
    income: "",
    // is_employed: true,                //need to be added to backend
    is_student: false, //need to be added to backend
    // is_healthy: true,                 //need to be added to backend
    // has_allergies: false,             //need to be added to backend
    is_disabled: false, //need to be added to backend
    // has_chronic_condition: false,     //need to be added to backend (in Answers table)
    // has_visiting_nurse: false,        //need to be added to backend
    // has_home_assistance: false,       //need to be added to backend
    is_musician: false, //need to be added to backend
    is_singer: false, //need to be added to backend
    host_parties: false, //need to be added to backend
    // has_romantic_visits: false,       //need to be added to backend
    // has_family_friend_visits: false,  //need to be added to backend
    // has_night_life: false,            //need to be added to backend
  });

  let navigate = useNavigate();

  // AXIOS CALL -  make an axios call to backend to be able to post info re new user from form

  useEffect(() => {
    axios
      .put(`${API}/user/register`, newUser)
      .then(() => {
        console.log();
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  const addNewUser = (newUser) => {
    axios
<<<<<<< Updated upstream
      .put(`${API}/user/${user.uid}`, newUser)
      .then((res) => {
        console.log(res.data)
=======
      .put(`${API}/user/${id}`, newUser)
      .then(() => {
>>>>>>> Stashed changes
        navigate(`/preferences`);
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
    setNewUser({ ...newUser, [event.target.id]: !newUser[event.target.value] });
  };

  function handleSubmit(event) {
    event.preventDefault();
    event.target.className += " was-validated";
    addNewUser(newUser);
    //addUserImage(image)
  }
<<<<<<< Updated upstream
  
 
  return (
    <div className="newFormBox ">      
      <form className="newform needs-validation"
            onSubmit={handleSubmit}
            noValidate >
=======

  return !loading ? (
    <div className="newFormBox ">
      <form
        className="newform needs-validation"
        onSubmit={handleSubmit}
        noValidate>
>>>>>>> Stashed changes
        <MDBRow>
          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4 newForm-card">
              <MDBCardHeader className="py-2">
                <MDBTypography tag="h5" className="mb-0">
                  New Account Form
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                {/* ********** Basic Info - Row 1 ********** */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBInput
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
                      onChange={handleTextChange}
                      value={newUser.state}
                      id="state"
                      required
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput
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
                      className="birthDate-attribute birthdate-MDB-input"
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
                      className="gender-attribute form-control"
                      onChange={handleTextChange}
                      value={newUser.gender}
                      id="gender"
                      required>
                      <option defaultValue={"gender"}>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Intersex</option>
                      <option value="4">Non-Binary</option>
                      <option value="5">Transgender</option>
                      <option value="6">Other/Decline to Share</option>
                    </select>
                  </MDBCol>

                  <MDBCol>
                    <select
                      className="orientation-attribute form-control"
                      onChange={handleTextChange}
                      value={newUser.sexual_orientation}
                      id="sexual_orientation"
                      required>
                      <option defaultValue={"Heterosexual"}>Orientation</option>
                      <option value="1">Heterosexual</option>
                      <option value="2">Pansexual</option>
                      <option value="3">BiSexual</option>
                      <option value="4">Homosexual</option>
                      <option value="5">Asexual</option>
                      <option value="6">Other/Decline to Share</option>
                    </select>
                  </MDBCol>
                </MDBRow>

                {/*B  ********** Basic Info -  Row 4  **********  */}

                <MDBRow className="mb-1">
                  <MDBCol>
                    <MDBInput
                      label="Email"
                      type="text"
                      className="mb-4"
                      onChange={handleTextChange}
                      value={newUser?.email}
                      id="email"
                      required
                    />
                  </MDBCol>

                  <MDBCol md="4">
                    <MDBInput
                      label="Move-In Date Range"
                      type="date"
                      onChange={handleTextChange}
                      value={newUser.move_in_date}
                      id="move_in_date"
                      required
                    />
                  </MDBCol>
                  <MDBCol md="4">
<<<<<<< Updated upstream
                    <MDBInput label='Credit Level' type='number'
=======
                    <MDBInput
                      label="Credit Level"
                      type="text"
>>>>>>> Stashed changes
                      onChange={handleTextChange}
                      value={newUser.credit_score}
                      id="credit_score"
                      required
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Basic Info - Row 5 (Financial Attributes) ********** */}

                <MDBRow className="mb-3">
                  {/* <MDBCol>
                  <MDBCheckbox
                      name="flexCheck"
                      label='Employed' type='text'
                      onChange={handleCheckboxChange}
                      value={newUser.is_employed}
                      id="has_job"
                      required
                    />
                  </MDBCol> */}
                  <MDBCol>
<<<<<<< Updated upstream
                    <MDBInput label='Income Level' type='number'
=======
                    <MDBInput
                      label="Income Level"
                      type="text"
>>>>>>> Stashed changes
                      onChange={handleTextChange}
                      value={newUser.income}
                      id="income"
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      label="Max Rent Budget"
                      type="number"
                      onChange={handleTextChange}
                      value={newUser.max_rent}
                      id="max_rent"
                      required
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Attributes (Financial) - Row 6 - (Checkboxes- Row A)********** */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Agree To Share Bills"
                      onChange={handleCheckboxChange}
                      value={newUser.is_sharing_bills}
                      id="is_sharing_bills"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Have Open Rooms"
                      onChange={handleCheckboxChange}
                      value={newUser.has_open_rooms}
                      id="has_open_rooms"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Live in a High Rise"
                      onChange={handleCheckboxChange}
                      value={newUser.high_rise}
                      id="high_rise"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Live in a House"
                      onChange={handleCheckboxChange}
                      value={newUser.house}
                      id="house"
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Attributes (LifeStyle, Amenities) - Row 7 - (Checkboxes- Row B) ********** */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Very Neat"
                      onChange={handleCheckboxChange}
                      value={newUser.is_neat}
                      id="is_neat"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Low Noise Lifestyle"
                      onChange={handleCheckboxChange}
                      value={newUser.low_noise}
                      id="low_noise"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Have Private Room"
                      onChange={handleCheckboxChange}
                      value={newUser.private_room}
                      id="private_room"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Have Private Bathroom"
                      onChange={handleCheckboxChange}
                      value={newUser.private_bathroom}
                      id="private_bathroom"
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Attributes (LifeStyle, Obligations) - Row 8 - (Checkboxes- Row C) ********** */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Religious"
                      onChange={handleCheckboxChange}
                      value={newUser.is_religious}
                      id="is_religious"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Have Kids"
                      onChange={handleCheckboxChange}
                      value={newUser.has_kids}
                      id="has_kids"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Have Pets"
                      onChange={handleCheckboxChange}
                      value={newUser.has_pets}
                      id="has_pets"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Smoker"
                      onChange={handleCheckboxChange}
                      value={newUser.is_smoker}
                      id="is_smoker"
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** Attributes (Activities) - Row 9 - (Checkboxes- Row D) ********** */}

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Student"
                      onChange={handleCheckboxChange}
                      value={newUser.is_student}
                      id="is_student"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Musician"
                      onChange={handleCheckboxChange}
                      value={newUser.is_musician}
                      id="is_musician"
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Singer"
                      onChange={handleCheckboxChange}
                      value={newUser.is_singer}
                      id="is_singer"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      label="Host Parties"
                      onChange={handleCheckboxChange}
                      value={newUser.host_parties}
                      id="host_parties"
                    />
                  </MDBCol>
                </MDBRow>

                {/* ********** (Create Account Button) - Row 10 - (Checkboxes- Row E) ********** */}

                <MDBRow className="mb-5">
                  <MDBCol>
                    <div className="d-flex justify-content-center">
                      {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account' defaultChecked /> */}
<<<<<<< Updated upstream
                      <MDBBtn 
                        className='newForm-submitBtn' 
                        type="submit">Submit</MDBBtn>
                      </div>
                    </MDBCol>
                </MDBRow> 
=======
                      <MDBBtn
                        className="newForm-submitBtn"
                        type="submit"
                        onClick={handleSubmit}
                        form="form">
                        Submit
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
>>>>>>> Stashed changes

                {/* ********** End of Input Fields  ********** */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </div>
<<<<<<< Updated upstream

) 
=======
  ) : (
    ""
  );
>>>>>>> Stashed changes
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
