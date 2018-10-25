import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Resume from './Resume'
import Games from './Games'
import Footer from './Footer'
import Particle from './Particle'
import FlyingFlamingo from './FlyingFlamingo';
import MyCode from './MyCode'

const styles = {
  global: {
    backgroundColor: 'black',
    
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.global}>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/games' component={Games} />
            <Route exact path='/my_code' component={MyCode}/>
            <Route exact path='/flyingFlamingo' component={FlyingFlamingo} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Particle />
        <Footer />
      </div>
    );
  }
}

export default App;
