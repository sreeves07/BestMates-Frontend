import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import EditUser from "./Pages/Edit";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import New from './Pages/New';
import "./App.css";

function App() {
  return (
    <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/new" element={<New />} />
            <Route path="/users/:id/edit" element={<EditUser />} />
            <Route path="/users" element={<Index />} />
            <Route path="/users/:id" element={<Show />} />
            <Route path="/not-found" element={<FourOFour />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
