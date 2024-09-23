import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import UserTable from "./components/UserTable";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/users" element = {<UserTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
