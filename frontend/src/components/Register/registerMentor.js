import React, { Component } from 'react';
// import axios from 'axios';
import { registerMentor } from './registerLogin';
/** This component handles all the register Teacher handles information**/
export default class RegisterMentor extends Component {
  constructor () {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      contact: '',
      password: '',
      location: '',
      age: '',
      email: '',
      education: '',
      biography: '',
      fields: '',
      methodology: '',
      errors: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    if (!this.state.first_name ||
      !this.state.last_name ||
      !this.state.contact ||
      !this.state.password ||
      !this.state.location ||
      !this.state.age ||
      !this.state.email ||
      !this.state.education ||
      !this.state.biography ||
      !this.state.fields ||
      !this.state.methodology) {
      this.setState({ errors: "Please fill every field!" });
      return false;
    } else {
      return true;
    }
  }

  onSubmit (e) {
    e.preventDefault();

    const teacher = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      contact: this.state.contact,
      password: this.state.password,
      location: this.state.location,
      age: this.state.age,
      email: this.state.email,
      education: this.state.education,
      biography: this.state.biography,
      fields: this.state.fields,
      methodology: this.state.methodology
    };
    /** Validates that the student is not a copy */
    const isValid = this.validate();
    if(isValid) {
      registerMentor(teacher).then(res => {
        if (res !== 200) { this.setState({ errors: "Teacher already exists" }) }
        else {
          /**console.log('[Component] - Teacher created succesfully!');*/
          this.props.history.push('\loginMentor');
        }
      })
      .catch(e => {
        console.log('[Component] - An error has ocurred while creating a teacher...');
      });
  }
}

  render () {
    /** Returns the loaded component to visualize the student**/
    return (
      <div class="container pl-10 pr-10 mt-5">
                <h3><strong>Register as a teacher</strong></h3> <br/>
                <form noValidate onSubmit={this.onSubmit} className="" id="main-form">
                  {this.state.errors ? <div className="alert alert-danger" role="alert">{this.state.errors}</div>: null }
                    <div className="row d-flex justify-content-between ">
                        <div className="form-group col-6">
                            <label htmlFor="first_name" id="text">First Name</label>
                            <input type="text"
                            className="form-control"
                            name="first_name"
                            placeholder="Sandra"
                            value={this.state.first_name}
                            onChange={this.onChange}
                            id="fields"
                            />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="last_name" id="text">Last Name</label>
                            <input type="text"
                            className="form-control"
                            name="last_name"
                            placeholder="Jones"
                            value={this.state.last_name}
                            onChange={this.onChange}
                            id="fields"
                            />
                        </div>
                    </div> <br/>

                <div className="row d-flex justify-content-between ">
                    <div className="form-group col-6">
                        <label htmlFor="email" id="text">Email</label>
                        <input type="email"
                        className="form-control"
                        name="email"
                        placeholder="sandrajones@mail.com"
                        value={this.state.email}
                        onChange={this.onChange}
                        id="fields"
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="password" id="text">Password</label>
                        <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="**********"
                        value={this.state.password}
                        onChange={this.onChange}
                        id="fields"
                        />
                    </div>
                </div> <br/>
                <div className="row d-flex justify-content-between">
                    <div className="form-group col-6">
                        <label htmlFor="contact" id="text">Contact</label>
                        <input type="text"
                        className="form-control"
                        name="contact"
                        placeholder="+57 321 456 7890"
                        value={this.state.contact}
                        onChange={this.onChange}
                        id="fields"
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="education" id="text">Education</label>
                        <input type="text"
                        className="form-control"
                        name="education"
                        placeholder="Self taught"
                        value={this.state.education}
                        onChange={this.onChange}
                        id="fields"
                        />
                    </div>
                </div> <br/>

                <div className="row d-flex justify-content-between">
                    <div className="form-group col-6">
                        <label htmlFor="location" id="text">Location</label>
                        <input type="text"
                        className="form-control"
                        name="location"
                        placeholder="USA"
                        value={this.state.location}
                        onChange={this.onChange}
                        id="fields"
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="age" id="text">Age</label>
                        <input type="number"
                        className="form-control"
                        name="age"
                        placeholder="37"
                        value={this.state.age}
                        onChange={this.onChange}
                        id="fields"
                        />
                    </div>
                </div> <br/>
                <div className="row d-flex justify-content-between">
                    <div className='form-group col-6'>
                    <label htmlFor='methodology' id="text">Methodology</label>
                    <input
                      type='text'
                      className='form-control'
                      name='methodology'
                      placeholder='Expeditionary Learning'
                      value={this.state.methodology}
                      onChange={this.onChange}
                      id="fields"
                    />
                    </div>

                    <div className='form-group col-6'>
                    <label htmlFor='fields' id="text">Fields</label>
                    <input
                      type='text'
                      className='form-control'
                      name='fields'
                      placeholder='Marketing, Business analytics, Sales'
                      value={this.state.fields}
                      onChange={this.onChange}
                      id="fields"
                    />
                    </div>
                </div> <br/>

                <div className="row d-flex justify-content-between">
                    <div className='form-group col-12'>
                    <label htmlFor='biography' id="text">Biography</label>
                    <input
                      type='text'
                      className='form-control'
                      name='biography'
                      placeholder='Hi! My name is Sandra Jones, Ive got 10 years of experience working as Business analyst and marketer at top companies like Adidas and Fox. Although I got no diploma on teaching, All my knowledge has been self-taught and I aspire to teach s
                      you the best way to dive into business!'
                      value={this.state.biography}
                      onChange={this.onChange}
                      id="fields"
                    />
                    </div>
                </div>
                <br/>
                <div className="row col-12 d-flex justify-content-end">
                    <button type="submit" class="btn btn-1">
                        Cancel
                    </button>
                    <button type="submit" class="btn btn-2">
                        Register
                    </button>
                </div>
                    </form> <br/> <br/>
                </div>
    );
  }
}
