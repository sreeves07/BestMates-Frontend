import { useState } from "react";
import axios from "axios";
import { useContextAuthProvider } from "../Firebase/context";
import UploadWidget from "./UploadWidget";
import "../Components/NewForm.css";
import "../Images/unisex-profile-pic.png";

// imports for material design bootstrap
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBBtn,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

const API = process.env.REACT_APP_API_URL;

const UserBioPic = () => {
  // const [user, loading] = useAuthState(auth);
  const { user } = useContextAuthProvider();
  const { uid } = user;
  // console.log(user);

  const [userBio, setUserBio] = useState("I am Queen of the Nile!");
  let [bioSubmitted, setBioSubmitted] = useState(false);

  const handleTextChange = (e) => {
    setUserBio(e.target.value);
  };

  const addUserBio = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/user/${uid}/bios`, {
        mate_uid: `${uid}`,
        small_bio: `${userBio}`,
      })
      .then(() => {
        setBioSubmitted(true);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="user-bio-pic-container">
      <MDBCard className="mb-4 userBio-card userBio-card-img">
        <MDBCardHeader className="py-2">
          <MDBTypography tag="h5" className="mb-0">
            <strong>Profile Image</strong>
          </MDBTypography>
        </MDBCardHeader>
        {/* <MDBCardImage
    src="unisex-profile-pic"/>  */}
        <MDBCardBody className="uploadWidget-card">
          <UploadWidget />
        </MDBCardBody>
      </MDBCard>

      <form onSubmit={(e) => addUserBio(e)}>
        <MDBCard className="mb-4 userBio-card">
          <MDBCardHeader className="py-2">
            <MDBTypography tag="h5" className="mb-0">
              <strong>Bio Statement</strong>
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            {!bioSubmitted ? (
              <>
                <MDBTextArea
                  id="small_bio"
                  className="userBio mb-4 background-light-purple"
                  label="Who are you..."
                  rows={3}
                  type="text"
                  onChange={handleTextChange}
                  value={userBio}
                  required
                />

                <MDBRow className=" bioBottomRow ">
                  <MDBBtn
                    style={{ width: "50%" }}
                    className="btn-secondary sign-in-btn"
                    type="submit">
                    Save Bio
                  </MDBBtn>
                </MDBRow>
              </>
            ) : (
              <p>
                <br></br>"{userBio}"
              </p>
            )}
          </MDBCardBody>
        </MDBCard>
      </form>
    </div>
  );
};

export default UserBioPic;

// Backend Route Notes
// user.use('/:mateId/answers', answersController);
// user.use('/:mateId/images', imageController);
// user.use('/:mateId/bios', bioController);
