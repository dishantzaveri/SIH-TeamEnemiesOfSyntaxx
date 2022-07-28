import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterMentee from "./components/Register/registerMentee";
import RegisterMentor from "./components/Register/registerMentor";
import LoginMentee from "./components/Login/loginMentee";
import LoginMentor from "./components/Login/loginMentor";

function App() {
	return (
		<Router>
			<Route path="/registerMentee" component={RegisterMentee} />
			<Route path="/loginMentee" component={LoginMentee} />
			<Route path="/registerMentor" component={RegisterMentor} />
			<Route path="/loginMentor" component={LoginMentor} />
		</Router>
	);
}

export default App;
