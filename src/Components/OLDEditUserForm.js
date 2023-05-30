import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./EditUserForm.css";

const API = process.env.REACT_APP_API_URL;

function OLDEditUserForm() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
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

  let { id } = useParams();
  let navigate = useNavigate();

  const updateUser = (updatedUser) => {
    axios
      .put(`${API}/user/${id}`, updatedUser)
      .then(
        () => {
          navigate(`/user/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  // ****  Handle toggle for checkboxes in new user attributes form *******

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setUser({ ...user, [event.target.id]: !user[event.target.value] });
  };

  function handleSubmit(event) {
    event.preventDefault();
    updateUser(user, id);
  }

  return (
    <div className="editFormBox">
      {/* Form headings */}
      <div className="editFormHdgBox">
        <span className="editFormHdg">Edit Profile Form</span> <br />
        <span className="editFormSubHdg">
          Edit and save changes to update your basic information
        </span>
        <br />
      </div>

      <form className="editForm" onSubmit={(e) => handleSubmit(e)}>
        {/* ****** Grid Row 1  ***** */}
        {/* Basic Info Heading */}

        <h6 className="basicInfoHdg-ef">Basic Information:</h6>

        {/* ****** Grid Row 2  ***** */}
        {/* Basic Info */}
        <label
          className="editFormLabel basicInfo1-firstName-ef"
          htmlFor="firstName">
          First Name:{" "}
        </label>
        <input
          className="firstName-ef"
          id="first_name"
          name="firstName"
          type="text"
          onChange={handleTextChange}
          value={user.first_name}
          required
        />
        <label
          className="editFormLabel basicInfo2-lastName-ef"
          htmlFor="lastName">
          Last Name:{" "}
        </label>
        <input
          className="lastName-ef"
          id="last_name"
          name="lastName"
          type="text"
          onChange={handleTextChange}
          value={user.last_name}
        />

        <label
          className="editFormLabel basicInfo3-birthDate-ef"
          htmlFor="birthDate">
          Date of Birth:{" "}
        </label>
        <input
          className="birthDate-ef"
          id="birthday"
          name="birthDate"
          type="date"
          onChange={handleTextChange}
          value={user.birthday}
        />

        {/* ****** Grid Row 2 ***** */}
        {/* Basic Info Continued */}

        <label className="editFormLabel basicInfo4-city-ef" htmlFor="city">
          City:{" "}
        </label>
        <input
          className="city-ef"
          id="city"
          name="city"
          type="text"
          onChange={handleTextChange}
          value={user.city}
        />

        <label className="editFormLabel basicInfo5-state-ef" htmlFor="state">
          State:{" "}
        </label>
        <input
          className="state-ef"
          id="state"
          name="state"
          type="text"
          onChange={handleTextChange}
          value={user.state}
        />

        <label
          className="editFormLabel basicInfo6-zipcode-ef"
          htmlFor="zip_code">
          Zip Code:{" "}
        </label>
        <input
          className="zipcode-ef"
          id="zip_code"
          name="zip_code"
          type="number"
          onChange={handleTextChange}
          value={user.zip_code}
        />
        <label className="editFormLabel basicInfo7-email-ef" htmlFor="email">
          Email:{" "}
        </label>
        <input
          className="email-ef"
          id="email"
          name="email"
          type="email"
          onChange={handleTextChange}
          value={user.email}
        />
        <label className="editFormLabel basicInfo8-gender-ef" htmlFor="gender">
          Gender:{" "}
        </label>
        <input
          className="gender-ef"
          id="gender"
          name="gender"
          type="text"
          onChange={handleTextChange}
          value={user.gender}
        />

        {/* ****** Grid Row 4 ***** */}
        {/* Attributes - text fields and dates */}

        <label className="editFormLabel attribute1-income-ef" htmlFor="income">
          Income:{" "}
        </label>
        <input
          className="income-ef"
          id="income"
          name="income"
          type="number"
          onChange={handleTextChange}
          value={user.income}
        />
        <label
          className="editFormLabel attribute2-creditScore-ef"
          htmlFor="creditScore">
          Credit Score:{" "}
        </label>
        <input
          className="creditScore-ef"
          id="credit_score"
          name="creditScore"
          type="number"
          onChange={handleTextChange}
          value={user.credit_score}
        />
        <label
          className="editFormLabel attribute3-maxRent-ef"
          htmlFor="maxRent">
          Maximum Rent:{" "}
        </label>
        <input
          className="maxRent-ef"
          id="max_rent"
          name="maxRent"
          type="number"
          onChange={handleTextChange}
          value={user.max_rent}
        />
        <label
          className="editFormLabel basicInfo9-sexOrient-ef"
          htmlFor="sexOrient">
          Sexual Orientation:{" "}
        </label>
        <input
          className="sexOrient-ef"
          id="sexual_orientation"
          name="sexOrient"
          type="text"
          onChange={handleTextChange}
          value={user.sexual_orientation}
        />

        {/* ****** Grid Row 5 ***** */}
        {/* Attribute headings*/}

        <h6 className="atttributeHdg-ef">Your Attributes:</h6>
        <h6 className="atttributeSubHdg-ef">
          (Allows other roomates to find you as a match.)
        </h6>

        {/* ****** Grid Row 6 ***** */}
        {/* Attributes - Checkboxes - Boolean Values */}

        <label
          className="editFormLabel attribute4-moveInDate-ef"
          htmlFor="moveInDate">
          Move Date:{" "}
        </label>
        <input
          className="moveInDate-ef"
          id="move_in_date"
          name="moveInDate"
          type="date"
          onChange={handleTextChange}
          value={user.move_in_date}
        />

        <label
          className="editFormLabel attribute5-isSharingBills-ef"
          htmlFor="isSharingBills">
          {" "}
          Shares Utility Bills
        </label>
        <input
          className="isSharingBills-ef"
          id="is_sharing_bills"
          name="isSharingBills"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={user.is_sharing_bills}
        />

        <label
          className="editFormLabel attribute6-hasOpenRooms-ef"
          htmlFor="hasOpenRooms">
          Has Open Rooms:{" "}
        </label>
        <input
          className="hasOpenRooms-ef"
          id="has_open_rooms"
          name="hasOpenRooms"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={user.has_open_rooms}
        />
        <br />
        <br />

        <label
          className="editFormLabel attribute10-isDisabled-ef"
          htmlFor="disabled">
          Has Disability:{" "}
        </label>
        <input
          className="isDisabled-ef"
          id="is_disabled"
          name="disabled"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={user.is_disabled}
        />

        {/* ****** Grid Row 7 ***** */}

        <label
          className="editFormLabel attribute7-hasKids-ef"
          htmlFor="hasKids">
          Has Kids:{" "}
        </label>
        <input
          className="hasKids-ef"
          id="has_kids"
          name="hasKids"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={user.has_kids}
        />
        <label
          className="editFormLabel attribute8-hasPets-ef"
          htmlFor="hasPets">
          Has Pets:{" "}
        </label>
        <input
          className="hasPets-ef"
          id="has_pets"
          name="hasPets"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={user.has_pets}
        />

        <label className="editFormLabel attribute11-isNeat-ef" htmlFor="isNeat">
          Is Very neat?{" "}
        </label>
        <input
          className="isNeat-ef"
          id="is_neat"
          name="isNeat"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={user.is_neat}
        />

        <label
          className="editFormLabel attribute9-isSmoker-ef"
          htmlFor="isSmoker">
          Is A Smoker:{" "}
        </label>
        <input
          className="isSmoker-ef"
          id="is_smoker"
          name="isSmoker"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={user.is_smoker}
        />
        <br />
        <br />

        <label
          className="editFormLabel attribute12-isReligious-ef"
          htmlFor="isReligious">
          Is Religious:{" "}
        </label>
        <input
          className="isReligious-ef"
          id="is_religious:"
          name="isReligious"
          type="checkbox"
          onChange={(event) => handleCheckboxChange(event)}
          value={user.is_religious}
        />

        {/* ****** Grid Row 8 ***** */}
        {/* ****** Submit and Cancel Buttons ***** */}
        <span className="editFormButtonsBox">
          <button className="submitButton-editForm" type="submit">
            Submit
          </button>

          <Link className="cancelLink-editForm" to={`/`}>
            <button className="cancelBtn-editForm">Cancel</button>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default OLDEditUserForm;
