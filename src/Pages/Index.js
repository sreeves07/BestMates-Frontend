import { useState, useEffect } from "react";
import axios from "axios";
import AllUsers from "../Components/AllUsers";
import UserPreferencesContainer from "./UserPreferencesContainer";
// import PreferenceIndexUpdated from "../Components/PreferenceIndexUpdated";
import Pagination from "../Components/Pagination";

const API = process.env.REACT_APP_API_URL;

const Index = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);
  const [answer, setAnswer] = useState({
    gender_preference: "",
    pets_preference: false,
    sexual_orientation_preference: "",
    open_rooms_preference: false,
    neat_preference: false,
    kids_preference: false,
    low_noise_preference: false,
    smoker_preference: false,
    high_rise_preference: false,
    house_preference: false,
    private_bathroom_preference: false,
    private_room_preference: false,
    share_bills_preference: false,
    religious_preference: false,
    good_credit_preference: false,
    high_income_preference: false,
    employed_preference: false, //need to be added to backend
    is_student_preference: false, //need to be added to backend
    //healthy_preference: true,        //need to be added to backend
    //allergies_preference: false,     //need to be added to backend
    disability_preference: false, //need to be added to backend
    //chronic_condition_preference: false,  //need to be added to backend
    //visiting_nurse_preference: false,     //need to be added to backend
    //home_assistance_preference: false,    //need to be added to backend
    musician_preference: false, //need to be added to backend
    partyhost_preference: false, //need to be added to backend
    //romantic_visits_preference: false,    //need to be added to backend
    //family_friend_visits_preference: false,     //need to be added to backend
    //night_life_preference: false,         //need to be added to backend
  });

  useEffect(() => {
    axios
      .get(`${API}/user`)
      .then((response) => {
        console.log("user api response data=", response.data);
        setUsers(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  //get current posts
  const indexOfLastPost = currentPage * usersPerPage;
  const indexOfFirstPost = indexOfLastPost - usersPerPage;
  let currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ padding: "50px", paddingBottom: "0px" }} className="Index">
      <div className="usersAndPreferencesContainer">
        <AllUsers currentUsers={currentUsers} />
        <UserPreferencesContainer answer={answer} setAnswer={setAnswer} />
        {/* <PreferenceIndexUpdated /> */}
      </div>

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Index;
