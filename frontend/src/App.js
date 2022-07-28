import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterMentee from "./components/Register/registerMentee";
import RegisterMentor from "./components/Register/registerMentor";
import LoginMentee from "./components/Login/loginMentee";
import LoginMentor from "./components/Login/loginMentor";
import Account from "./pages/Account";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginMentee" element={<LoginMentee />} />
        <Route path="/registerMentor" element={<RegisterMentor />} />
        <Route path="/loginMentor" element={<LoginMentor />} />
        <Route path="/myprofile" element={<Account />} />
        <Route path="/registerMentee" element={<RegisterMentee />} />
      </Routes>
    </Router>
  );
}

export default App;
