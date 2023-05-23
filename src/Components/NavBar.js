import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useContextAuthProvider } from "../Firebase/context";

import { FaBars, FaTimes, FaTelegramPlane, FaSignInAlt } from "react-icons/fa";
//REF: https://react-icons.github.io/react-icons/icons?name=fa

import "./NavBar.css";

import logo from "../Images/dark-logo.png";

function NavBar() {
  const navRef = useRef();
  const { user, setUser } = useContextAuthProvider();
  console.log(user);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      {user?.uid ? (
        <nav ref={navRef}>
          <Link to="/users">All Roommates</Link>
          <Link to="/favorites">BestMates</Link>
          <Link to="/chat">Chat</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
          <div className="navhomeHdgBox">
          <h1 className="header">Welcome to BestMates</h1>
        </div>
          <Link className="sign-nav-btn" onClick={() => setUser(null)} to="/">
            Sign Out
          </Link>
        </nav>
      ) : (
        <nav ref={navRef}>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
          <Link className="sign-nav-btn" to="/signin">
            Sign In
          </Link>
        </nav>
      )}

      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
