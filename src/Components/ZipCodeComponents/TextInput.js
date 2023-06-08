import React from 'react'
//  Reusable label and input for the form
import React from "react";
//import PropTypes from "prop-types";  -need to install react-prop-types
import { 
    MDBInput, 
   } from 'mdb-react-ui-kit';

//  @param {Object} props


function TextInput(props) {
  let { id, label, value, disabled } = props;
  return (
    <div>
        <form fullWidth>
            <label 
                htmlFor={id}>{label}
            </label>
            <MDBInput 
                id={id} 
                type="text" 
                value={value} 
                disabled={disabled} 
            />
        </form>
    </div>
  )
};

TextInput.propTypes = {
    props: PropTypes.object
  };
  
  // text inputs are disabled by default
  TextInput.defaultProps = {
    disabled: true
  };

export default TextInput;