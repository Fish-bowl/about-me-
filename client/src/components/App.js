import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import HireMe from './HireMe'
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Resume from './Resume'
import Footer from './Footer'
import Particle from './Particle'
import MyCode from './MyCode'
import MyProjects from './MyProjects';
import Home from './Home'

const styles = {
  global: {
    backgroundColor: 'black',
  },

}

class App extends Component {
  render() {
    return (
      <div style={styles.global}>
        <NavBar />
        <Flash />
        <Particle />
        {/* <HireMe /> */}
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/hiring' component={Resume} />
            <Route exact path='/projects' component={MyProjects} />
            <Route exact path='/my_code' component={MyCode}/>
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    );
  }
}

export default App;
