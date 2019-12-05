import React from 'react';
import logo from '../placeholder.png';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  fieldChanged = (fieldName) => {
    return (event) => {
      const value = event.target.value;
      this.setState({ [fieldName]: value});
    }
  }

  login = (e) => {
    //Prevent refresh
    e.preventDefault();
    //Authenticate and log in
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row my-4 mx-5 border'>
          <div className='col'>
            <img src={logo} alt='Logo'/>
          </div>
          <div className='col my-auto'>
          <form onSubmit={this.login}>
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
              <button
                type='submit'
                className='btn btn-primary'
              >Login</button>
          </form>
          </div>
        </div>
      </div>
    )
  };
}

export default Login;
