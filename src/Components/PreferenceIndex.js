import React from "react";
//import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import User from "./User";
import { useContextAuthProvider } from "../Firebase/context";
import Location from './Location';

import "../Components/Test.css"
//import "../Components/NewForm.css"

// imports for material design bootstrap
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBListGroup, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import csc from 'country-state-city';

const API = process.env.REACT_APP_API_URL;

const PreferenceIndex = ({ id }) => {
  const [answer, setAnswer] = useState({
    // id: "5",
    // Financial
    good_credit_preference: true,
    employment_preference: true,
    high_income_preference: false,
    share_bills_preference: true,

    //Residential Availabilty, Type, Amenities
    open_rooms_preference: false,
    high_rise_preference: false,
    house_preference: false,
    private_bathroom_preference: false,
    private_room_preference: false,

    // LifeStyle
    gender_preference: "Does not matter",
    sexual_orientation_preference: "Does not matter",
   
    neat_preference: true,
    low_noise_preference: true,
    religious_preference: false,

    //Obligations
    kids_preference: false,
    pets_preference: false,
    is_student_preference: false,

    //Health
    healthy_preference: true,
    allergies_preference: false,
    smoker_preference: false,
    chronic_condition_preference: false,
    disabled_preference: false,
    visiting_nurse_preference: false,
    home_assistance_preference: false,
    


    //Activites
    musician_preference: false,
    singer_preference: false,
    host_parties_preference: false,
    romantic_visits_preference: false,
    family_friend_visits_preference: false,
    night_life_preference: false,
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
      <MDBCard >
        <MDBCardHeader className="py-3">
          <MDBTypography tag="h5" className="mb-0">Your Preferences</MDBTypography>
            </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup> 
                {/* ************ ROW 1 *********** */}
                {/* rendering component for React Select Location drop down list */}
                <MDBRow >     <Location />    </MDBRow>

                {/* ************ ROW 2 - Financial Prefs *********** */}

                <MDBRow >
                  <MDBCheckbox
                    class="credit-pref"
                    name="flexCheck"
                    label="Has Good Credit" 
                    id="good_credit_preference"
                    onChange={handleCheckboxChange}
                    value={answer.good_credit_preference}
                  /> 
                  <MDBCheckbox
                    class="highIncome-pref"
                    name="flexCheck"
                    label="Has High Income" 
                    id="high_income_preference"
                    onChange={handleCheckboxChange}
                    value={answer.high_income_preference}
                  /> 
                  <MDBCheckbox
                    class="shareBills-pref"
                    name="flexCheck"
                    label="Agree to Share Bills" 
                    id="share_bills_preference"
                    onChange={handleCheckboxChange}
                    value={answer.share_bills_preference}
                  /> 
                  <MDBCheckbox
                      name="flexCheck"
                      label="Has a Job / Source of Income" 
                      id="employment_preference"
                      onChange={handleCheckboxChange}
                      value={answer.employment_preference}
                  /> 
                </MDBRow>

                {/* ************ ROW 3 - Residential Prefs *********** */}
                <MDBRow >
                  <MDBCheckbox
                    class="openRooms-pref"
                    name="flexCheck"
                    label="Has Open Room(s)" 
                    id="open_rooms_preference"
                    onChange={handleCheckboxChange}
                    value={answer.open_rooms_preference}
                  /> 
                  <MDBCheckbox
                    class="highRise-pref"
                    name="flexCheck"
                    label="High Rise building" 
                    id="high_rise_preference"
                    onChange={handleCheckboxChange}
                    value={answer.high_rise_preference}
                  /> 
                  <MDBCheckbox
                    class="house-pref"
                    name="flexCheck"
                    label="Private House" 
                    id="house_preference"
                    onChange={handleCheckboxChange}
                    value={answer.house_preference}
                  /> 
                </MDBRow>

                {/* ************ ROW 4 - Residential Prefs Cont'd *********** */}
                <MDBRow>
                  <MDBCheckbox
                    class="privateBathroom-pref"
                    name="flexCheck"
                    label="Private Bathroom" 
                    id="private_bathroom_preference"
                    onChange={handleCheckboxChange}
                    value={answer.private_bathroom_preference}
                  /> 
                  <MDBCheckbox
                    class="privateRoom-pref"
                    name="flexCheck"
                    label="Private Room" 
                    id="private_room_preference"
                    onChange={handleCheckboxChange}
                    value={answer.private_room_preference}
                  /> 
                </MDBRow>

                {/* ************ ROW 5 - LifeStyle Prefs *********** */}

                <MDBRow >
                  <select class="gender-select-prefs"
                   // name="flexCheck"
                   onChange={handleTextChange}
                   value={answer.gender_preference}
                   id="gender_preference"
                   required
                  > 
                    <option defaultValue={"Does not matter"}>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Intersex</option>
                    <option value="4">Non-Binary</option>
                    <option value="5">Transgender</option>
                    <option value="6">Other</option>
                    <option value="7">Does not matter</option>
                  </select>

                  <select class="orientation-select-prefs"
                   // name="flexCheck"
                   onChange={handleTextChange}
                   value={answer.sexual_orientation_preference}
                   id="sexual_orientation_preference"
                   required
                  >   
                    <option defaultValue={"Does not matter"}>Orientation</option>
                    <option value="1">Heterosexual</option>
                    <option value="2">Pansexual</option>
                    <option value="3">BiSexual</option>
                    <option value="4">Homosexual</option>
                    <option value="5">Asexual</option>
                    <option value="6">Other</option>
                    <option value="7">Does not matter</option>
                  </select>
                </MDBRow>

                {/* ************ ROW 6 - LifeStyle Prefs Cont'd *********** */}
                <MDBRow >    
                  <MDBCheckbox
                    // name="flexCheck"
                    id="neat_preference"
                    label="Is Very Neat" 
                    onChange={handleCheckboxChange}
                    value={answer.neat_preference}
                  /> 

                  <MDBCheckbox
                    name="flexCheck"
                    id="low_noise_preference"
                    label="Low Noise" 
                    onChange={handleCheckboxChange}
                    value={answer.low_noise_preference}
                  /> 

                 <MDBCheckbox
                    name="flexCheck"
                    id="religious_preference"
                    label="Is Religious" 
                    onChange={handleCheckboxChange}
                    value={answer.religious_preference}
                  /> 
                </MDBRow>


                {/* ************ ROW 7 - Obligations Prefs *********** */}

                <MDBRow >
  
                </MDBRow>


                {/* ************ ROW 8 - Health Prefs *********** */}

                <MDBRow >
                <MDBCheckbox
                    name="flexCheck"
                    id="healthy_preference"
                    label="Is healthy" 
                    onChange={handleCheckboxChange}
                    value={answer.healthy_preference}
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    id="allergies_preference"
                    label="Has Allergies" 
                    onChange={handleCheckboxChange}
                    value={answer.allergies_preference}
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    id="smoker_preference"
                    label="Is a Smoker" 
                    onChange={handleCheckboxChange}
                    value={answer.smoker_preference}
                  />
                </MDBRow>

                {/* ************ ROW 9 - Health Prefs Cont'd *********** */}

                <MDBRow >
                <MDBCheckbox
                    name="flexCheck"
                    id="chronic_condition_preference"
                    label="Has Chronic Condition" 
                    onChange={handleCheckboxChange}
                    value={answer.chronic_condition_preference}
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    id="disabled_preference"
                    label="Has Disability" 
                    onChange={handleCheckboxChange}
                    value={answer.disabled_preference}
                  />
                  <MDBCheckbox
                    name="flexCheck"
                    id="visiting_nurse_preference"
                    label="Receives Visiting Nurse Service" 
                    onChange={handleCheckboxChange}
                    value={answer.visiting_nurse_preference}
                  /> 
                  <MDBCheckbox
                    name="flexCheck"
                    id="home_health_aide_preference"
                    label="Receives Home Health Aid" 
                    onChange={handleCheckboxChange}
                    value={answer.home_assistance_preference}
                  />                                     
                </MDBRow>

                {/* ************ ROW 10 - Activities Prefs *********** */}

                <MDBRow >
                <MDBCheckbox
                    name="flexCheck"
                    id="musician_preference"
                    label="Is Active Musician" 
                    onChange={handleCheckboxChange}
                    value={answer.musician_preference}
                  />  
                  <MDBCheckbox
                    name="flexCheck"
                    id="singer_preference"
                    label="Is Active Singer" 
                    onChange={handleCheckboxChange}
                    value={answer.singer_preference}
                  />  
                  <MDBCheckbox
                    name="flexCheck"
                    id="host_parties_preference"
                    label="Hosts Parties" 
                    onChange={handleCheckboxChange}
                    value={answer.host_parties_preference}
                  />  
                </MDBRow>

                {/* ************ ROW 11 - Activities Prefs Cont'd *********** */}         
         
                <MDBRow >
                <MDBCheckbox
                    name="flexCheck"
                    id="romantic_visits_preference"
                    label="Expects Romantic Visits" 
                    onChange={handleCheckboxChange}
                    value={answer.romantic_visits_preference}
                  />  
                  <MDBCheckbox
                    name="flexCheck"
                    id="family_friend_visits_preference"
                    label="Expects Family/Friend Visits" 
                    onChange={handleCheckboxChange}
                    value={answer.family_friend_visits_preference}
                  />  
                  <MDBCheckbox
                    name="flexCheck"
                    id="night_life_preference"
                    label="Active Night Life" 
                    onChange={handleCheckboxChange}
                    value={answer.night_life_preference}
                  />  
                </MDBRow>

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
