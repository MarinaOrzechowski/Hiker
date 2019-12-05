import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Home from './pages/Home';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PostsListPage from './pages/PostsListPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <ul className="navbar-nav mr-auto">
        <Link className="navbar-brand" to="/">Hikr</Link>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/login" component={Login} />
                <Route path='/register' component={Registration} />
                <PrivateRoute path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/posts-list" component={PostsListPage} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
