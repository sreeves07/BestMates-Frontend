import React from 'react'
import { useState } from "react";
import axios from "axios";
import "../newUserForm.css";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function NewUserAttributesForm() {
  let navigate = useNavigate();
  const [checked, setChecked] = useState(false)
  const [input, setInput] = useState("")
  const [image, setImage] = useState("")
  
  const [user, setUser] = useState({
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
const addNewUser = (user)
  axios
  .post(`${API}/users`, user)
  .then(
    () => {
      navigate(`/users`);
    },
    (error) => console.error(error)
  )
  .catch((c) => console.warn("catch", c));


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
      setUser({ ...user, [event.target.id]: event.target.value });
      console.log("newly added user", user)
    };
//     const handleImageChange = (event) => {
//       setImage({ ...image, [event.target.id]: event.target.value });
//       console.log("newly added user image", image)
//     };

    const handleCheckboxChange1 = () => {
      setUser({ ...user, Has_Pets: !user.Has_Pets });
    };
    const handleCheckboxChange2 = () => {
      setUser({ ...user, Has_Open_Rooms: !user.Has_Open_Rooms });
    };
    const handleCheckboxChange3 = () => {
      setUser({ ...user, Is_Smoker: !user.Is_Smoker });
    };
    const handleCheckboxChange4 = () => {
      setUser({ ...user, Has_Kids: !user.Has_Kids });
    };
    const handleCheckboxChange5 = () => {
      setUser({ ...user, Is_Disabled: !user.Is_Disabled });
    };
    const handleCheckboxChange6 = () => {
      setUser({ ...user, Is_Sharing_bills: !user.Is_Sharing_bills });
    };
    const handleCheckboxChange7 = () => {
      setUser({ ...user, Is_Neat: !user.Is_Neat });
    };
    const handleCheckboxChange8 = () => {
      setUser({ ...user, Is_Religious: !user.Is_Religious });
    };
    const handleCheckboxChange9 = () => {
      setUser({ ...user, Move_In_Date: !user.Is_Religious });
    };
    const handleCheckboxChange10 = () => {
      setUser({ ...user, Max_Rent: !user.Is_Religious });
    };
   
  
   function handleSubmit(event){
    event.preventDefault()
    addNewUser(user)
    //addUserImage(image)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
          <label for="firstName">First Name: </label>
          <input 
                className='firstName'
                id="First_Name" 
                name="firstName" 
                type="text" 
                onChange={handleTextChange}
                value={input}
                required
                /><br/><br/>

          <label for="lastName">Last Name: </label>
          <input 
                className='lastName'
                id="Last_Name" 
                name="lastName" 
                type="text" 
                onChange={handleTextChange}
                value={input}
                /><br/><br/>

          <label for="age">Age: </label>
          <input 
                className='age'
                id="Age" 
                name="age" 
                type= "number"
                onChange={handleTextChange}
                value={input}
                /><br/><br/>

          <label for="email">Email: </label>
          <input 
                className='email'
                id="Email" 
                name="email" 
                type="text" 
                onChange={handleTextChange}
                value={input}
                /><br/><br/>

          <label for="city">City: </label>
          <input 
                className='city'
                id="City" 
                name="city" 
                type= "text"
                onChange={handleTextChange}
                value={input}
                /><br/><br/>

          <label for="state">State: </label>
          <input 
                className='state'
                id="state" 
                name="state" 
                type="text" 
                onChange={handleTextChange}
                value={input}
                /><br/><br/>
              

          <label for="birthday">Date of Birth: </label>
          <input 
                className='birthday'
                id="Birthday" 
                name="birthday" 
                type="date" 
                onChange={handleTextChange}
                value={input}
                /><br/><br/>

          <label for="gender">Gender: </label>
          <input 
                className='gender'
                id="gender" 
                name="gender" 
                type="text" 
                onChange={handleTextChange}
                value={input}
                /><br/><br/>

          <label for="sexualOrientation">Sexual Orientation: </label>
          <input 
                className='sexualOrientation'
                id="sexualOrientation" 
                name="Sexual_Orientation" 
                type="text" 
                onChange={handleTextChange}
                value={input}
                /><br/><br/>

          {/* Checkboxes - Boolean Values */}

          <label for="hasPets">Has Pets: </label>
          <input 
                className='hasPets'
                id="Has_Pets" 
                name="hasPets" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange1(event)}
                checked={user.Has_Pets}
                /><br/><br/>

          <label for="hasOpenRooms">Has Open Rooms: </label>
          <input 
                className='hasOpenRooms'
                id="Has_Open_Rooms" 
                name="hasOpenRooms" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange2(event)}
                //value={input}
                checked={user.Has_Open_Rooms}
                /><br/><br/>



          <label for="isSmoker">Is A Smoker: </label>
          <input 
                className='isSmoker'
                id="is_Smoker" 
                name="isSmoker" 
                type="text" 
                onChange={ (event) => handleCheckboxChange3(event)}
                //value={input}
                checked={user.Is_Smoker}
                /><br/><br/>

          <label for="hasKids">Has Kids: </label>
          <input 
                className='hasKids'
                id="Has_Kids" 
                name="hasKids" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange4(event)}
                //value={input}
                checked={user.Has_Kids}
                /><br/><br/>

          <label for="disabled">Disabled: </label>
          <input 
                className='disabled'
                id="Is_Disabled" 
                name="disabled" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange5(event)}
                value={input}
                checked={user.Is_Disabled}
                /><br/><br/>


          <label for="isSharingBills">Agree to Share Bills: </label>
          <input 
                className='isSharingBills'
                id="Is_Sharing_bills" 
                name="isSharingBills" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange6(event)}
                value={input}
                /><br/><br/>


          <label for="isNeat">Prefer Neatness (Is very clean): </label>
          <input 
                className='isNeat'
                id="Is_Neat" 
                name="isNeat" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange7(event)}
                value={input}
                /><br/><br/>


          <label for="isReligious">Is Religious: </label>
          <input 
                className='isReligious'
                id="Is_Religious:" 
                name="isReligious" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange8(event)}
                value={input}
                /><br/><br/>

          <label for="moveInDate">Desired Move-in Date: </label>
          <input 
                className='moveInDate'
                id="Move_In_Date" 
                name="moveInDate" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange9(event)}
                value={input}
                /><br/><br/>

          <label for="maxRent">Maximum Rent: </label>
          <input 
                className='maxRent'
                id="Max_Rent" 
                name="maxRent" 
                type="checkbox" 
                onChange={ (event) => handleCheckboxChange10(event)}
                value={input}
                /><br/><br/>

          <label for="creditScore">Credit Score: </label>
          <input 
                className='creditScore'
                id="Credit_Score" 
                name="creditScore" 
                type="text" 
                onChange={handleTextChange}
            //     value={input}
                /><br/><br/>

          <label for="income">Income: </label>
          <input 
                className='income'
                id="Income" 
                name="income" 
                type="text" 
                onChange={handleTextChange}
            //     value={input}
                /><br/><br/>

          {/* <label htmlFor="profileImage">Image URL:</label>
          <input
              id="Profile_Image"
              type="text"
              pattern="http[s]*://.+"
            
              value={images.image}
              placeholder="http://"
              onChange={handleImageChange}
            /> */}
          <button type="submit">Submit</button>
          <Link to={`/`}>
            <button className="CancelNewUserButton">Cancel</button>
          </Link>
        </form>


    </div>
  )
}

export default NewUserAttributesForm







