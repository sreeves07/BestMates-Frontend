import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../Firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContextAuthProvider } from "../../Firebase/context";

import { MDBTabsPane, MDBBtn, MDBInput } from "mdb-react-ui-kit";

import "./SignInForm.css";

export default function Login({ justifyActive }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContextAuthProvider();

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser({ ...auth.currentUser });
      setEmail("");
      setPassword("");
      navigate("/users");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <MDBTabsPane show={justifyActive === "tab1"}>
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
    </form>
  );
}
