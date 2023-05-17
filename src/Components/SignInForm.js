import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { AuthContext } from "../Firebase/context";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import "./SignInForm.css";

const SignInForm = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successfulReg, setSucccessfulReg] = useState("");

  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser);
      setEmail("");
      setPassword("");
      navigate("/users");
    } catch (error) {
      setError(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (registerPassword === confirmPassword) {
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        handleSignIn(e);
        setRegisterEmail("");
        setRegisterPassword("");
        setConfirmPassword("");
        setSucccessfulReg(true);
        setTimeout(() => {
          navigate("/users");
        }, 3000);
      } else if (password != confirmPassword) setSucccessfulReg(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = (e) => {
    if (justifyActive === "tab1") {
      handleSignIn(e);
    } else if (justifyActive === "tab2") {
      handleRegister(e);
    }
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
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
            {justifyActive === "tab1" && (
              <MDBTabsPane show={justifyActive === "tab1"}>
                {/* <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}>
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}>
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}>
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}>
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div> */}

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="sign-in-flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div> */}

                <div className="sign-in-btn-container">
                  <div></div>
                  <MDBBtn className="mb-4 w-100 sign-in-btn" type="submit">
                    Sign in
                  </MDBBtn>
                  <div></div>
                </div>
                {error && (
                  <p style={{ color: "red" }}>
                    <em>*Incorrect Credentials</em>
                  </p>
                )}
              </MDBTabsPane>
            )}
            {justifyActive === "tab2" && (
              <MDBTabsPane show={justifyActive === "tab2"}>
                {/* <div className="text-center mb-3">
                <p>Sign un with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}>
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}>
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}>
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}>
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}>
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div> */}

                {/* <MDBInput
                wrapperClass="mb-4"
                label="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /> */}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  id="register-email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="register-password"
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {successfulReg === "" ? (
                  ""
                ) : !successfulReg ? (
                  <p style={{ color: "red" }}>
                    <em>*Retype Password</em>
                  </p>
                ) : (
                  <p style={{ color: "red" }}>
                    <strong>Account Created</strong>
                  </p>
                )}
                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    id="register-flexCheckDefault"
                    label="I have read and agree to the terms"
                    required
                  />
                </div>

                <div className="sign-in-btn-container">
                  <div></div>
                  <MDBBtn className="mb-4 w-100 sign-in-btn">Sign up</MDBBtn>
                  <div></div>
                </div>
              </MDBTabsPane>
            )}
          </MDBTabsContent>
        </MDBContainer>
      </form>
    </div>
  );
};

export default SignInForm;
