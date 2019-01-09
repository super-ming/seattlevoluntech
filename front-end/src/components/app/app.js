import '@babel/polyfill';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import '../../../style/base.scss';
import * as routes from '../../routes';
import Auth from '../auth-redirect/Auth';

// custom components
import Landing from '../landing/landing';
import AuthRedirect from '../auth-redirect/auth-redirect';
import history from '../auth-redirect/history';
import Callback from '../auth-redirect/Callback';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends React.Component {
  render() {
    return (
        <div>
          <Router history={history}>
            <div>
              {/* <Route path='*' component={Landing}/> */}
              <Route exact path={routes.SITE_ROOT_FRONTEND}
                render={props => <Landing auth={auth} {...props}/>}/>
              <Route path={routes.LOGIN_FRONTEND}
                render={props => <Landing auth={auth} {...props}/>}/>
              <Route path={routes.SIGNUP_FRONTEND}
                render={props => <Landing auth={auth} {...props}/>}/>
              <Route path={routes.HOME_FRONTEND}
                render={props => <Landing auth={auth} {...props}/>}/>
              <Route path={routes.CALLBACK_FRONTEND}
                render={(props) => {
                  return <Callback auth={auth} {...props}/>;
                }}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
