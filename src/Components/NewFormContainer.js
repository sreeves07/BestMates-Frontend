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
    <div className='newFormContainer'>

      <MDBCardHeader className=" newForm-hdg py-2">
        <MDBTypography tag="h5" className="newform-header mb-0"> Account Information
        </MDBTypography>
      </MDBCardHeader>


     <div className='newForm-componentsBox row'>


      {/* ********** UserBio Component ********** */}

      <div className='userBioPic-component col-auto me-auto'> <UserBioPic/> </div> 


      {/* ********** New Form Component ********** */}
  
      <div className="newForm-component col-auto "> <NewForm/> 
      </div> 
    </div>
      
    </div>
  )
}

export default NewFormContainer