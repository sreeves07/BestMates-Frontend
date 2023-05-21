//import React, { useEffect } from 'react'
import { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { auth } from "../Firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import "./NewForm.css";

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

  //   AXIOS CALL 2 - add user image for new user by posting to backend Image table

  //   const addUserImage = (image)
  //   axios
  //   .post(`${API}/user.${id}/images`, image)
  //   .then(
  //     () => {
  //       navigate(`/users`);
  //     },
  //     (error) => console.error(error)
  //   )
  //  .catch((c) => console.warn("catch", c));

  // ****  Handle toggle for checkboxes in new user attributes form *******

  const handleTextChange = (event) => {
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
    // console.log("newly added user", newUser)
  };

  // const handleImageChange = (event) => {
  // setImage({ ...image, [event.target.id]: event.target.value });
  // console.log("newly added user image", image)
  // };

  //handle functions for all checkboxes

  const handleCheckboxChange = (event) => {
    setNewUser({ ...newUser, [event.target.id]: !newUser[event.target.value] });
  };

  function handleSubmit(event) {
    event.preventDefault();
    addNewUser(newUser);
    //addUserImage(image)
  }

  return !loading ? (
    <div className="newFormBox">
      {/* ****** Grid Row 2  ***** */}
      {/* Form headings */}
      <div className="newFormHdgBox">
        <span className="newFormHdg">Welcome to BestMates!</span> <br />
        <span className="newFormSubHdg">
          Where you can find a roommate that matches your preferences!
        </span>
        <br />
        <span className="newFormMsg">
          First, please share some basic information about yourself, by
          completing this form and checking the options that apply. This will
          help provide the best matches. Thank you!
        </span>{" "}
        <br />
      </div>
      <form className="newForm" onSubmit={(e) => handleSubmit(e)}>
        {/* ****** Grid Row 1  ***** */}
        {/* Basic Info Heading */}

        <h6 className="basicInfoHdg">Basic Information:</h6>

        {/* ****** Grid Row 2  ***** */}
        {/* Basic Info */}
        <label
          className="newFormLabel basicInfo1-firstName"
          htmlFor="firstName">
          First Name:{" "}
        </label>
        <input
          className="firstName"
          id="first_name"
          name="firstName"
          type="text"
          onChange={handleTextChange}
          value={newUser.first_name}
          required
        />
        <label className="newFormLabel basicInfo2-lastName" htmlFor="lastName">
          Last Name:{" "}
        </label>
        <input
          className="lastName"
          id="last_name"
          name="lastName"
          type="text"
          onChange={handleTextChange}
          value={newUser.last_name}
        />

        <label
          className="newFormLabel basicInfo3-birthDate"
          htmlFor="birthDate">
          Date of Birth:{" "}
        </label>
        <input
          className="birthDate"
          id="birthday"
          name="birthDate"
          type="date"
          onChange={handleTextChange}
          value={newUser.birthday}
        />

        {/* ****** Grid Row 2 ***** */}
        {/* Basic Info Continued */}

        <label className="newFormLabel basicInfo4-city" htmlFor="city">
          City:{" "}
        </label>
        <input
          className="city"
          id="city"
          name="city"
          type="text"
          onChange={handleTextChange}
          value={newUser.city}
        />

        <label className="newFormLabel basicInfo5-state" htmlFor="state">
          State:{" "}
        </label>
        <input
          className="state"
          id="state"
          name="state"
          type="text"
          onChange={handleTextChange}
          value={newUser.state}
        />

        <label className="newFormLabel basicInfo6-zipcode" htmlFor="zip_code">
          Zip Code:{" "}
        </label>
        <input
          className="zipcode"
          id="zip_code"
          name="zip_code"
          type="number"
          onChange={handleTextChange}
          value={newUser.zip_code}
        />
        <label className="newFormLabel basicInfo8-gender" htmlFor="gender">
          Gender:{" "}
        </label>
        <input
          className="gender"
          id="gender"
          name="gender"
          type="text"
          onChange={handleTextChange}
          value={newUser.gender}
        />

        {/* ****** Grid Row 4 ***** */}
        {/* Attributes - text fields and dates */}

        <label className="newFormLabel attribute1-income" htmlFor="income">
          Income:{" "}
        </label>
        <input
          className="income"
          id="income"
          name="income"
          type="number"
          onChange={handleTextChange}
          value={newUser.income}
        />
        <label
          className="newFormLabel attribute2-creditScore"
          htmlFor="creditScore">
          Credit Score:{" "}
        </label>
        <input
          className="creditScore"
          id="credit_score"
          name="creditScore"
          type="number"
          onChange={handleTextChange}
          value={newUser.credit_score}
        />
        <label className="newFormLabel attribute3-maxRent" htmlFor="maxRent">
          Maximum Rent:{" "}
        </label>
        <input
          className="maxRent"
          id="max_rent"
          name="maxRent"
          type="number"
          onChange={handleTextChange}
          value={newUser.max_rent}
        />
        <label
          className="newFormLabel basicInfo9-sexOrient"
          htmlFor="sexOrient">
          Sexual Orientation:{" "}
        </label>
        <input
          className="sexOrient"
          id="sexual_orientation"
          name="sexOrient"
          type="text"
          onChange={handleTextChange}
          value={newUser.sexual_orientation}
        />

        {/* ****** Grid Row 5 ***** */}
        {/* Attribute headings*/}

        <h6 className="atttributeHdg">Your Attributes:</h6>
        <h6 className="atttributeSubHdg">
          (This information will allow other roomates to find you as a match.)
        </h6>

        {/* ****** Grid Row 6 ***** */}
        {/* Attributes - Checkboxes - Boolean Values */}

        <label
          className="newFormLabel attribute4-moveInDate"
          htmlFor="moveInDate">
          Move-in
          <br /> Date:{" "}
        </label>
        <input
          className="moveInDate"
          id="move_in_date"
          name="moveInDate"
          type="date"
          onChange={handleTextChange}
          value={newUser.move_in_date}
        />

        <label
          className="newFormLabel attribute5-isSharingBills"
          htmlFor="isSharingBills">
          {" "}
          Shares Utility Bills
        </label>
        <input
          className="isSharingBills"
          id="is_sharing_bills"
          name="isSharingBills"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={newUser.is_sharing_bills}
        />

        <label
          className="newFormLabel attribute6-hasOpenRooms"
          htmlFor="hasOpenRooms">
          Has Open Rooms:{" "}
        </label>
        <input
          className="hasOpenRooms"
          id="has_open_rooms"
          name="hasOpenRooms"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={newUser.has_open_rooms}
        />
        <br />
        <br />

        <label
          className="newFormLabel attribute10-isDisabled"
          htmlFor="disabled">
          Has Disability:{" "}
        </label>
        <input
          className="isDisabled"
          id="is_disabled"
          name="disabled"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={newUser.is_disabled}
        />

        {/* ****** Grid Row 7 ***** */}

        <label className="newFormLabel attribute7-hasKids" htmlFor="hasKids">
          Has Kids:{" "}
        </label>
        <input
          className="hasKids"
          id="has_kids"
          name="hasKids"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={newUser.has_kids}
        />
        <label className="newFormLabel attribute8-hasPets" htmlFor="hasPets">
          Has Pets:{" "}
        </label>
        <input
          className="hasPets"
          id="has_pets"
          name="hasPets"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={newUser.has_pets}
        />

        <label className="newFormLabel attribute11-isNeat" htmlFor="isNeat">
          Is Very neat?{" "}
        </label>
        <input
          className="isNeat"
          id="is_neat"
          name="isNeat"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={newUser.is_neat}
        />

        <label className="newFormLabel attribute9-isSmoker" htmlFor="isSmoker">
          Is A Smoker:{" "}
        </label>
        <input
          className="isSmoker"
          id="is_smoker"
          name="isSmoker"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={newUser.is_smoker}
        />
        <br />
        <br />

        <label
          className="newFormLabel attribute12-isReligious"
          htmlFor="isReligious">
          Is Religious:{" "}
        </label>
        <input
          className="isReligious"
          id="is_religious:"
          name="isReligious"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={newUser.is_religious}
        />

        {/* ****** Grid Row 8 ***** */}
        {/* ****** Submit and Cancel Buttons ***** */}
        <span className="newFormButtonsBox">
          <button className="submitButton-newForm" type="submit">
            Submit
          </button>

          <Link className="cancelButton-newForm" to={`/`}>
            <button className="cancelBtn-nf">Cancel</button>
          </Link>
        </span>

        <span className="newFormButtonsBox">
          <button className="submitButton-newForm" type="submit">
            Submit
          </button>
        </span>
      </form>
    </div>
  ) : (
    ""
  );
}

export default NewForm;

{
  /* <label htmlFor="profileImage">Image URL:</label>
          <input
              id="Profile_Image"
              type="text"
              pattern="http[s]*://.+"
            
              value={images.image}
              placeholder="http://"
              onChange={handleImageChange}
            /> */
}
