import React, { Component } from 'react';
// import axios from 'axios';
import { registerMentee } from './registerLogin';
/** This component handles all the register student handles information**/
export default class RegisterMentee extends Component {
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
      !this.state.education) {
      this.setState({ errors: "Please fill every field!" });
      return false;
    } else {
      return true;
    }
  }

  onSubmit (e) {
    e.preventDefault();

    const student = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      contact: this.state.contact,
      password: this.state.password,
      location: this.state.location,
      age: this.state.age,
      email: this.state.email,
      education: this.state.education
    };
/** Validates that the student is not a copy */
    const isValid = this.validate();
    if (isValid) {
      registerMentee(student).then(res => {
        if (res !== 200) { this.setState({ errors: "Student already exists" }) }
        else {
          /*console.log('[Component] - Student created succesfully!');*/
          this.props.history.push('\loginMentee');
        }
      })
      .catch(e => {
        /*console.log('[Component] - An error has ocurred while creating a student...');*/
      });
  }
}

  render () {
    /** Returns the loaded component to visualize the student**/
    return (
      <div class='container pl-10 pr-10 mt-5'>
        <h3><strong>Register as a Student</strong></h3> <br />
        <form noValidate onSubmit={this.onSubmit} className='' id='main-form'>
          {this.state.errors ? <div className="alert alert-danger" role="alert">{this.state.errors}</div>: null }
          <div className='row d-flex justify-content-between '>
            <div className='form-group col-6'>
              <label htmlFor='first_name' id='text'>First Name</label>
              <input
                type='text'
                className='form-control'
                name='first_name'
                placeholder='John'
                value={this.state.first_name}
                onChange={this.onChange}
                id='fields'
              />
            </div>
            <div className='form-group col-6'>
              <label htmlFor='last_name' id='text'>Last Name</label>
              <input
                type='text'
                className='form-control'
                name='last_name'
                placeholder='Doe'
                value={this.state.last_name}
                onChange={this.onChange}
                id='fields'
              />
            </div>
          </div> <br />

          <div className='row d-flex justify-content-between '>
            <div className='form-group col-6'>
              <label htmlFor='email' id='text'>Email</label>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='johndoe@mail.com'
                value={this.state.email}
                onChange={this.onChange}
                id='fields'
              />
            </div>

            <div className='form-group col-6'>
              <label htmlFor='password' id='text'>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='**********'
                value={this.state.password}
                onChange={this.onChange}
                id='fields'
              />
            </div>
          </div> <br />
          <div className='row d-flex justify-content-between'>
            <div className='form-group col-6'>
              <label htmlFor='contact' id='text'>Contact</label>
              <input
                type='text'
                className='form-control'
                name='contact'
                placeholder='+57 314 245 7896'
                value={this.state.contact}
                onChange={this.onChange}
                id='fields'
              />
            </div>

            <div className='form-group col-6'>
              <label htmlFor='education' id='text'>Education</label>
              <input
                type='text'
                className='form-control'
                name='education'
                placeholder='Frontier High School'
                value={this.state.education}
                onChange={this.onChange}
                id='fields'
              />
            </div>
          </div>

          <div className='row d-flex justify-content-between'>
            <div className='form-group col-6'>
              <label htmlFor='location' id='text'>Location</label>
              <input
                type='text'
                className='form-control'
                name='location'
                placeholder='USA'
                value={this.state.location}
                onChange={this.onChange}
                id='fields'
              />
            </div>

            <div className='form-group col-6'>
              <label htmlFor='age' id='text'>Age</label>
              <input
                type='number'
                className='form-control'
                name='age'
                placeholder='18'
                value={this.state.age}
                onChange={this.onChange}
                id='fields'
              />
            </div>
          </div>
          <br />
          <div className='row col-12 d-flex justify-content-end'>
            <button type='submit' class='btn btn-1'>
                        Cancel
            </button>
            <button type='submit' class='btn btn-2'>
                        Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
