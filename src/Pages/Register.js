import SignInForm from "../Components/SignIn/Register.js";
import { MDBCardHeader, MDBTypography } from 'mdb-react-ui-kit';
import "./SignIn.css";

const Register = () => {
  return (
    <div className="sign-in-page">
      <MDBCardHeader className=" newForm-hdg py-2">
        <MDBTypography tag="h3" className="newform-header mb-0">Sign In
        </MDBTypography>
      </MDBCardHeader>
      <SignInForm />
    </div>
  );
};

export default Register;
