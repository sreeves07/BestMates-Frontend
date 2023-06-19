import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import user from "./User";

const API = process.env.REACT_APP_API_URL;

function UserFilteredList() {
  // const [answer, setAnswer] = useState({
  //   gender_preference: "",
  //   pets_preference: false,
  //   sexual_orientation_preference: "",
  //   open_rooms_preference: false,
  //   neat_preference: false,
  //   kids_preference: false,
  //   low_noise_preference: false,
  //   smoker_preference: false,
  //   high_rise_preference: false,
  //   house_preference: false,
  //   private_bathroom_preference: false,
  //   private_room_preference: false,
  //   share_bills_preference: false,
  //   religious_preference: false,
  //   good_credit_preference: false,
  //   high_income_preference: false,
  //   employed_preference: false, //need to be added to backend
  //   is_student_preference: false, //need to be added to backend
  //   //healthy_preference: true,        //need to be added to backend
  //   //allergies_preference: false,     //need to be added to backend
  //   disability_preference: false, //need to be added to backend
  //   //chronic_condition_preference: false,  //need to be added to backend
  //   //visiting_nurse_preference: false,     //need to be added to backend
  //   //home_assistance_preference: false,    //need to be added to backend
  //   musician_preference: false, //need to be added to backend
  //   partyhost_preference: false, //need to be added to backend
  //   //romantic_visits_preference: false,    //need to be added to backend
  //   //family_friend_visits_preference: false,     //need to be added to backend
  //   //night_life_preference: false,         //need to be added to backend
  // });

  useEffect(() => {
    axios
      .get(`${API}/user/${user.uid}/answers`)
      .then((response) => {
        setAnswer({ ...response.data[0] });
      })
      .catch((c) => console.warn("catch", c));
  }, [user]);

  // const[newNote, setNewNote] = useState(student.notes)
  return <div>UserFilteredList</div>;
}

export default UserFilteredList;
