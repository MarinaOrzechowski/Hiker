import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../placeholder.png';

import auth from '../services/auth';

class Home extends React.Component {
  render() {
    const btnClasses = 'btn btn-primary w-50';
    const liClasses = 'my-2';
    if (auth.isAuthenticated === false) {
      return (
        <div className='container-fluid'>
          <div className='row my-4 mx-5 border'>
            <div className='col'>
              <img src={logo} alt='Logo'/>
            </div>
            <div className='col my-auto'>
              <ul className='list-unstyled'>
                <li className={liClasses}>
                  <Link className={btnClasses} to="/login">Login</Link>
                </li>
                <li className={liClasses}>
                  <Link className={btnClasses} to="/register">New Hiker</Link>
                </li>
                <li className={liClasses}>
                  <Link className={btnClasses} to="/about-us">About Us</Link>
                </li>
                <li className={liClasses}>
                  <Link className={btnClasses} to="/posts-list">Post Lists</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container-fluid'>
          <div className='row my-4 mx-5 border'>
            <div className='col'>
              <img src={logo} alt='Logo'/>
            </div>
            <div className='col my-auto'>
              <ul className='list-unstyled'>
                <li className={liClasses}>
                  <Link className={btnClasses} to="/hikes-list">Listings</Link>
                </li>
                <li className={liClasses}>
                  <Link className={btnClasses} to="/create-hike">Create Listing</Link>
                </li>
                <li className={liClasses}>
                  <Link className={btnClasses} to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
