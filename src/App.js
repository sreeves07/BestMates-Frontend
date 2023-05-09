import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Best Mates App</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/new" element={<New />} />
          <Route path="/user/:id/edit" element={<Edit />} />
          <Route path="/user" element={<Index />} />
          <Route path="/user/:id" element={<Show />} />
          <Route path="/not-found" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
