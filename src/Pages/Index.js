import { useState, useEffect } from "react";
import axios from "axios";
import AllUsers from "../Components/AllUsers";
import UserPreferencesContainer from "./UserPreferencesContainer";
// import PreferenceIndexUpdated from "../Components/PreferenceIndexUpdated";
import Pagination from "../Components/Pagination";
import { useContextAuthProvider } from "../Firebase/context";

const API = process.env.REACT_APP_API_URL;

const Index = () => {
  const { user, prefs, setPrefs } = useContextAuthProvider();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  // const findUserWithPreferences = (answer, users) => {
  //   let filtered = null;
  //   return (filtered = users?.filter((U) => {
  //     // for (const ans in answer) {
  //     if (
  //       // U.has_pets === answer.pets_preference &&
  //       // U.has_open_rooms === answer.open_rooms_preference &&
  //       U.is_smoker === answer.smoker_preference
  //       // &&
  //       // U.has_kids === answer.kids_preference &&
  //       // U.is_disabled === answer.disability_preference &&
  //       // U.is_sharing_bills === answer.share_bills_preference &&
  //       // U.is_neat === answer.neat_preference &&
  //       // U.is_religious === answer.religious_preference &&
  //       // U.is_musician === answer.musician_preference &&
  //       // U.is_partyhost === answer.partyhost_preference &&
  //       // U.low_noise === answer.low_noise_preference &&
  //       // U.has_private_room === answer.private_room_preference &&
  //       // U.has_private_bathroom === answer.private_bathroom_preference &&
  //       // U.has_high_rise === answer.high_rise_preference &&
  //       // U.has_house === answer.house_preference &&
  //       // U.is_employed === answer.employed_preference
  //     ) {
  //       return U;
  //     }
  //     // }
  //   }));
  // };

  useEffect(() => {
    axios
      .get(`${API}/user`)
      .then((response) => {
        // console.log("user api response data=", response.data);
        setUsers(response.data);
      })
      .catch((c) => console.warn("catch", c));

    axios
      .get(`${API}/user/${user.uid}/answers`)
      .then((res) => {
        setPrefs({ ...res.data[0] });
      })
      .catch((err) => console.error(err));
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
        <UserPreferencesContainer users={users} />
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
