import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSucccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSucccess(true)
      setEmail("")
      setPassword("")
      setTimeout(() => {
        navigate("/signin")
      }, 3000)
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    !success ? 
    <div>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Create Account</button>
      </form>
    </div>
    :
    <div><h3>Success! Account Created!</h3></div>
    
  );
};

export default SignUpForm;
