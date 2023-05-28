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
      <form
        className="userPrefs-Form userPref-filterBox"
        onSubmit={(e) => handleSubmit(e)}>
        <h3 className="userPrefsHdg"> ~~ Saved Preferences ~~ </h3>
        <label className="userPref-gender-label" htmlFor="userPref-gender">
          Gender:{" "}
        </label>
        <input
          className="userPref-gender"
          id="gender_preference"
          name="userPref-gender"
          type="text"
          onChange={handleTextChange}
          value={answer.gender_preference}
        />
        <label
          className="high_income_preference-label"
          htmlFor="high_income_preference">
          High Income:{" "}
        </label>
        :
        <input
          className="high_income_preference"
          id="high_income_preference"
          name="high_income_preference"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={answer.high_income_preference}
        />
        <label
          className="good_credit_preference-label"
          htmlFor="good_credit_preference">
          Good Credit Score:{" "}
        </label>
        <input
          className="good_credit_preference-label"
          id="good_credit_preference"
          name="good_credit_preference"
          type="number"
          onChange={handleTextChange}
          value={answer.good_credit_preference}
        />
        {/* <span className='userPrefsButtonsBox'>
                    <button className='submitButton-userPref' type="submit">Submit</button> */}
        {/* <Link className="cancelLink-userPref" to={`/`}>
                            <button className='cancelBtn-userPref'>Cancel</button>
                      </Link> */}
        {/* </span> */}
      </form>
    </div>
  );
};

export default PreferenceIndex;
