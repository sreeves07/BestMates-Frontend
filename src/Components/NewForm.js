import React, { useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import "../newForm.css";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function NewForm() {

  //const [checked, setChecked] = useState(false)
 // const [input, setInput] = useState("")
  //const [image, setImage] = useState("")
  
  const [newUser, setNewUser] = useState({
    First_Name: "",
    Last_Name: "",
    Password: "",
    Age: "",
    Email: "", 
    City: "",
    State: "",
    Birthday: "",
    Gender: "",
    Sexual_Orientation: "",
    Has_Pets: false, 
    Has_Open_Rooms: false,
    Is_Smoker: false,
    Has_Kids: false,
    Is_Disabled: false,
    Is_Sharing_bills: false,
    Is_Neat: false,
    Is_Religious: false,
    Move_In_Date: "",
    Max_Rent: "",
    Credit_Score: "",
    Income: ""
});


// AXIOS CALL 1 -  make an axios call to backend to be able to post info re new user from form
let navigate = useNavigate();

const addNewUser = (newUser) => {
  axios
  .post(`${API}/user`)
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
      console.log("newly added user", newUser)
    };

    // const handleImageChange = (event) => {
    // setImage({ ...image, [event.target.id]: event.target.value });
    // console.log("newly added user image", image)
    // };


    //handle functions for all checkboxes

    const handleCheckboxChange1 = () => {
      setNewUser({ ...newUser, Is_Sharing_bills: !newUser.Is_Sharing_bills });
    };
    const handleCheckboxChange2 = () => {
      setNewUser({ ...newUser, Has_Open_Rooms: !newUser.Has_Open_Rooms });
    };
    const handleCheckboxChange3 = () => {
      setNewUser({ ...newUser, Has_Kids: !newUser.Has_Kids });
    };
    const handleCheckboxChange4 = () => {
      setNewUser({ ...newUser, Has_Pets: !newUser.Has_Pets });
    };
    const handleCheckboxChange5 = () => {
      setNewUser({ ...newUser, Is_Smoker: !newUser.Is_Smoker });
    };
    const handleCheckboxChange6 = () => {
      setNewUser({ ...newUser, Is_Disabled: !newUser.Is_Disabled });
    };
    const handleCheckboxChange7 = () => {
      setNewUser({ ...newUser, Is_Neat: !newUser.Is_Neat });
    };
    const handleCheckboxChange8 = () => {
      setNewUser({ ...newUser, Is_Religious: !newUser.Is_Religious });
    };
    
   function handleSubmit(event){
    event.preventDefault()
    //addNewUser(newUser)
    //addUserImage(image)
  }

  return (
    <div className='formHdgBox'>
      <h4 className='newFormHdg'>Welcome to BestMates!</h4> 
      <p className='newFormSubHdg'>Where you can find a roommate that matches your preferences!</p>
      <p className='newFormMsg'>First, please share some basic information about yourself, by completing this form and checking the options that apply. This will help provide the best matches. Thank you!</p> <br/>
      <form className='newForm' onSubmit={(e) => handleSubmit(e)}>

           {/* ****** Grid Row 1  ***** */}
           {/* Basic Info */}

          <label className='newFormLabel basicInfo1-firstName'   htmlFor="firstName">First Name: </label>
          <input 
                className='firstName'
                id="First_Name" 
                name="firstName" 
                type="text" 
                onChange={handleTextChange}
                //value={input}
                required
                />
          <label className='newFormLabel basicInfo2-lastName' htmlFor="lastName">Last Name: </label>
          <input 
                className='lastName'
                id="Last_Name" 
                name="lastName" 
                type="text" 
                onChange={handleTextChange}
                //value={input}
                />
          <label className='newFormLabel basicInfo3-age' htmlFor="age">Age: </label>
          <input 
                className='age'
                id="Age" 
                name="age" 
                type= "number"
                onChange={handleTextChange}
                //value={input}
                />
          <label className='newFormLabel basicInfo4-birthDate'  htmlFor="birthDate">Date of Birth: </label>
          <input 
                className='birthDate'
                id="Birthday" 
                name="birthDate" 
                type="date" 
                onChange={handleTextChange}
                //value={input}
                />

           {/* ****** Grid Row 2 ***** */}
           {/* Basic Info Continued */}
           
          <label className='newFormLabel basicInfo5-city'  htmlFor="city">City: </label>
          <input 
                className='city'
                id="City" 
                name="city" 
                type= "text"
                onChange={handleTextChange}
               // value={input}
                />

          <label className='newFormLabel basicInfo6-state'  htmlFor="state">State: </label>
          <input 
                className='state'
                id="state" 
                name="state" 
                type="text" 
                onChange={handleTextChange}
                //value={input}
                />
          <label className='newFormLabel basicInfo7-email' htmlFor="email">Email: </label>
          <input 
                className='email'
                id="Email" 
                name="email" 
                type="text" 
                onChange={handleTextChange}
                //value={input}
                />        
          <label className='newFormLabel basicInfo8-gender'  htmlFor="gender">Gender: </label>
          <input 
                className='gender'
                id="gender" 
                name="gender" 
                type="text" 
                onChange={handleTextChange}
                //value={input}
                />
                
          {/* ****** Grid Row 3 ***** */}
          {/* Attributes - text fields and dates */}
          
          <label className='newFormLabel attribute1-income' htmlFor="income">Income: </label>
          <input 
                className='income'
                id="Income" 
                name="income" 
                type="text" 
                onChange={handleTextChange}
                //value={input}
                />
          <label className='newFormLabel attribute2-creditScore'  htmlFor="creditScore">Credit Score: </label>
          <input 
                className='creditScore'
                id="Credit_Score" 
                name="creditScore" 
                type="text" 
                onChange={handleTextChange}
                //value={input}
                />
          <label className='newFormLabel attribute3-maxRent'  htmlFor="maxRent">Maximum Rent: </label>
          <input 
                className='maxRent'
                id="Max_Rent" 
                name="maxRent" 
                type="checkbox" 
                onChange={handleTextChange}
                //value={input}
                />
         <label className='newFormLabel basicInfo9-sexOrient'  htmlFor="sexOrient">Sexual Orientation: </label>
          <input 
                className='sexOrient'
                id="Sexual_Orientation" 
                name="sexOrient" 
                type="text" 
                onChange={handleTextChange}
               // value={input}
                />

         {/* ****** Grid Row 4 ***** */}
         {/* Attributes - Date field */}

          <label className='newFormLabel attribute4-moveInDate'  htmlFor="moveInDate">Desired Move-in Date: </label>
          <input 
                className='moveInDate'
                id="Move_In_Date" 
                name="moveInDate" 
                type="date" 
                onChange={handleTextChange}
                //value={input}
                />
      
          {/* ****** Grid Row 5 ***** */}
          {/* Attributes - Checkboxes - Boolean Values */}

          <label  className='newFormLabel attribute5-isSharingBills' htmlFor="isSharingBills"> Share bills?</label>
          <input 
                className='isSharingBills'
                id="Is_Sharing_bills" 
                name="isSharingBills" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange1(event)}
                //value={input}
                checked={newUser.Is_Sharing_bills}
                />
          <label className='newFormLabel attribute6-hasOpenRooms'  htmlFor="hasOpenRooms">Has Open Rooms: </label>
          <input 
                className='hasOpenRooms'
                id="Has_Open_Rooms" 
                name="hasOpenRooms" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange2(event)}
                //value={input}
                checked={newUser.Has_Open_Rooms}
                /><br/><br/>
         <label className='newFormLabel attribute7-hasKids'  htmlFor="hasKids">Has Kids: </label>
          <input 
                className='hasKids'
                id="Has_Kids" 
                name="hasKids" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange3(event)}
                //value={input}
                checked={newUser.Has_Kids}
                />
          <label className='newFormLabel attribute8-hasPets'  htmlFor="hasPets">Has Pets: </label>
          <input 
                className='hasPets'
                id="Has_Pets" 
                name="hasPets" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange4(event)}
                checked={newUser.Has_Pets}
                />
          <label className='newFormLabel attribute9-isSmoker'  htmlFor="isSmoker">Is A Smoker: </label>
          <input 
                className='isSmoker'
                id="is_Smoker" 
                name="isSmoker" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange5(event)}
                //value={input}
                checked={newUser.Is_Smoker}
                /><br/><br/>

          {/* ****** Grid Row 6 ***** */}
          {/* ****** Checkboxes continued ***** */}

          <label className='newFormLabel attribute10-isDisabled'  htmlFor="disabled">Disabled: </label>
          <input 
                className='isDisabled'
                id="Is_Disabled" 
                name="disabled" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange6(event)}
                //value={input}
                checked={newUser.Is_Disabled}
                />
          <label  className='newFormLabel attribute11-isNeat' htmlFor="isNeat">Very neat? </label>
          <input 
                className='isNeat'
                id="Is_Neat" 
                name="isNeat" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange7(event)}
                //value={input}
                checked={newUser.Is_Neat}
                />
          <label className='newFormLabel attribute12-isReligious'  htmlFor="isReligious">Is Religious: </label>
          <input 
                className='isReligious'
                id="Is_Religious:" 
                name="isReligious" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange8(event)}
                //value={input}
                checked={newUser.Is_Religious}
                />
           <span className='newFormButtonsBox'>
                <button className='submitButton-newForm' type="submit">Submit</button>

                  <Link className="cancelButton-newForm" to={`/`}>
                        <button className='cancelBtn-nf'>Cancel</button>
                  </Link>
          </span>
        </form>
    </div>
  )
}

export default NewForm


          {/* <label htmlFor="profileImage">Image URL:</label>
          <input
              id="Profile_Image"
              type="text"
              pattern="http[s]*://.+"
            
              value={images.image}
              placeholder="http://"
              onChange={handleImageChange}
            /> */}




