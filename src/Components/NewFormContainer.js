import React from 'react'
import NewForm from './NewForm'
import UserBioPic from './UserBioPic'
import "../Components/NewForm.css"

// imports for material design bootstrap
import { MDBCardHeader, MDBTypography } from 'mdb-react-ui-kit';

function NewFormContainer() {


// Displays 2 components -  1- The UserBio component - (contains Upload Widget and UserBio card) - Left Side
//and 2 - The NewForm component - Right Side
  
  return (
    <>
      <MDBCardHeader className=" newForm-hdg py2">
        <MDBTypography tag="h3" className="newform-header mb-0">New Account Form
        </MDBTypography>
      </MDBCardHeader>
    <div className='newFormContainer'>

      {/* ********** UserBio Component ********** */}

  <UserBioPic/> 


      {/* ********** New Form Component ********** */}
  
      <NewForm/> 
      
   
      
    </div>
    </>
  )
}

export default NewFormContainer