import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../Firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContextAuthProvider } from "../../Firebase/context";

import {
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBRow,
} from "mdb-react-ui-kit";

import axios from "axios";

import "./SignInForm.css";

const API = process.env.REACT_APP_API_URL;

export default function Register({ justifyActive }) {
  const [registerEmail, setRegisterEmail] = useState("cleo@pursuit.org");
  const [registerPassword, setRegisterPassword] = useState("dev123");
  const [confirmPassword, setConfirmPassword] = useState("dev123");
  const [successfulReg, setSucccessfulReg] = useState("");

  const navigate = useNavigate();

  const { setUser } = useContextAuthProvider();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (registerPassword === confirmPassword) {
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );

        setSucccessfulReg(true);

        try {
          await signInWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          setUser({ ...auth.currentUser });
          setRegisterEmail("");
          setRegisterPassword("");
          setConfirmPassword("");
        } catch (e) {
          console.error(e);
        }

        // console.log(auth.currentUser.uid)
        try {
          await axios.post(`${API}/user/register`, {
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
          });
        } catch (e) {
          console.error(e);
        }

        setTimeout(() => {
          navigate("/new");
        }, 2000);
      } else if (registerPassword !== confirmPassword) setSucccessfulReg(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <MDBTabsPane show={justifyActive === "tab2"}>
        {successfulReg ? (
          ""
        ) : (
          <>
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              type="email"
              id="register-email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
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
              wrapperClass="mb-0"
              label="Confirm Password"
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </>
        )}
        {successfulReg === "" ? (
          ""
        ) : !successfulReg ? (
          <p style={{ color: "red" }}>
            <em>*Retype Password</em>
          </p>
        ) : (
          <div>
            <h4 id="success-message" style={{ padding: "25px" }}>
              <strong>BestMates Account Created!</strong>
            </h4>
            <br></br>
          </div>
        )}
        {!successfulReg && (
          <div
            className="d-flex justify-content-center mb-0"
            id="terms-container">
            <MDBRow className="mb-0 col-10">
              <Link to={`/terms`} target="blank">
                <p className="termsLink">View Terms of Usage of BestMates</p>
              </Link>
            </MDBRow>

            {/* <div className="d-flex justify-content-center mb-4"     id="terms-container">
              <MDBCheckbox 
              className="mb-1 col-10"
              name="flexCheck"
              id="register-flexCheckDefault"
              label={`View Terms of Usage of BestMates`}
              value={confirmTerms}
              onChange={() => {
                setConfirmTerms(!confirmTerms)
                if (!confirmTerms) window.open("terms", "_blank" )
              }}
              required
              />
              </div> */}
            <MDBRow className="mb-3 col-10">
              <br />
              <MDBCheckbox
                name="flexCheck"
                id="register-flexCheckDefault2"
                label={`I have read and agree to the terms`}
                required
              />
            </MDBRow>
          </div>
        )}
        {!successfulReg && (
          <div className="sign-in-btn-container">
            <div></div>
            <MDBBtn className="mb-4 w-100 sign-in-btn">Sign up</MDBBtn>
            <div></div>
          </div>
        )}
      </MDBTabsPane>
    </form>
  );
}
