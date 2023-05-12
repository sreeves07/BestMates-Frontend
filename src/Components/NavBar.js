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
        Users
      </Link>

      <Link to="/users/new" id="new">
        Sign_Up
      </Link>
    </nav>
  );
};

export default NavBar;
