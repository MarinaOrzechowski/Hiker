import React from 'react';
import logo from '../placeholder.png';

class Registration extends React.Component {
  state = {
    failed: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
        <div className='row my-4 mx-5 border'>
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
