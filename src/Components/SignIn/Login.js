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
      setError(Object.entries(error));
      console.error(error);
    }
  };

  const handleError = () => {
    if (error) {
      if (error[0][1] === "auth/user-not-found") {
        return <span className="error">* Email Not Found *</span>;
      } else if (error[0][1] === "auth/wrong-password") {
        return <span className="error">* Incorrect Password *</span>;
      } else if (error === true) {
        return <span className="error">* Unable to Sign In*</span>;
      }
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
          <MDBBtn
            style={{ display: "block" }}
            className="mb-4 w-100 sign-in-btn"
            type="submit">
            Sign in
          </MDBBtn>
        </div>
        {handleError()}
      </MDBTabsPane>
    </form>
  );
}
