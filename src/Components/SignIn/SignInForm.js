import { useState } from "react";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
} from "mdb-react-ui-kit";

import Login from "./Login";
import Register from "./Register";

import "./SignInForm.css";

const SignInForm = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <div className="sign-in-container">
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <br></br>
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between">
          <MDBTabsItem>
            <MDBTabsLink
              id="login-pill"
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}>
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              id="register-pill"
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}>
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          {justifyActive === "tab1" && <Login justifyActive={justifyActive} />}
          {justifyActive === "tab2" && (
            <Register justifyActive={justifyActive} />
          )}
        </MDBTabsContent>
      </MDBContainer>
    </div>
  );
};

export default SignInForm;
