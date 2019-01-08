import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../../style/base.scss';
import * as routes from '../../routes';

// custom components
import Landing from '../landing/landing';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Auth from '../auth-redirect/Auth';

const auth = new Auth();

class App extends React.Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              {/* <Route path='*' component={Landing}/> */}
              <Route exact path={routes.SITE_ROOT_FRONTEND}
                render={props => <Landing auth={auth} {...props}/>}/>
              <Route path={routes.LOGIN_FRONTEND}
                render={props => <Landing auth={auth} {...props}/>}/>
              <Route path={routes.SIGNUP_FRONTEND}
                render={props => <Landing auth={auth} {...props}/>}/>
              <Route path={routes.REDIRECT_FRONTEND}
                render={props => <AuthRedirect auth={auth} {...props} />}/>
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
