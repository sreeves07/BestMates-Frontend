import React from 'react'
import { Component } from "react";
import ZipApi from "../ZipApi";

function ZipSearchHandler() {

// state props need to be added here
const defaultState = { zip: "", city: "", state: "", notFound: false };
let state = defaultState;

handleChange = e => {
  let val = e.target.value;
  // cleared the input so reset
  if (val.length === 0) return this.setState(defaultState);

  // only allowing 5 characters to update the zip
  if (val.length <= 5) return this.setState({ notFound: false, zip: val });
};

  /**
   * Called from rendered props to make an api call
   */
  handleSearch = async () => {
    let res = await ZipApi.search(this.state.zip);
    if (res && Array.isArray(res.places)) {
      let place = res.places[0];
      this.setState({
        notFound: false,
        city: place["place name"],
        state: place["state"],
        lat: place.latitude,
        lon: place.longitude
      });
    } else {
      defaultState.notFound = true;
      this.setState(defaultState);
    }
  };



  return (
    <div>ZipSearchHandler</div>
  )
}

export default ZipSearchHandler


//Original Example

// render() {
//   // assign the data and functions to a single object
//   let data = {
//     handleChange: this.handleChange,
//     handleSearch: this.handleSearch
//   };
//   return this.props.render(Object.assign(data, this.state));
// }
// }
