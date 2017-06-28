import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as firebase from 'firebase';
const geofire = require('geofire');
import reducers from './src/reducers';
import Router from './src/components/RouterComponent';

export default class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAQRG0NeWIboNoLtZrso4dunjXGiIeUqUc",
      authDomain: "transit-7f4d8.firebaseapp.com",
      databaseURL: "https://transit-7f4d8.firebaseio.com",
      projectId: "transit-7f4d8",
      storageBucket: "",
      messagingSenderId: "847266301259"
    };
    firebase.initializeApp(config);
    const geoFire = new geofire(firebase.database().ref());
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <Router />
      </Provider>
    );
  }
}
