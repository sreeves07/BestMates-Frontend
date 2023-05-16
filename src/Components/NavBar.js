import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>BestMates</h1>

      <Link to="/" id="home">
        Home
      </Link>

      <Link to="/users" id="users">
        All Roomates
      </Link>

      <Link to="/signin">
        Login
      </Link>

      <Link to="/signup">
        Sign Up
      </Link>

      <Link to="/new">
        New Attributes
      </Link>
      <Link to="/users/:id/edit">
        Edit Settings
      </Link>
    </nav>
  );
};

export default NavBar;
