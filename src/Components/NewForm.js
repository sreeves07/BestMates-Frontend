import React from 'react'
  // Manage State of Values
import { useState } from "react";
  // Enable Navigation to a Different View
import { useNavigate } from "react-router-dom";
  // Enable Connection to Firebase User Authorization (Login)
import { auth } from "../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
  // List of User Preferences
import PreferenceIndex from "./PreferenceIndex"
  // User Picture Upload Widget from Cloudinary
// import UploadWidget from "./UploadWidget.js"
import "../Components/NewForm.css"
  // imports for material design bootstrap
import { 
  MDBCard, 
  MDBCardBody, 
  MDBCardHeader, 
  MDBCheckbox, 
  MDBCol, 
  MDBBtn,
  MDBInput, 
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTypography
 } from 'mdb-react-ui-kit';

  // Set API Variable to Port for this React App to display in Browser
const API = process.env.REACT_APP_API_URL;


function NewForm() {
    //Set state for auth and newUser
  const [user, loading] = useAuthState(auth);
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    city: "",
    state: "",
    zip_code: "",
    birthday: "",
    gender: "",
    sexual_orientation: "",
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
   // is_employed: true,      //need to be added to backend
    is_student: false,      //need to be added to backend
   // is_healthy: true,       //need to be added to backend
   // has_allergies: false,   //need to be added to backend
    is_disabled: false,     //need to be added to backend
   // has_chronic_condition: false,    //need to be added to backend
   // has_visiting_nurse: false,       //need to be added to backend
   // has_home_assistance: false,      //need to be added to backend
    is_musician: false,     //need to be added to backend
    is_singer: false,       //need to be added to backend
    host_parties: false,    //need to be added to backend
   // has_romantic_visits: false,       //need to be added to backend
   // has_family_friend_visits: false,  //need to be added to backend
   // has_night_life: false,            //need to be added to backend
  });

