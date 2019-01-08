import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as routes from '../../routes';
import './nav-ui.scss';
import voluntechLogo from '../../../assets/voluntechLogo.jpg';

class NavUi extends React.Component {
  // CSS classNames for each nav instance can be unique for custom looks
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
    this.setState({
      isLoggedIn: false,
    });
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    console.log(isAuthenticated());
  }

  whichMenuSet(location) {
    // const { isAuthenticated } = this.props.auth;
    const isAuthenticated = this.props.loggedIn;
    console.log(this.props);
    console.log(this.props.auth, this.props.auth.getAccessToken());
    console.log(this.props.loggedIn);
    console.log(this.state);
    console.log(localStorage.getItem('isLoggedIn'));
    const loginSet = <nav className ='loginSetNavigation'>
      <Link to={routes.SITE_ROOT_FRONTEND}>
      <img src={voluntechLogo} className="navUILogo"/></Link>
      {!isAuthenticated && (
        <Link to={routes.LOGIN_FRONTEND} className='navLink' onClick={this.login.bind(this)}>Login</Link>
      )}
      {!isAuthenticated && (
        <Link to={routes.SIGNUP_FRONTEND} className='navLink' onClick={this.login.bind(this)}>Sign Up</Link>
      )}
      {isAuthenticated && (
        <Link to={routes.SITE_ROOT_FRONTEND} className='navLink' onClick={this.logout.bind(this)}>Sign Out</Link>
      )}
      <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>About Us</Link>
      <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>Projects</Link>
      <Link to={routes.SITE_ROOT_FRONTEND} className='navLink'>Home</Link>
    </nav>;

    if (location.pathname === routes.LOGIN_FRONTEND) {
      // console.log('loading loginSet');
      return loginSet;
    }

    return loginSet;
  }

  render() {
    const { location } = this.props;
    return (
      <section id="navControl">
        {this.whichMenuSet(location)}
      </section>
    );
  }
}

NavUi.propTypes = {
  location: PropTypes.object,
  isAuthenticated: PropTypes.func,
  auth: PropTypes.object,
};

export default NavUi;
