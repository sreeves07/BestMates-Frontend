import { useState } from "react";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import PreferenceIndexUpdated from "../Components/PreferenceIndexUpdated";
import Favorites from "../Components/Favorites";

import "../Components/SignIn/SignInForm.css";

const UserPreferencesContainer = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <div className="user-preferences-container">
      <MDBContainer className="d-flex flex-column w-50">
        

        <MDBTabsContent>
          {justifyActive === "tab1" && <PreferenceIndexUpdated justifyActive={justifyActive} />}
          {justifyActive === "tab2" && (
            <PreferenceIndexUpdated justifyActive={justifyActive} />
          )}
        </MDBTabsContent>
        <br></br>
      </MDBContainer>
    </div>
  );
};

export default UserPreferencesContainer;