let navigate = useNavigate();
   

    // AXIOS CALL -  make an axios call to backend to be able to post info re new user from form

  const addNewUser = (newUser) => {
    axios
      .put(`${API}/user/${user.uid}`, newUser)
      .then(() => {
        navigate(`/users`);
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
    event.target.className += " was-validated"
    addNewUser(newUser);
    //addUserImage(image)
  }
  
 
  return !loading ? (
    <div className="newFormBox ">      
      <form className="newform needs-validation"
            onSubmit={handleSubmit}
            noValidate >
        <MDBRow>
          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4 newForm-card">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">New Account Form
                </MDBTypography>
              </MDBCardHeader>

              <MDBCardBody>
                <form className="needs-validation"
                      onSubmit={handleSubmit}
                      noValidate>

                   {/* ********** Basic Info - Row 1 ********** */}      
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput 
                        label='First name'    type='text' 
                        onChange={handleTextChange}
                        value={newUser.first_name}
                        id="first_name"       required
                      /> 
                      <div className="valid-feedback">Looks good!</div>
                    </MDBCol>
                    <MDBCol >
                      <MDBInput 
                        label='Last name'   type='text' 
                        onChange={handleTextChange}
                        value={newUser.last_name}
                        id="last_name"      required
                      />
                    </MDBCol>
                  </MDBRow>


                    {/* ********** Basic Info -  Row 2 ********** */}

                  <MDBRow className="mb-4">
                  <MDBCol >
                    <MDBInput label='City' type='text'
                      onChange={handleTextChange}
                      value={newUser.city}
                      id="city"
                      required 
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput label='State' type='text' 
                      onChange={handleTextChange}
                      value={newUser.state}
                      id="state"
                      required
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBInput label='Zip Code' type='number' 
                      onChange={handleTextChange}
                      value={newUser.zip_code}
                      id="zip_code"
                      required
                    />
                  </MDBCol>
                </MDBRow>

                  {/* ********** Basic Info - Row 3 ********** */}

                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput className='birthDate-attribute birthdate-MDB-input' label='Date of Birth' type='date' 
                      onChange={handleTextChange}
                      value={newUser.birthday}
                      id="birthday"
                      required
                    />
                  </MDBCol>

                  <MDBCol md="3">
                    <select
                      className="gender-attribute mb-2"
                      onChange={handleTextChange}
                      value={newUser.gender}
                      id="gender"
                      required
                   >   {/* className="browser-default custom-select" */}
                      <option defaultValue={"gender"}>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Intersex</option>
                      <option value="4">Non-Binary</option>
                      <option value="5">Transgender</option>
                      <option value="6">Other/Decline to Share</option>
                    </select>
                  </MDBCol>

                   <MDBCol md="5" >     
                    <select className="orientation-attribute"
                      onChange={handleTextChange}
                      value={newUser.sexual_orientation}
                      id="sexual_orientation"
                      required
                    >   {/* className="browser-default custom-select" */}
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

                {/*Basic Info -  Row 4 */}
                <MDBRow className="mb-1">
                  <MDBCol>
                    <MDBInput label='Email' type='text' className="mb-4"
                      onChange={handleTextChange}
                      value={newUser.email}
                      id="email"
                      required
                    />
                  </MDBCol>
                  
                  <MDBCol md="4">
                    <MDBInput label='Move-In Date Range' type='date'
                      onChange={handleTextChange}
                      value={newUser.move_in_date}
                      id="move_in_date"
                      required
                    />
                  </MDBCol>

                  
          
                  <MDBCol md="4">
                    <MDBInput label='Credit Level' type='text'
                      onChange={handleTextChange}
                      value={newUser.credit_score}
                      id="credit_score"
                      required
                    />
                  </MDBCol>
                </MDBRow>
                  {/* ********** Basic Info - Row 5 (Financial Attributes) ********** */}
                <MDBRow className="mb-4">
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
                    <MDBInput label='Income Level' type='text'
                      onChange={handleTextChange}
                      value={newUser.income}
                      id="income"
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Max Rent Budget" type='number' 
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
                      // id="register-flexCheckDefault"
                      label="Agree To Share Bills"
                      onChange={handleCheckboxChange}
                      value={newUser.is_sharing_bills}
                      id="is_sharing_bills"
                      required />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Have Open Rooms"
                      onChange={handleCheckboxChange}
                      value={newUser.has_open_rooms}
                      id="has_open_rooms"
                      required
                      /> 
                  </MDBCol> 
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Live in a High Rise"
                      onChange={handleCheckboxChange}
                      value={newUser.high_rise}
                      id="high_rise"
                      required
                      /> 
                 </MDBCol> 

                 <MDBCol>
                    <MDBCheckbox
                     name="flexCheck"
                     // id="register-flexCheckDefault"
                     label="Live in a House"
                     onChange={handleCheckboxChange}
                     value={newUser.house}
                     id="house"
                     required
                      /> 
    
                  </MDBCol> 
                </MDBRow>

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
                      // id="register-flexCheckDefault"
                      label="Low Noise Lifestyle"
                      onChange={handleCheckboxChange}
                      value={newUser.low_noise}
                      id="low_noise"
                      required
                      /> 
                    </MDBCol>
                    <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Have Private Room"
                      onChange={handleCheckboxChange}
                      value={newUser.private_room}
                      id="private_room"
                      required
                      /> 
                    </MDBCol>
                    <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Have Private Bathroom"
                      onChange={handleCheckboxChange}
                      value={newUser.private_bathroom}
                      id="private_bathroom"
                      required
                      /> 
                    </MDBCol>
                </MDBRow>

                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Religious"
                      onChange={handleCheckboxChange}
                      value={newUser.is_religious}
                      id="is_religious"
                      required
                      />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Have Kids"
                      onChange={handleCheckboxChange}
                      value={newUser.has_kids}
                      id="has_kids"
                      required
                  />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Have Pets"
                      onChange={handleCheckboxChange}
                      value={newUser.has_pets}
                      id="has_pets"
                      required
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Smoker"
                      onChange={handleCheckboxChange}
                      value={newUser.is_smoker}
                      id="is_smoker"
                      required
                    />
                  </MDBCol>
                </MDBRow>


  {/* Checkboxes - Row 3 */}

  <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Student"
                      onChange={handleCheckboxChange}
                      value={newUser.is_student}
                      id="is_student"
                      required
                 />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Musician"
                      onChange={handleCheckboxChange}
                      value={newUser.is_musician}
                      id="is_musician"
                      required
                  />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Singer"
                      onChange={handleCheckboxChange}
                      value={newUser.is_singer}
                      id="is_singer"
                      required
                    />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                        name="flexCheck"
                        // id="register-flexCheckDefault"
                        label="Host Parties"
                        onChange={handleCheckboxChange}
                        value={newUser.host_parties}
                        id="host_parties"
                        required
                    />
                  </MDBCol>
                </MDBRow>

              <MDBRow>
                {/* <MDBCol>
                  <div>         
                    <UploadWidget />
                  </div>
                </MDBCol> */}

                <MDBCol>
                    {/*Create Account Button */}
                  <div className="d-flex justify-content-center">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                    </div>
                  </MDBCol>
                </MDBRow>              

                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>



          {/* *********** Column 2  Sample Code *********** */}
{/* 
          <MDBCol md="4" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">Summary</MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>$53.98</strong></span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn size="lg" block>
                  Make purchase
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol> */}
        </MDBRow>
      </form>
    </div>

) : (
  ""
  );
}

export default NewForm


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
