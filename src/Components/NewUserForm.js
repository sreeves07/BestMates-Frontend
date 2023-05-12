import React from 'react'
import { useState } from "react";
import axios from "axios";
import "../newUserForm.css";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function NewUserForm() {
  let navigate = useNavigate();
  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState("")

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



  axios
  .post(`${API}/users`, newUser)
  .then(
    () => {
      navigate(`/snacks`);
    },
    (error) => console.error(error)
  )
  .catch((c) => console.warn("catch", c));



  const handleTextChange = (event) => {
    setInput(event.target.value)
   }

   function handleCheckboxChange() {
    setChecked(!checked);
  }
  
   function handleSubmit(event){
    event.preventDefault()
  }


  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
          <label for="fName">First Name: </label>
          <input 
                className='fName'
                id="firstName" 
                name="firstName" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="lName">Last Name: </label>
          <input 
                className='lName'
                id="lastName" 
                name="lastName" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="age">Age: </label>
          <input 
                className='age'
                id="age" 
                name="age" 
                type= "number"
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="email">Email: </label>
          <input 
                className='email'
                id="email" 
                name="email" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="city">City: </label>
          <input 
                className='city'
                id="city" 
                name="city" 
                type= "text"
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="state">State: </label>
          <input 
                className='state'
                id="state" 
                name="state" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>
              

          <label for="birthday">Date of Birth: </label>
          <input 
                className='birthday'
                id="birthday" 
                name="birthday" 
                type="date" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="gender">Gender: </label>
          <input 
                className='gender'
                id="gender" 
                name="gender" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="sexualOrientation">Sexual Orientation: </label>
          <input 
                className='sexualOrientation'
                id="sexualOrientation" 
                name="sexualOrientation" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

<label for="hasPets">Has Pets: </label>
          <input 
                className='hasPets'
                id="hasPets" 
                name="hasPets" 
                type="checkbox" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="hasOpenRooms">Has Open Rooms: </label>
          <input 
                className='hasOpenRooms'
                id="hasOpenRooms" 
                name="hasOpenRooms" 
                type="checkbox" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="state">State: </label>
          <input 
                className='state'
                id="state" 
                name="state" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="isSmoker">Is A Smoker: </label>
          <input 
                className='isSmoker'
                id="isSmoker" 
                name="isSmoker" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <label for="hasKids">Has Kids: </label>
          <input 
                className='hasKids'
                id="hasKids" 
                name="hasKids" 
                type="checkbox" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                /><br/><br/>

          <button type="submit">Submit</button>
          
        </form>


    </div>
  )
}

export default NewUserForm







