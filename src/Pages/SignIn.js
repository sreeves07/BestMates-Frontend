import SignInForm from "../Components/SignIn/SignInForm";
import { MDBCardHeader, MDBTypography } from 'mdb-react-ui-kit';
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-page">
      <SignInForm />
    </div>
  );
};

export default SignIn;
