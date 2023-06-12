import { useState } from "react";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
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
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between">
          <MDBTabsItem>
            <MDBTabsLink
              id="preferences-pill"
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}>
              Preferences
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              id="favorites-pill"
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}>
              Favorites
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          {justifyActive === "tab1" && <PreferenceIndexUpdated justifyActive={justifyActive} />}
          {justifyActive === "tab2" && (
            <Favorites justifyActive={justifyActive} />
          )}
        </MDBTabsContent>
      </MDBContainer>
    </div>
  );
};

export default UserPreferencesContainer;
