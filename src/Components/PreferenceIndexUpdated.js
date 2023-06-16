import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContextAuthProvider } from "../Firebase/context";
// import Location from "./Location";
import "../Components/NewForm.css";
import "./PreferencesIndex.css"

// imports for material design bootstrap
import {
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBListGroup,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const API = process.env.REACT_APP_API_URL;

const PreferenceIndexUpdated = () => {
  const { user, zipcode, setZipcode } = useContextAuthProvider();
  const [answer, setAnswer] = useState({
    gender_preference: "",
    pets_preference: false,
    sexual_orientation_preference: "",
    open_rooms_preference: false,
    neat_preference: false,
    kids_preference: false,
    low_noise_preference: false,
    smoker_preference: false,
    high_rise_preference: false,
    house_preference: false,
    private_bathroom_preference: false,
    private_room_preference: false,
    share_bills_preference: false,
    religious_preference: false,
    good_credit_preference: false,
    high_income_preference: false,
    employed_preference: false, //need to be added to backend
    is_student_preference: false, //need to be added to backend
    //healthy_preference: true,        //need to be added to backend
    //allergies_preference: false,     //need to be added to backend
    disability_preference: false, //need to be added to backend
    //chronic_condition_preference: false,  //need to be added to backend
    //visiting_nurse_preference: false,     //need to be added to backend
    //home_assistance_preference: false,    //need to be added to backend
    musician_preference: false, //need to be added to backend
    partyhost_preference: false, //need to be added to backend
    //romantic_visits_preference: false,    //need to be added to backend
    //family_friend_visits_preference: false,     //need to be added to backend
    //night_life_preference: false,         //need to be added to backend
  });

  const handleTextChange = (event) => {
    setAnswer({ ...answer, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setAnswer({ ...answer, [event.target.id]: !answer[event.target.id] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.put(`${API}/user/${user.uid}/answers`, answer);
    console.log(res);
  };

  const checkedAlg = (val) => {
    return val === true ? "checked" : "";
  };

  useEffect(() => {
    axios
      .get(`${API}/user/${user.uid}/answers`)
      .then((response) => {
        setAnswer({ ...response.data[0] });
      })
      .catch((c) => console.warn("catch", c));
  }, [user]);

  return (
    <div className="preferenceIndex">
    {/* ************ removed country-state-city section *********** */}

      <form className="prefIndexForm" onSubmit={handleSubmit} noValidate>
        <MDBCard>
          <MDBCardHeader className="py-2">
            <MDBTypography tag="h5" className="mb-0">
              <strong>Preferences</strong>
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBListGroup>
              {/* ************ PREFERENCES *********** */}

              {/* ************ ROW 1 - Prefs *********** */}

              <MDBRow className="mb-3">

                <MDBCol className="col-4">
                {/* <p>ZipCode placeholder</p> */}
                 <MDBInput
                      
                      className="background-light-purple"
                      label="Filter by Zipcode"
                      type="string"
                      value={zipcode}
                      onChange={(e) => (setZipcode(e.target.value))}
                      id="zip_code"
                  />
                </MDBCol>

                <MDBCol className="col-4">
                  <select
                    className="col-12 select gender-select-prefs form-control"
                    // name="flexCheck"
                    onChange={handleTextChange}
                    value={answer.gender_preference}
                    id="gender_preference"
                    required
                    > 
                    <option defaultValue={"does-not-matter"}>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="intersex">Intersex</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="transgender">Transgender</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say...</option>     
                  </select>
                </MDBCol>
                <MDBCol>
                  <select 
                    style={{fontWeight: "bold", color: "rgb(117, 117, 117"}} 
                    className="orientation-select-prefs form-control background-light-purple"
                    name="flexCheck"
                    onChange={handleTextChange}
                    value={answer.sexual_orientation_preference}
                    id="sexual_orientation_preference"
                    required
                  >   
                    <option defaultValue={"does-not-matter"}>Orientation</option>
                    <option value="heterosexual">Heterosexual</option>
                    <option value="pansexual">Pansexual</option>
                    <option value="bisexual">BiSexual</option>
                    <option value="homosexual">Homosexual</option>
                    <option value="asexual">Asexual</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say...</option>
                  </select>
                </MDBCol>
              </MDBRow>

              {/* ************ ROW 2 - Prefs *********** */}

              <MDBRow className="mb-1">
                <MDBCol className="check">
                  <MDBCheckbox
                    className="credit-pref"
                    name="flexCheck"
                    label="Good Credit"
                    id="good_credit_preference"
                    onChange={handleCheckboxChange}
                    value={answer.good_credit_preference}
                    checked={checkedAlg(answer.good_credit_preference)}
                  />
                </MDBCol>
                <MDBCol className="check">
                  <MDBCheckbox
                    className="hasJob-pref"
                    name="flexCheck"
                    label="Employed"
                    id="employment_preference"
                    onChange={handleCheckboxChange}
                    value={answer.employment_preference}
                    checked={checkedAlg(answer.employed_preference)}
                  />
                </MDBCol>
                <MDBCol className="check">
                  <MDBCheckbox
                    className="highIncome-pref"
                    name="flexCheck"
                    label="High Income"
                    id="high_income_preference"
                    onChange={handleCheckboxChange}
                    value={answer.high_income_preference}
                    checked={checkedAlg(answer.high_income_preference)}
                  />
                </MDBCol>
              </MDBRow>

              {/* ************ ROW 3 - Prefs *********** */}

              <MDBRow className="mb-1">
                <MDBCol className="check">
                  <MDBCheckbox
                    className="shareBills-pref"
                    name="flexCheck"
                    label="Shares Bills"
                    id="share_bills_preference"
                    onChange={handleCheckboxChange}
                    value={answer.share_bills_preference}
                    checked={checkedAlg(answer.share_bills_preference)}
                  />
                </MDBCol>
                <MDBCol className="check">
                  <MDBCheckbox
                    name="flexCheck"
                    id="religious_preference"
                    label="Religious"
                    onChange={handleCheckboxChange}
                    value={answer.religious_preference}
                    checked={checkedAlg(answer.religious_preference)}
                  />
                </MDBCol>
                <MDBCol className="check">
                  <MDBCheckbox
                    name="flexCheck"
                    id="disabled_preference"
                    label="Disabled"
                    onChange={handleCheckboxChange}
                    value={answer.disabled_preference}
                    checked={checkedAlg(answer.disability_preference)}
                  />
                </MDBCol>
              </MDBRow>

              {/* ************ ROW 4 - Prefs *********** */}

              <MDBRow className="mb-1">
                <MDBCol className="check">
                  <MDBCheckbox
                    name="flexCheck"
                    id="smoker_preference"
                    label="Smoker"
                    onChange={handleCheckboxChange}
                    value={answer.smoker_preference}
                    checked={checkedAlg(answer.smoker_preference)}
                  />
                </MDBCol>
                <MDBCol className="check">
                  <MDBCheckbox
                    name="flexCheck"
                    id="musician_preference"
                    label="Musician"
                    onChange={handleCheckboxChange}
                    value={answer.musician_preference}
                    checked={checkedAlg(answer.musician_preference)}
                  />
                </MDBCol>
                <MDBCol className="check">
                  <MDBCheckbox
                    className="host_parties_preference"
                    name="flexCheck"
                    id="host_parties_preference"
                    label="Party Host"
                    onChange={handleCheckboxChange}
                    value={answer.host_parties_preference}
                    checked={checkedAlg(answer.partyhost_preference)}
                  />
                </MDBCol>
              </MDBRow>

              {/* ************ ROW 5 - Prefs *********** */}

              <MDBRow className="mb-1">
                <MDBCol className="check">
                  <MDBCheckbox
                    className="neat_preference"
                    name="flexCheck"
                    id="neat_preference"
                    label="Very Neat"
                    onChange={handleCheckboxChange}
                    value={answer.neat_preference}
                    checked={checkedAlg(answer.neat_preference)}
                  />
                </MDBCol>
                <MDBCol className="check">
                  <MDBCheckbox
                    name="flexCheck"
                    id="low_noise_preference"
                    label="Low Noise"
                    onChange={handleCheckboxChange}
                    value={answer.low_noise_preference}
                    checked={checkedAlg(answer.low_noise_preference)}
                  />
                </MDBCol>
                <MDBCol className="check">
                  <MDBCheckbox
                    className="openRooms-pref"
                    name="flexCheck"
                    label="Open Room"
                    id="open_rooms_preference"
                    onChange={handleCheckboxChange}
                    value={answer.open_rooms_preference}
                    checked={checkedAlg(answer.open_rooms_preference)}
                  />
                </MDBCol>
              </MDBRow>

              {/* ************ ROW 6 - Prefs *********** */}

              <MDBRow className="mb-1" style={{display: `${answer.open_rooms_preference ? "" : "none"}`}} >
              <MDBCol className='check'>
                <MDBCheckbox
                  className="privateRoom-pref"
                  name="flexCheck"
                  label="Private Room" 
                  id="private_room_preference"
                  onChange={handleCheckboxChange}
                  value={answer.private_room_preference}
                  checked={checkedAlg(answer.private_room_preference)}
                /> 
              </MDBCol>
              <MDBCol className='check'>
                <MDBCheckbox
                  className="privateBathroom-pref"
                  name="flexCheck"
                  label="Private Bath" 
                  id="private_bathroom_preference"
                  onChange={handleCheckboxChange}
                  value={answer.private_bathroom_preference}
                  checked={checkedAlg(answer.private_bathroom_preference)}
                /> 
              </MDBCol>
              <MDBCol className='check'>
                <MDBCheckbox
                  className="highRise-pref"
                  name="flexCheck"
                  label="High Rise" 
                  id="high_rise_preference"
                  onChange={handleCheckboxChange}
                  value={answer.high_rise_preference}
                  checked={checkedAlg(answer.high_rise_preference)}
                /> 
              </MDBCol>
            </MDBRow>

            {/* ************ ROW 7 - Prefs *********** */}
            <MDBRow className="mb-1" style={{display: `${answer.open_rooms_preference ? "" : "none"}`}} >
            {/* <MDBCol className="ms-0"> 
                  <MDBCheckbox
                    name="flexCheck"
                    id="singer_preference"
                    label="Is Active Singer" 
                    onChange={handleCheckboxChange}
                    value={answer.singer_preference}
                  /> 
                </MDBCol>   */}
                
              <MDBCol className='check'>
                <MDBCheckbox
                  className="house-pref"
                  name="flexCheck"
                  label="Private House" 
                  id="house_preference"
                  onChange={handleCheckboxChange}
                  value={answer.house_preference}
                  checked={checkedAlg(answer.house_preference)}
                /> 
              </MDBCol>
              <MDBCol className="ms-0"></MDBCol>
              <MDBCol className="ms-0"></MDBCol>
            </MDBRow>

            
    
            </MDBListGroup>

            {/* <MDBBtn size="lg" block> */}
            <br></br>
            <MDBRow className="mb-1">
          <MDBCol>
          <MDBBtn
              id="favorites-pill">
              View Favorites
            </MDBBtn>
          </MDBCol>
          <MDBCol>
          <MDBBtn className='sign-in-btn' type="submit">
              Save
            </MDBBtn>
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>

          </MDBCardBody>
        </MDBCard>
      </form>
    </div>
  );
};

export default PreferenceIndexUpdated;

//    ATTRIBUTES ORGANIZED BY CATEGORY
//    // Financial
//    good_credit_preference: true,
//    employment_preference: true,
//    high_income_preference: false,
//    share_bills_preference: true,

//    //Residential Availabilty, Type, Amenities
//    open_rooms_preference: false,
//    high_rise_preference: false,
//    house_preference: false,
//    private_bathroom_preference: false,
//    private_room_preference: false,

//    // LifeStyle
//    gender_preference: "Does not matter",
//    sexual_orientation_preference: "Does not matter",

//    neat_preference: true,
//    low_noise_preference: true,
//    religious_preference: false,

//    //Obligations
//    kids_preference: false,
//    pets_preference: false,
//    is_student_preference: false,

//    //Health
//    healthy_preference: true,
//    allergies_preference: false,
//    smoker_preference: false,
//    chronic_condition_preference: false,
//    disabled_preference: false,
//    visiting_nurse_preference: false,
//    home_assistance_preference: false,

//    //Activites
//    musician_preference: false,
//    singer_preference: false,
//    host_parties_preference: false,
//    romantic_visits_preference: false,
//    family_friend_visits_preference: false,
//    night_life_preference: false,
//    mate_id: "",
//  });

// Additional Checkboxes
// <MDBCheckbox
//     name="flexCheck"
//     id="healthy_preference"
//     label="Is healthy"
//     onChange={handleCheckboxChange}
//     value={answer.healthy_preference}
//   />
//    <MDBCheckbox
//     name="flexCheck"
//     id="allergies_preference"
//     label="Has Allergies"
//     onChange={handleCheckboxChange}
//     value={answer.allergies_preference}
//   />
// <MDBRow >
//<MDBCheckbox
//    name="flexCheck"
//   id="chronic_condition_preference"
//   label="Has Chronic Condition"
//   onChange={handleCheckboxChange}
//   value={answer.chronic_condition_preference}
// />

// <MDBCheckbox
//   name="flexCheck"
//   id="visiting_nurse_preference"
//   label="Receives Visiting Nurse Service"
//   onChange={handleCheckboxChange}
//   value={answer.visiting_nurse_preference}
// />
//  <MDBCheckbox
//     name="flexCheck"
//     id="home_health_aide_preference"
//     label="Receives Home Health Aid"
//     onChange={handleCheckboxChange}
//     value={answer.home_assistance_preference}
//   />

// <MDBCheckbox
// name="flexCheck"
// id="romantic_visits_preference"
// label="Expects Romantic Visits"
// onChange={handleCheckboxChange}
// value={answer.romantic_visits_preference}
// />

// <MDBCheckbox
// name="flexCheck"
// id="family_friend_visits_preference"
// label="Expects Family/Friend Visits"
// onChange={handleCheckboxChange}
// value={answer.family_friend_visits_preference}
// />

// <MDBCheckbox
// name="flexCheck"
// id="night_life_preference"
// label="Active Night Life"
// onChange={handleCheckboxChange}
// value={answer.night_life_preference}
// />
// </MDBRow>

{/* <div className="locationBox"> */}
{/* ************ ROW 1 *********** */}
{/* <MDBCard>
  <MDBCardHeader className="py-3">
    <MDBTypography tag="h5" className="mb-0">
      Select location to search for a roommate
    </MDBTypography>
  </MDBCardHeader>
  <MDBCardBody> */}
    {/* rendering component for React Select Location drop down list */}
    {/* <MDBRow>
      <MDBCol>
        <Location />
      </MDBCol>
    </MDBRow>
  </MDBCardBody>
</MDBCard>
</div> */}