import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import Choice from './Choice';
import City from './City';
import Add from './Add';

const RouterComponent = () => {
  pop = () => {
    Actions.pop()
  }
  return (
    <Router>
      <Scene key="auth" hideNavBar={true}>
        <Scene key="login" component={Login} title="Login" initial/>
      </Scene>
      <Scene key="welcome" hideNavBar={true} initial>
        <Scene key="choice" component={Choice} title="Choice"/>
      </Scene>
      <Scene key="city">
        <Scene
          key="cityMap"
          component={City}
          title="City"
          leftTitle="Back"
          onLeft={this.pop.bind(this)}
        />
      </Scene>
      <Scene key="business">
        <Scene
          key="add"
          component={Add}
          title="Add Job"
          leftTitle="Back"
          onLeft={this.pop.bind(this)}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
