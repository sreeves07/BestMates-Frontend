import React from 'react'
import EditUserForm from './EditUserForm'
import UserBioPic from './UserBioPic'
import "../Components/NewForm.css"

// imports for material design bootstrap
import { MDBCardHeader, MDBTypography } from 'mdb-react-ui-kit';

function EditUserFormContainer() {


// Displays 2 components -  1- The UserBio component - (contains Upload Widget and UserBio card) - Left Side
//and 2 - The EditUserForm component - Right Side
  
  return (
    <div className='editUserFormContainer'>

      <MDBCardHeader className=" editUserForm-hdg py-2">
        <MDBTypography tag="h5" className="mb-0"> Account Information
        </MDBTypography>
      </MDBCardHeader>


     <div className='editUserForm-componentsBox row'>


      {/* ********** UserBio Component ********** */}

      <div className='userBioPic-component col-auto me-auto'> <UserBioPic/> </div> 


      {/* ********** EdiUserForm Component ********** */}
  
      <div className="editUserForm-component col-auto "> <EditUserForm/> 
      </div> 
    </div>
      
    </div>
  )
}

export default EditUserFormContainer