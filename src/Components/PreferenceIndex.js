import React from 'react'

function PreferenceIndex() {
  return (
    <div>PreferenceIndex</div>
  )
}

export default PreferenceIndex


// import React from "react";
// import {Link} from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const API = process.env.REACT_APP_API_URL;

// const PreferenceIndex = ({user, answers}) => {

// const { id, first_name, last_name, age,email, city, state, birthday, gender, sexual_orientation, has_pets, has_open_rooms, is_smoker, has_kids, is_disabled,is_sharing_bills, is_neat, is_religious, move_in_date, max_rent,
//     credit_score, income} = user

// const { mate_id, gender_preference, pets_preference, sexual_orientation_preference, open_rooms_preference,
//     neat_preference, kids_preference, low_noise_preference,
//     smoker_preference, high_rise_preference,
//     house_preference, private_bathroom_preference, private_room_preference,
//     share_bills_preference, religious_preference, good_credit_preference,
//     high_income_preference } = answers;


// function checkPrefValue() {
     
// }



// const [preferences, setPreferences] = useState([])

// useEffect(() => {
//     axios
//       .get(`${API}/user/${id}/answers`)
//       .then((response) => {
//         console.log("user response data for answers (preferences)=", response.data);
//         setPreferences(response.data[0]);
//       })
//       .catch((c) => console.warn("catch", c));
//   }, [id]);


//   return (
//     <div>
//         <Link to= {`/users/${id}`}>
//             <div className="filterBox">
//                 <h4>`Hi ${first_name}</h4>
//                 <p> Here is a list of  saved your preferences`</p>
//                 <div className="userPrefList">



//                 </div>




//             </div>
        
        
        
//         </Link>



//     </div>
//   )
// }

// export default PreferenceIndex