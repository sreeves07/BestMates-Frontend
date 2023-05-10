import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./src/Components/NavBar";
import Home from "./src/Pages/Home";
import EditUser from "./src/Pages/Edit";
import New from "./src/Pages/New";
import Show from "./src/Pages/Show";
import Index from "./src/Pages/Index";
import FourOFour from "./src/Pages/FourOFour";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/new" element={<New />} />
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
