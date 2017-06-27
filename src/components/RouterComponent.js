import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import Choice from './Choice';
import City from './City';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth" hideNavBar={true} initial>
        <Scene key="login" component={Login} title="Login" initial/>
      </Scene>
      <Scene key="welcome" hideNavBar={true}>
        <Scene key="choice" component={Choice} title="Choice"/>
      </Scene>
      <Scene key="city">
        <Scene key="cityMap" component={City} title="City" />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
