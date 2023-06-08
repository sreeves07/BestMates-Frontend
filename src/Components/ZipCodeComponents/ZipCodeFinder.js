import React from "react";
import "./ZipCodeFinder.css";
import ZipSearchHandler from "./components/ZipSearchHandler";
import CityStateZip from "./components/CityStateZip";
import GoogleMap from "./components/GoogleMap";
import { 
  MDBCard, 
  MDBCardBody, 
  MDBTypography
 } from 'mdb-react-ui-kit';

function ZipCodeFinder() {



  return (
    <div>
            <ZipSearchHandler
      render={data => (
        <MDBCard>
          <MDBCardBody>
            <MDBTypography gutterBottom variant="h5" component="h2">
              Zippopotam.us API with Google Maps
            </MDBTypography>
            <CityStateZip data={data} />
            {data.city && <GoogleMap lat={data.lat} lon={data.lon} />}
          </MDBCardBody>
        </MDBCard>
      )}
    />
    </div>
  )
}

export default ZipCodeFinder