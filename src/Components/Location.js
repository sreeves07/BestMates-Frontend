import React from 'react'
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow,MDBRadio, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';

function Location() {
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
  
  return (
    <div>
      <MDBTypography tag="h6" className="mb-3 location-select" >Select location or enter a zip code to search for a roommate</MDBTypography>
        <MDBRow>
          <MDBCol>
            <Select
              className='country-selector'
              options={Country.getAllCountries()}
              getOptionLabel={(options) => {
                return options["name"];
              }}
              getOptionValue={(options) => {
                return options["name"];
              }}
              value={selectedCountry}
              onChange={(item) => {
                setSelectedCountry(item);
              }}
            />
          </MDBCol>
          <MDBCol>
            <Select
              className='state-selector'
              options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
              getOptionLabel={(options) => {
                return options["name"];
              }}
              getOptionValue={(options) => {
                return options["name"];
              }}
              value={selectedState}
              onChange={(item) => {
                setSelectedState(item);
              }}
            />
         </MDBCol>
         <MDBCol>
          <Select
            className='city-selector'
            options={City.getCitiesOfState(
              selectedState?.countryCode,
              selectedState?.isoCode
            )}
            getOptionLabel={(options) => {
              return options["name"];
            }}
            getOptionValue={(options) => {
              return options["name"];
            }}
            value={selectedCity}
            onChange={(item) => {
              setSelectedCity(item);
            }}
          />
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default Location