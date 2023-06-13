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

  useEffect(() => {
    axios
      .get(`${API}/user`)
      .then((response) => {
        // console.log("user api response data=", response.data);
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
    <div style={{padding: "50px", paddingBottom: "0px"}} className="Index">
      <div className="usersAndPreferencesContainer">
        <AllUsers currentUsers={currentUsers} />
        <UserPreferencesContainer />
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
