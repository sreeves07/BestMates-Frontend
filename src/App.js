import { Routes, Route } from "react-router-dom";
import { useContextAuthProvider } from "./Firebase/context";
import NavBar from "./Components/NavBar";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Terms from "./Pages/Terms";
import New from "./Pages/New";
import EditUserForm from "./Pages/Edit";
import Preferences from "./Pages/Preferences";
import FourOFour from "./Pages/FourOFour";
import Dummy from "./Pages/Dummy";

import "./App.css";

function App() {
  const { user } = useContextAuthProvider();

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/new" element={<New />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route path="/users/:uid/edit" element={<EditUserForm />} />
              <Route path="/users" element={<Index />} />
              <Route path="/users/:uid" element={<Show />} />
              <Route path="/dummy" element={<Dummy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<p>Error</p>} />

            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="*" element={<p>Error</p>} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
