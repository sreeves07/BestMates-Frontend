import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContextAuthProvider } from "../Firebase/context";
import { useParams, Link, useNavigate } from "react-router-dom";
import UploadWidget from "./UploadWidget";
import "../Components/NewForm.css"

// imports for material design bootstrap
import { 
    MDBCard, 
    MDBCardBody, 
    MDBCardHeader, 
    MDBCol, 
    MDBBtn,
    MDBInput, 
    MDBRow,
    MDBTextArea,
    MDBTypography
   } from 'mdb-react-ui-kit';


const API = process.env.REACT_APP_API_URL;


const UserBio = ({ id }) => {

  // const [user, loading] = useAuthState(auth);
  const [userBio, setUserBio] = useState({
  id: "",  
  smallBio: "",
  mate_id: "",
  })
  
  const { user } = useContextAuthProvider();

  let navigate = useNavigate();

  const handleTextChange = (event) => {
    setUserBio({ ...userBio, [event.target.id]: event.target.value });
    addUserBio(userBio)
  };    
  const addUserBio = (userBio) => {
      console.log(userBio);
      axios
        .put(`${API}/user/${user.uid}/bio/`, userBio)
        .then(() => {
          navigate(`/users`);
        })
        .catch((c) => console.warn("catch", c))
      };


  return (
    <div>
            <MDBCard className="mb-4 userBio-card">
              <MDBCardHeader className="py-2">
                <MDBTypography tag="h5" className="mb-0">Your Bio Statement</MDBTypography>
              </MDBCardHeader>
                <MDBCardBody>
                    <MDBTextArea 
                            className="userBio mb-4"  
                            label='Your Bio Statement:'
                            defaultValue="< Please enter a brief description of yourself here >" 
                            rows={3} 
                            type='text' 
                            onChange={handleTextChange}
                            value={userBio.smallBio}
                            id="smallBio"
                            />
                    </MDBCardBody>
                    <div>
                    <MDBBtn 
                            className='userBio-submitBtn' 
                            type="submit" 
                            onClick={handleTextChange}
                            >Save</MDBBtn>
                    </div>
            </MDBCard>
            <MDBCard className="mb-4 userBio-card">
              <MDBCardHeader className="py-2">
                <MDBTypography tag="h5" className="mb-0">Your Profile Image</MDBTypography>
              </MDBCardHeader>
                <MDBCardBody className="uploadWidget-card">
                 <UploadWidget/>
                </MDBCardBody>
            </MDBCard>
    </div>
  )
}


export default UserBio


// Backend Route Notes
// user.use('/:mateId/answers', answersController);
// user.use('/:mateId/images', imageController);
// user.use('/:mateId/bios', bioController);