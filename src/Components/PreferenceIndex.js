import React from "react";
//import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import User from "./User";
import { useContextAuthProvider } from "../Firebase/context";

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
      <h2>Your Preferences</h2>
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
    Private_Bathroom: Yes
    Private Room: Yes<br/>
    Agree to Share Bills: Yes<br/>
    Religious: No<br/>
    Has Good Credit: Yes<br/>
    High Income: Yes<br/>
    </div>
  );
};

export default PreferenceIndex;
