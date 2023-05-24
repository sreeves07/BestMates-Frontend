import React from "react";
//import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import User from "./User";
import { useContextAuthProvider } from "../Firebase/context";
import TestLocationSelect from './TestLocationSelect';

import "../Components/Test.css"
// import "../Components/NewForm.css"

// imports for material design bootstrap
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow,MDBRadio, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';
import csc from 'country-state-city';

const API = process.env.REACT_APP_API_URL;

const PreferenceIndex = ({ id }) => {
  const [answer, setAnswer] = useState({
    id: "5",
    gender_preference: "Female",
    pets_preference: false,
    sexual_orientation_preference: "Heterosexual",
    open_rooms_preference: false,
    neat_preference: true,
    kids_preference: false,
    low_noise_preference: true,
    smoker_preference: false,
    high_rise_preference: false,
    house_preference: false,
    private_bathroom_preference: false,
    private_room_preference: false,
    share_bills_preference: true,
    religious_preference: false,
    good_credit_preference: true,
    high_income_preference: false,
    is_student_preference: false,
    is_musician_preference: false,
    is_singer_preference: false,
    host_parties_preference: false,
    mate_id: "",
  });

  const { user } = useContextAuthProvider();

  const handleTextChange = (event) => {
    setAnswer({ ...answer, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setAnswer({ ...answer, [event.target.id]: !user[event.target.value] });
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    console.log(user);
    axios
      .get(`${API}/user/${id}/answers`)
      .then((response) => {
        console.log(
          "user response data for answers (preferences)=",
          response.data
        );
        setAnswer(...answer, ...response.data[0]);
      })
      .catch((c) => console.warn("catch", c));
  }, [id, answer]);

  return (
    <div>
      {/* <h2>Your Preferences</h2>
    Gender: Female <br/>
    Pet: No<br/>
    Sexual orientation: Heterosexual<br/>
    Open Rooms: No<br/>
    Neat: Yes<br/>
    Has Kids: No <br/>
    Low Noise: Yes <br/>
    Smoker: Yes<br/>
    High_Rise: Yes<br/>
    House: Yes<br/>
    Private_Bathroom: Yes<br/>
    Private Room: Yes<br/>
    Agree to Share Bills: Yes<br/>
    Religious: No<br/>
    Has Good Credit: Yes<br/>
    High Income: Yes<br/> */}

<MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">Your Preferences</MDBTypography>
            </MDBCardHeader>

            <MDBCardBody>
              <MDBListGroup flush>
              <MDBRow className="mb-4">
                  <select class="location-select-prefs"
                    onChange={handleTextChange}
                    value={answer.location}
                    id="host_parties"
                    required
                  
                  >   {/* class="browser-default custom-select" */}
                      <option defaultValue={"New York"}>Location</option>
                      <option value="1">Same as Mine</option>
                      <option value="2">New York</option>
                      <option value="3">Massachussetts</option>
                      <option value="4">Pennsylvania</option>
                      <option value="5">Washington</option>
                      <option value="6">Other/Decline to Share</option>
                  </select>
                </MDBRow> 

                <MDBRow className="mb-4">
                  <select class="gender-select-prefs"
                   onChange={handleTextChange}
                   value={answer.gender}
                   id="gender"
                   required
                  >   {/* class="browser-default custom-select" */}
                      <option defaultValue={"Other"}
                      onChange={handleTextChange}
                      value={answer.gender}
                      id="gender"
                      required>Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                      <option value="3">Intersex</option>
                      <option value="4">Non-Binary</option>
                      <option value="5">Transgender</option>
                      <option value="6">Other</option>
                  </select>
                </MDBRow>

                <MDBRow className="mb-4">    
                  <select class="orientation-select-prefs"
                   onChange={handleTextChange}
                   value={answer.sexual_orientation}
                   id="host_parties"
                   required
                  
                  >   {/* class="browser-default custom-select" */}
                     <option defaultValue={"Heterosexual"}>Orientation</option>
                     <option value="1">Heterosexual</option>
                     <option value="2">Pansexual</option>
                     <option value="3">BiSexual</option>
                     <option value="4">Homosexual</option>
                     <option value="5">Asexual</option>
                     <option value="6">Other/Decline to Share</option>
                  </select>
                </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label=" Has Good Credit" /> 
                  </MDBRow>

                   <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Has Employment" /> 
                  </MDBRow>

                  <MDBRow>
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Has High Income" /> 
                  </MDBRow> 

                  <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Has No Kids" /> 
                  </MDBRow> 

                  <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Has No Pets" /> 
                  </MDBRow> 

                  <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Agrees to Share Bills" /> 
                  </MDBRow> 
              
                <MDBRow className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    // id="register-flexCheckDefault"
                    label="Has Living Space"   /> 
                </MDBRow>
                
                <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label=" Is Very Neat/Clean" /> 
                  </MDBRow>

                   <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Non-Smoker" /> 
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Low Noise LifeStyle" /> 
                  </MDBRow> 

                  <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Is Religious" /> 
                  </MDBRow> 

                  <MDBRow className="mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      // id="register-flexCheckDefault"
                      label="Private Room" /> 
                  </MDBRow> 
              
                <MDBRow className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    // id="register-flexCheckDefault"
                    label="Private Bathroom"   /> 
                </MDBRow>

                {/* rendering component for React Select Location drop down list */}
                <MDBRow className="mb-4">
                  <TestLocationSelect />
                </MDBRow>
                
                {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>$53.98</strong></span>
                </MDBListGroupItem> */}

              </MDBListGroup>

              {/* <MDBBtn size="lg" block> */}
              <MDBBtn size="sm" >
                Save Preferences
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>





    </div>
  );
};

export default PreferenceIndex;
