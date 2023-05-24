import React from 'react'
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { useEffect, useState } from "react";


function TestLocationSelect() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
  
  return (
    <div>TestLocationSelect

<Select
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
      <Select
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
      <Select
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
    </div>
  )
}

export default TestLocationSelect