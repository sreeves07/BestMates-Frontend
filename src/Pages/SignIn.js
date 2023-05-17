import SignInForm from "../Components/SignIn/SignInForm";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-page">
      <br></br>
      <h1 className="header">Sign In</h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
