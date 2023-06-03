import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useContextAuthProvider } from "../Firebase/context";
import UploadWidget from "./UploadWidget";
import "../Components/NewForm.css"
import "../Images/unisex-profile-pic.png"

// imports for material design bootstrap
import { 
    MDBCard, 
    MDBCardBody, 
    MDBCardHeader,
    MDBBtn, 
    MDBRow,
    MDBTextArea,
    MDBTypography
   } from 'mdb-react-ui-kit';


const API = process.env.REACT_APP_API_URL;


const UserBioPic = ({ id }) => {

  // const [user, loading] = useAuthState(auth);
  const { user } = useContextAuthProvider();
  const [userBio, setUserBio] = useState({
  small_bio: "",
  mate_id: user.uid,
  })

  const handleTextChange = (event) => {
    setUserBio({ ...userBio, [event.target.id]: event.target.value });
  };    

  const addUserBio = () => {

      axios
        .patch(`${API}/user/${user.uid}`, {
          small_bio: userBio["small_bio"]
        })
        .then((res) => console.log(res.data))
        .catch((c) => console.warn("catch", c))
      };

  return (
    <div className='user-bio-pic-container'>
            
  <MDBCard className="mb-4 userBio-card">
    <MDBCardHeader className="py-2">
      <MDBTypography tag="h5" className="mb-0"><strong>Profile Image</strong></MDBTypography>
    </MDBCardHeader>
      {/* <MDBCardImage
    src="unisex-profile-pic"/>  */}
    <MDBCardBody className="uploadWidget-card">
      <div id="temp-profile-image"></div>
      <UploadWidget/>
    </MDBCardBody>
  </MDBCard>
  
  <MDBCard className="mb-4 userBio-card">
    <MDBCardHeader className="py-2">
      <MDBTypography tag="h5" className="mb-0"><strong>Bio Statement</strong></MDBTypography>
    </MDBCardHeader>
      <MDBCardBody>
        <MDBTextArea
          id="small_bio" 
          className="userBio mb-4 background-light-purple"  
          label='Who are you...'
          rows={3} 
          type='text' 
          onChange={handleTextChange}
          value={userBio.small_bio}
          />
       
  <MDBRow className=" bioBottomRow ">
    <MDBBtn 
      style={{width: "50%"}}
      className='btn-secondary sign-in-btn'
      onClick={addUserBio}
      >Save Bio</MDBBtn>
  </MDBRow>
 </MDBCardBody>
</MDBCard>
 
    </div>
  )
}


export default UserBioPic


// Backend Route Notes
// user.use('/:mateId/answers', answersController);
// user.use('/:mateId/images', imageController);
// user.use('/:mateId/bios', bioController);