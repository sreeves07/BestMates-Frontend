import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import EditUser from "./Pages/Edit";
import Sign_Up from "./Pages/Sign_Up";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/new" element={<Sign_Up />} />
            <Route path="/users/:id/edit" element={<EditUser />} />
            <Route path="/users" element={<Index />} />
            <Route path="/users/:id" element={<Show />} />
            <Route path="/not-found" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
