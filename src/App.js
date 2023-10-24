import React from "react";

// Css
import "./App.css";

// Components
import Home from "./components/Home";
import Contact from "./components/Contact";
import Track from "./components/Track";
import Donate from "./components/Donate";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonationTable from "./components/DonationTable";

//HOUSTON WE GOT A PROBLEM

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Table" element={<DonationTable />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
