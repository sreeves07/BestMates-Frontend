import React from 'react'
import { MDBTypography, MDBCardHeader } from 'mdb-react-ui-kit'
import PreferenceIndexCreated from '../Components/PreferenceIndexCreated'
function Preferences() {
  return (

    <div><MDBCardHeader style={{marginLeft: "-8%"}}>
    <MDBTypography tag="h3" className="newform-header mb-0">Preferences
    </MDBTypography>
  </MDBCardHeader><PreferenceIndexCreated/></div>
  )
}

export default Preferences