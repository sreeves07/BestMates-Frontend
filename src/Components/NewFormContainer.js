import React from 'react'
import NewForm from './NewForm'
import UserBioPic from './UserBioPic'
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

function NewFormContainer() {


//   <div class="row">
//   <div class="col-auto me-auto">.col-auto .me-auto</div>
//   <div class="col-auto">.col-auto</div>
// </div>
  
  return (
    <div className='newFormContainer'>

      <MDBCardHeader className=" newForm-hdg py-2">
        <MDBTypography tag="h5" className="mb-0"> Account Information
        </MDBTypography>
      </MDBCardHeader>
     <div className='newForm-componentsBox row'>
      <div className='userBioPic-component col-auto me-auto'> <UserBioPic/> </div> 
  
      <div className="newForm-component col-auto "> <NewForm/> </div> 
    </div>
      
    </div>
  )
}

export default NewFormContainer