import { useState, useEffect } from "react";
import axios from "axios";
import AllUsers from "../Components/AllUsers";
import PreferenceIndex_Updated from "../Components/PreferenceIndex_Updated";
import Pagination from "../Components/Pagination";

const API = process.env.REACT_APP_API_URL;

const Index = () => {
  const [users, setUsers] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    axios
      .get(`${API}/user`)
      .then((response) => {
        // console.log("user api response data=", response.data);
        setUsers(response.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/user/:uid/answers`) // changed from :id
      .then((response) => {
        console.log(response.data);
        // console.log("user api response data=", response.data);
        setPreferences(response.data);
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
    <div className="Index">
      <h2>All Mates</h2>
      <AllUsers currentUsers={currentUsers} />
      <PreferenceIndex_Updated />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Index;
