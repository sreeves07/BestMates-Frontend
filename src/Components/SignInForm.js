import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../Firebase/config";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../Firebase/context';

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const {user, setUser} = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser.uid)
      navigate("/users")
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignInForm;
