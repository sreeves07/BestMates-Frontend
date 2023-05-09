import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import EditUser from "./Pages/Edit";
import New from "./Pages/New";
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
            <Route path="/userIndex/new" element={<New />} />
            <Route path="/userIndex/:id/edit" element={<EditUser />} />
            <Route path="/userIndex" element={<Index />} />
            <Route path="/userIndex/:id" element={<Show />} />
            <Route path="/not-found" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
