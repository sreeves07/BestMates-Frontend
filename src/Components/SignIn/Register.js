import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../Firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContextAuthProvider } from "../../Firebase/context";

import { MDBTabsPane, MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

import axios from "axios";

import "./SignInForm.css";

const API = process.env.REACT_APP_API_URL;

export default function Register({ justifyActive }) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

        await signInWithEmailAndPassword(auth, registerEmail, registerPassword);
        setUser({ ...auth.currentUser });
        setRegisterEmail("");
        setRegisterPassword("");
        setConfirmPassword("");

        await axios.post(`${API}/user`, {
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
        });

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
          <p id="success-message">
            <strong>BestMates Account Created!</strong>
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
    </form>
  );
}
