import { useState } from "react";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import PreferenceIndexUpdated from "../Components/PreferenceIndexUpdated";
import Favorites from "../Components/Favorites";

import "../Components/SignIn/SignInForm.css";

const UserPreferencesContainer = ({ users }) => {
  const [justifyActive, setJustifyActive] = useState("tab1");

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

  console.log("CONTAINER ANSWERS", answer);

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <div className="user-preferences-container">
      <MDBContainer className="d-flex flex-column w-50">
        <MDBTabsContent>
          {justifyActive === "tab1" && (
            <PreferenceIndexUpdated
              justifyActive={justifyActive}
              answer={answer}
              setAnswer={setAnswer}
              users={users}
            />
          )}
          {justifyActive === "tab2" && (
            <PreferenceIndexUpdated
              justifyActive={justifyActive}
              answer={answer}
              setAnswer={setAnswer}
              users={users}
            />
          )}
        </MDBTabsContent>
        <br></br>
      </MDBContainer>
    </div>
  );
};

export default UserPreferencesContainer;
