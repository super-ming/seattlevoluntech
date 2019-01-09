import React, { Component } from 'react';
import loading from './loading.svg';
import history from './history';
import * as routes from '../../routes';

class Callback extends Component {
  componentDidMount() {
    console.log(this.props);
    this.handleAuthentication(this.props);
  }

  handleAuthentication({ location }) {
    if (/access_token|id_token|error/.test(location.hash)) {
      this.props.auth.handleAuthentication();
      console.log('auth done');
      history.replace(routes.SITE_ROOT_FRONTEND);
    }
  }

  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    };
    console.log('Loading callback');
    return (
      <div style={style}>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

export default Callback;
