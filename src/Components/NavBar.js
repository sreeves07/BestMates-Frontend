import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

import { useContextAuthProvider } from "../Firebase/context";
import { auth } from "../Firebase/config";

import { FaBars, FaTimes } from "react-icons/fa";
//REF: https://react-icons.github.io/react-icons/icons?name=fa

import "./NavBar.css";

import logo from "../Images/dark-logo.png";

function NavBar() {
  const navRef = useRef();

  const [loggedUser] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const { user, setUser } = useContextAuthProvider();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    (async () => {
      const signedIn = await loggedUser;
      if (signedIn) {
        setUser(signedIn);
        window.localStorage.setItem(
          "logged_user_access_token",
          signedIn?.accessToken
        );
        return;
      }
    })();
  });

  return (
    <header>
      {user ? (
        <>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <nav ref={navRef}>
            {/* <button className=" nav-btn nav-spacer">spacer</button> */}
            {/* <button>placeholder2</button> */}
            <Link to="/users">All Roommates</Link>
            <Link to={`favorites/${user.uid}`}>Favorites</Link>
            <Link to="/chat">Chat</Link>
            {/* <Link to={`users/${user.uid}/edit`}>Account Settings</Link> */}
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
          <Link
            className="sign-nav-btn"
            onClick={async () => {
              const success = await signOut();
              if (success) {
                setUser(null);
                window.localStorage.setItem("logged_user_access_token", null);
                alert("You have been signed out. Come back soon!");
              }
            }}
            to="/">
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <Link to="/signin">
            <button className="sign-nav-btn">Sign In</button>
          </Link>
        </>
      )}
    </header>
  );
}

export default NavBar;
