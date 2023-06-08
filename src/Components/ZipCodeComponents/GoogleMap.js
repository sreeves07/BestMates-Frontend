import React from 'react'
// Renders a Google Map iFrame that utilizes lattitude and longitude values, which are used to create a url that will enable the display of the Google map for that location
import React from "react";
import PropTypes from "prop-types";

const styles = {
    iframe: {
      width: "100%",
      border: "1px solid #ddd",
      marginTop: "20"
    }
  };

//  Concats the iframe src for the google map using latitude and longitude
//   
//   @param {String} lat
//   @param {String} lon
//   @return {String}


const CreateSrc = (lat, lon) => {
    let src =
      "https://maps.google.com/maps?q=" +
      lat +
      "," +
      lon +
      "&t=&z=13&ie=UTF8&iwloc=&output=embed";
    return src;
  };
  
  
    // @param {Object} props
  

function GoogleMap(props) {
let { classes, lat, lon, height } = props;

  return (
    <div>
        <iframe
            title="Google Map"
            className={classes.iframe}
            height={height}
            src={CreateSrc(lat, lon)}
        />

    </div>
  )
}

export default GoogleMap