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

  axios
  .post(`${API}/users`, newUser)
  .then(
    () => {
      navigate(`/snacks`);
    },
    (error) => console.error(error)
  )
  .catch((c) => console.warn("catch", c));

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
          <label for="fName">First Name:</label><br/>
          <input 
                className='fName'
                id="firstName" 
                name="firstName" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="lName">Last Name:</label><br/>
          <input 
                className='lName'
                id="lastName" 
                name="lastName" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="age">Age:</label><br/>
          <input 
                className='age'
                id="age" 
                name="age" 
                type= "number"
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="email">Email:</label><br/>
          <input 
                className='email'
                id="email" 
                name="email" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="city">City:</label><br/>
          <input 
                className='city'
                id="city" 
                name="city" 
                type= "text"
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="state">State:</label><br/>
          <input 
                className='state'
                id="state" 
                name="state" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="birthday">Date of Birth:</label><br/>
          <input 
                className='birthday'
                id="birthday" 
                name="birthday" 
                type="date" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="gender">Gender:</label><br/>
          <input 
                className='gender'
                id="gender" 
                name="gender" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="sexualOrientation">Sexual Orientation:</label><br/>
          <input 
                className='sexualOrientation'
                id="sexualOrientation" 
                name="sexualOrientation" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

<label for="hasPets">Has Pets:</label><br/>
          <input 
                className='hasPets'
                id="hasPets" 
                name="hasPets" 
                type="checkbox" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="hasOpenRooms">Has Open Rooms:</label><br/>
          <input 
                className='hasOpenRooms'
                id="hasOpenRooms" 
                name="hasOpenRooms" 
                type="checkbox" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="state">State:</label><br/>
          <input 
                className='state'
                id="state" 
                name="state" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="isSmoker">Is A Smoker:</label><br/>
          <input 
                className='isSmoker'
                id="isSmoker" 
                name="isSmoker" 
                type="text" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <label for="hasKids">Has Kids:</label><br/>
          <input 
                className='hasKids'
                id="hasKids" 
                name="hasKids" 
                type="checkbox" 
                onChange={ (event) => handleTextChange(event)}
                value={input}
                />

          <button type="submit">Submit</button>
          
        </form>


    </div>
  )
}

export default NewUserForm







