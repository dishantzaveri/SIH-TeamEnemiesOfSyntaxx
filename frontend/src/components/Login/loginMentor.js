import React, { Component } from "react";
import { loginMentor } from "../Register/registerLogin";
import { HashLink as Link_red } from "react-router-hash-link";

export default class LoginMentor extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: "",
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	validate = () => {
		if (!this.state.password || !this.state.email) {
			this.setState({ errors: "Please fill every field!" });
			return false;
		} else {
			return true;
		}
	};
	/** Prevents the creation of two instances where the login information is stored, making
	 * react state the true one. */
	onSubmit(e) {
		e.preventDefault();

		const teacher = {
			email: this.state.email,
			password: this.state.password,
		};
		/**  Validates the user in the database.**/
		const isValid = this.validate();
		if (isValid) {
			loginMentor(teacher)
				.then((res) => {
					if (res !== 200) {
						this.setState({ errors: "Incorrect email or password" });
					} else {
						this.props.history.push("lobby");
					}
				})
				.catch((e) => {
					/*console.log('[Component] - An error has ocurred while logging in a teacher...');*/
				});
		}
	}

	render() {
		/** Returns the loaded Component of a logged-in User.**/
		return (
			<div class="container pl-10 pr-10 mt-5 d-flex flex-column align-items-center justify-content-start">
				<h1>
					<strong>Log In</strong>
				</h1>
				<br />
				<form
					noValidate
					onSubmit={this.onSubmit}
					class="form-control h-100"
					id="form"
				>
					{this.state.errors ? (
						<div className="alert alert-danger" role="alert">
							{this.state.errors}
						</div>
					) : null}
					<div class="form-group">
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="yourmail@mail.com"
							value={this.state.email}
							onChange={this.onChange}
							id="in"
						/>
					</div>
					<div class="form-group">
						<input
							type="password"
							className="form-control"
							name="password"
							placeholder="**********"
							value={this.state.password}
							onChange={this.onChange}
							id="in"
						/>
					</div>
					<small class="form-text" id="form-text">
						<strong>Forgot your password?</strong>
					</small>{" "}
					<br />
					<button type="submit" class="btn btn-primary btn-block" id="btn-in">
						Login
					</button>{" "}
					<br />
					<div class="form-check">
						<input type="checkbox" class="form-check-input" id="check1" />
						<label class="form-check-label" for="check1" id="form-text">
							Keep me signed in
						</label>
					</div>
				</form>{" "}
				<br />
				<p class="justify-self-end">
					Not a member?{" "}
					<Link_red to="/#sect2">
						<a href="index.html#sect2">
							<b>Get started</b>
						</a>
					</Link_red>
				</p>
			</div>
		);
	}
}
