import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Components/NewForm.css"
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
import UploadWidget from "./UploadWidget";

const API = process.env.REACT_APP_API_URL;


function UserBio() {

    const [userBio, setUserBio] = useState({
    smallBio: "",
    })
    let navigate = useNavigate();

    const addUserBio = (bio) => {
        axios
          .put(`${API}/bio/`, userBio)
          .then(() => {
            navigate(`/users`);
          })
          .catch((c) => console.warn("catch", c));
      };

      const handleTextChange = (event) => {
        setUserBio({ ...userBio, [event.target.id]: event.target.value });
        addUserBio(userBio)
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