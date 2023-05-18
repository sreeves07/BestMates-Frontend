import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import { useEffect } from "react";
import Home from "./Pages/Home";
import EditUserForm from "./Pages/Edit";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour";
import SignIn from "./Pages/SignIn";
import New from "./Pages/New";
import "./App.css";
import { useContextAuthProvider } from "./Firebase/context";

function App() {
  const { user, setUser } = useContextAuthProvider();

  const keepUserLoggedIn = ({ uid }) => {
    // store the user in localStorage
    window.localStorage.setItem("user:", JSON.stringify(uid));
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(window.localStorage.getItem("user:"));

    if (user?.uid) {
      keepUserLoggedIn(user);
      console.log(JSON.parse(window.localStorage.getItem(user)));
    } else if (loggedInUser?.uid) {
      setUser(loggedInUser);
    }
  }, [user]);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/new" element={<New />} />
          <Route path="/users/:id/edit" element={<EditUserForm />} />
          <Route path="/users" element={<Index />} />
          <Route path="/users/:id" element={<Show />} />
          <Route path="/not-found" element={<FourOFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
