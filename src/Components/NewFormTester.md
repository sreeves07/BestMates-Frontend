import React from 'react'

import { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { auth } from "../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import PreferenceIndex from "./PreferenceIndex"
import "../Components/NewForm.css"
import { Country, State, City } from "country-state-city";
import UploadWidget from "./UploadWidget.js"

// imports for material design bootstrap
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow,MDBRadio, MDBTextArea, MDBTypography, MDBCardImage } from 'mdb-react-ui-kit';

const API = process.env.REACT_APP_API_URL;

function NewForm() {

//const [checked, setChecked] = useState(false)
  // const [input, setInput] = useState("")

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
  });

  // AXIOS CALL 1 -  make an axios call to backend to be able to post info re new user from form
  let navigate = useNavigate();

  const addNewUser = (newUser) => {
    axios
      .put(`${API}/user/${user.uid}`, newUser)
      .then(() => {
        navigate(`/users`);
      })
      .catch((c) => console.warn("catch", c));
  };

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

  // const countryCode = 'US';
  // const country = csc.getCountryByCode(countryCode);
  // const states = csc.getStatesOfCountry(country.isoCode);
  // states.forEach((state) => {
  //     cities_of_state = csc.getCitiesOfState(countryCode, state.isoCode)
  //     console.log(state, ":", cities_of_state)
  
  const Country = require('country-state-city').Country
  const State = require('country-state-city').State
  const City = require('country-state-city').City


  const countryCode = 'US';
  const country = Country.getCountryByCode(countryCode);
  const states = State.getStatesOfCountry(countryCode);
  const stateCode = 'NY';
  const cities = City.getCitiesOfState(countryCode, stateCode)
  //console.log(states ) //print all states of country
 // console.log(cities) //print all cities of state


  return !loading ? (
    <div 
    className="newForm ">      
      <MDBRow className="nf-wrapper-row"   >

        
        {/* <MDBCol className='nf-column-1'>
          
            
               <UploadWidget />
          
        </MDBCol> */}





        <MDBCol md="4" className=" nf-column-2  mb-1"   >
          <MDBCard className="mb-4">
            {/* <MDBCardImage */}
            {/* src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"/> */}
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">New Account Form</MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form className="needs-validation"
              onSubmit={handleSubmit}
              noValidate >
                {/*Basic Info -  Row 1 */}
                <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput 
                       label='First name' 
                       type='text' 
                       onChange={handleTextChange}
                        value={newUser.first_name}
                        id="first_name"
                        required
                      /> 
                      <div className="valid-feedback">Looks good!</div>
                    </MDBCol>

                     <MDBCol >
                        <MDBInput 
                          label='Last name'
                          type='text' 
                          onChange={handleTextChange}
                          value={newUser.last_name}
                        id="last_name"
                        required
                      />
                     </MDBCol>
                </MDBRow>

                {/*Basic Info -  Row 2 */}
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
{/*Basic Info - Row 3 */}
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput className='birthdate-MDB-input' label='Date of Birth' type='date' 
                      onChange={handleTextChange}
                      value={newUser.birthday}
                      id="birthday"
                      required
                    />
                  </MDBCol>

                  <MDBCol md="3">
                  {/* Gender with Radio button
                  <MDBInput label='Gender' type='text' /> */}
                  {/* <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Male' />
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Female' defaultChecked /> */}
                  {/* React Select dropdown - no label */}
                  {/* <Select options={options} /> */}

                    <select
                      className="gender-select mb-2"
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
                    <select className="orientation-select"
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

 {/*Basic Info -  Row 5 */}
                <MDBRow className="mb-4">
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

 {/*Basic Info -  Row 6 */}
                <MDBRow className="mb-3">
                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Agree To Share Bills"
                      onChange={handleTextChange}
                      value={newUser.is_sharing_bills}
                      id="is_sharing_bills"
                      required />
                  </MDBCol>

                  <MDBCol>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Have Open Rooms"
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                     onChange={handleTextChange}
                     value={newUser.house}
                     id="house"
                     required
                      /> 

{/* High_Rise: Yes<br/>
    House: Yes<br/>
    Private_Bathroom: Yes<br/>
    Private Room: Yes<br/> */}
    
                  </MDBCol> 
                </MDBRow>

                <MDBRow className="mb-3">
                  <MDBCol>
                  <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Very Neat"
                      onChange={handleTextChange}
                      value={newUser.is_neat}
                      id="is_neat"
                      required
                      /> 
                  </MDBCol>
                  <MDBCol>
                  <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Low Noise Lifestyle"
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                      onChange={handleTextChange}
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
                        onChange={handleTextChange}
                        value={newUser.host_parties}
                        id="host_parties"
                        required
                    />
                  </MDBCol>
                </MDBRow>

               
                {/* <MDBTextArea label='Additional information' rows={4} className="mb-4" /> */}

                <div className="d-flex justify-content-center">

                <MDBRow className="mb-2">
                <MDBCol>
                      {/* <UploadWidget /> */}
                    </MDBCol>
                    <MDBCol></MDBCol>
                    <MDBCol>
                      <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                    </MDBCol>
                    </MDBRow>

                    <MDBRow> 
                  
                </MDBRow>


                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className='nf-column-3'> 
          {/* *************** PREFERENCES LIST (Checkboxes) - Right Column ***************  */}
         <PreferenceIndex />
        </MDBCol>
      </MDBRow>

    </div>

) : (
  ""
  );
}

export default NewForm


// gender_preference VARCHAR(20),
// pets_preference BOOLEAN,
// sexual_orientation_preference TEXT,
// open_rooms_preference BOOLEAN,
// neat_preference BOOLEAN,
// kids_preference BOOLEAN,
// low_noise_preference BOOLEAN,
// smoker_preference BOOLEAN,
// high_rise_preference BOOLEAN,
// house_preference BOOLEAN,
// private_bathroom_preference BOOLEAN,
// private_room_preference BOOLEAN,
// share_bills_preference BOOLEAN,
// religious_preference BOOLEAN,
// good_credit_preference BOOLEAN,
// high_income_preference