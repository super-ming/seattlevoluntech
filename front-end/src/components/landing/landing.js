// packages
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// custom components
import LandingAuthForm from '../landing-auth-form/landing-auth-form'; // eslint-disable-line
import NavUi from '../nav-ui/nav-ui';
import LandingImage from './landingImage';
import LatestProjects from './latestProjects';

// styles
import './landing.scss';

// routes
import * as routes from '../../routes';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedIn: false,
    };
  }

  /* signUpForm() {
    return <div className="centered">
      <h2 className="formHeader">Sign Up</h2>
      <LandingAuthForm type='signup' onComplete={this.handleSignup}/>
    </div>;
  }

  loginForm() {
    return <div className="centered">
      <h2 className="formHeader">Login</h2>
      <LandingAuthForm type='login' onComplete={this.handleLogin}/>
    </div>;
  } */


  componentDidMount() {
    const { renewSession } = this.props.auth;
    const { isAuthenticated } = this.props.auth;
    console.log(isAuthenticated());

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
      console.log(this.props.auth);
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.auth !== this.props.auth) {
      console.log(this.props);
      console.log(this.state.isLoggedIn);
    }
  }

  render() {
    const { location } = this.props;
    console.log(this.props);
    const loggedIn = this.state.isLoggedIn;
    console.log(loggedIn);
    return (
      <Fragment>
        <section>
          <NavUi location={location} auth={this.props.auth}
            loggedIn={this.state.isLoggedIn}/>
          <LandingImage />
          {/* { location.pathname === routes.LOGIN_FRONTEND ? this.loginForm() : null } */}
          {/* { location.pathname === routes.SIGNUP_FRONTEND ? this.signUpForm() : null } */}
        </section>
        <section>
          <div className="intro-text">
            <p>Seattle Voluntech is a platform that connects volunteers who are
              interested in donating their time and skills with small business
              owners in the Seattle area who needs technical help.</p>
          </div>
        </section>
        <hr className="underline"/>
        <section>
          <LatestProjects />
        </section>
      </Fragment>
    );
  }
}

export default Landing;
