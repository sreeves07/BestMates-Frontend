MATE TABLE

    id SERIAL PRIMARY KEY,
    First_Name VARCHAR(40),
    Last_Name VARCHAR(40),
    Password VARCHAR(40),
    Age INT,
    Email VARCHAR(60), 
    City VARCHAR(40),
    State VARCHAR(40),
    Birthday DATE,
    Gender VARCHAR(20),
    Sexual_Orientation VARCHAR(50),
    Has_Pets BOOLEAN, 
    Has_Open_Rooms BOOLEAN,
    Is_Smoker BOOLEAN,
    Has_Kids BOOLEAN,
    Is_Disabled BOOLEAN,
    Is_Sharing_bills BOOLEAN,
    Is_Neat BOOLEAN,
    Is_Religious BOOLEAN,
    Move_In_Date DATE,
    Max_Rent INT,
    Credit_Score INT,
    Income INT;


ANSWERS TABLE

CREATE TABLE answers ( 
    id SERIAL PRIMARY KEY,
    Pets_Preference BOOLEAN,
    Sexual_Orientation_Preference TEXT,
    Open_Rooms_Preference BOOLEAN,
    Neat_Preference BOOLEAN,
    Kids_Preference BOOLEAN,
    Low_Noise_Preference BOOLEAN,
    Smoker_Preference BOOLEAN,
    High_Rise_Preference BOOLEAN,
    House_Preference BOOLEAN,
    Private_Bathroom_Preference BOOLEAN,
    Private_Room_Preference BOOLEAN,
    Share_Bills_Preference BOOLEAN,
    Religious_Preference BOOLEAN,
    Good_Credit_Preference BOOLEAN,
    High_Income_Preference BOOLEAN,
    mate_id INTEGER REFERENCES mate (id)
    ON DELETE CASCADE
);


 import React from 'react'
import { useState } from "react";
import "../newUserForm.css";

function NewUserForm() {

  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState("")

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
      
        <label for="fName">First Name:</label>
        <input 
              className='fName'
              id="firstName" 
              name="firstName" 
              type="text" 
              onChange={ (event) => handleTextChange(event)}
              value={input}
              />
        <label for="fName">Last Name:</label>
        <input 
              className='lName'
              id="lastName" 
              name="lastName" 
              type="text" 
              onChange={ (event) => handleTextChange(event)}
              value={input}
              />
      
      <h3>Preferences</h3>
 
        <input type="checkbox" id="has_room" name="has_room" value="HTML">
         <label for="has_room">Has_Room</label><br>
        <button type="submit">Submit</button>
   </form>
    </div>
  )
}

export default NewUserForm


  {/* <input type="submit" value="Submit"></input> */}





    

    
IMAGE TABLE
--     id SERIAL FOREIGN KEY,
--     Photo_Id SERIAL PRIMARY KEY,
--     Profile_Image TEXT

