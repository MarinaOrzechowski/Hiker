import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import profile from '../profiles/profile.png';

import auth from '../services/auth';

const classes = "btn btn-outline-primary mx-1";

const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
    return (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className={classes} to="/login">Login</Link>
        </li>
        <li className='nav-item'>
          <Link className={classes} to="/register">Register</Link>
        </li>
      </ul>
    );
  }

  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div>
      Welcome!
      <Link to="/profile"><img src={profile} alt='profile' className='ml-3 mr-1' /></Link>
      <button className={classes} onClick={logout}>Logout</button>
    </div>
  );
});

export default AuthButton;
