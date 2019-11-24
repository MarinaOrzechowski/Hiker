import React from 'react';
import logo from '../placeholder.png';

class Registration extends React.Component {
  state = {
    failed: false,
    firstName: '',
    lastName: '',
    phoneNumber:'',
    email: '',
    password: '',
    confirmPassword: '',
    hikingExperience:'',
    age: 18,
    gender: '',
    profileDescription:'',
    //profilePicture
  }

  fieldChanged = (fieldName) => {
    return (event) => {
      const value = event.target.value;
      this.setState({ [fieldName]: value});
    }
  }

  register = (e) => {
    //Prevent refresh
    e.preventDefault();
    //Check good inputs and register
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row my-4 mx-5'>
          <div className='col'>
            <img src={logo} alt='Logo'/>
          </div>
          <div className='col my-auto'>
            <form onSubmit={this.register}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='firstName'
                  placeholder='First name'
                  value={this.state.firstName}
                  onChange={this.fieldChanged('firstName')} />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='lastName'
                  placeholder='Last name'
                  value={this.state.lastName}
                  onChange={this.fieldChanged('lastName')} />
              </div>
              <div className='form-group'>
                <input
                  type='tel'
                  className='form-control'
                  name='phoneNumber'
                  placeholder='Phone number'
                  value={this.state.phoneNumber}
                  onChange={this.fieldChanged('phoneNumber')} />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.fieldChanged('email')} />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.fieldChanged('password')} />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  name='confirmPassword'
                  placeholder='Confirm password'
                  value={this.state.confirmPassword}
                  onChange={this.fieldChanged('confirmPassword')} />
              </div>
              <div className='form-group'>
              <label for='hikingExperience'>Hiking experience</label>
                <select
                  className='form-control'
                  name='hikingExperience'
                  value={this.state.hikingExperience}
                  onChange={this.fieldChanged('hikingExperience')}>
                  <option>Beginner</option>
                  <option>Experienced</option>
                  <option>Expert</option>
                  <option>Literally the god of hiking</option>
                </select>
              </div>
              <div className='form-group'>
                <label for='age'>Age</label>
                <input
                  type='number'
                  className='form-control'
                  name='age'
                  value={this.state.age}
                  onChange={this.fieldChanged('age')} />
              </div>
              <div className='form-group'>
              <label for='gender'>Gender</label>
                <select
                  className='form-control'
                  name='gender'
                  value={this.state.gender}
                  onChange={this.fieldChanged('gender')}>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label for='profileDescription'>Tell us about yourself</label>
                <textarea
                  class='form-control'
                  name='profileDescription'
                  value={this.state.profileDescription}
                  onChange={this.fieldChanged('profileDescription')}>
                </textarea>
              </div>
              <button
                type='submit'
                className='btn btn-primary ml-auto'
              >Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Registration;
