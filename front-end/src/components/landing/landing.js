// packages
import React from 'react';
import { Link } from 'react-router-dom';

// custom components
import LandingAuthForm from '../landing-auth-form/landing-auth-form'; // eslint-disable-line
import NavUi from '../nav-ui/nav-ui';

// styles
import './landing.scss';

// routes
import * as routes from '../../routes';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signUpForm() {
    return <div className='centered'>
      <h2 className="formHeader">Sign Up</h2>
      <LandingAuthForm type='signup' onComplete={this.handleSignup}/>
    </div>;
  }

  loginForm() {
    return <div className='centered'>
      <h2 className="formHeader">Login</h2>
      <LandingAuthForm type='login' onComplete={this.handleLogin}/>
    </div>;
  }

  render() {
    const { location } = this.props;
    return (
        <section>
          <NavUi location={location} />
          { location.pathname === routes.LOGIN_FRONTEND ? this.loginForm() : null }
          { location.pathname === routes.SIGNUP_FRONTEND ? this.signUpForm() : null }
        </section>
    );
  }
}

export default Landing;