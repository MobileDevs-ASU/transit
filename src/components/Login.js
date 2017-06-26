import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import {
  Input,
  Button,
  Spinner
} from './common';
import {
  emailChanged,
  passwordChanged,
  loginUser,
} from './../actions';

class Login extends Component {

  buttonPressed() {
    const { email, password, loginUser } = this.props
    loginUser({ email, password })
  }

  renderButton() {
    if(this.props.loading) {
      return (
        <Spinner />
      )
    }else{
      return (
        <Button
          title="Login / Signup"
          onPress={ this.buttonPressed.bind(this) }
        />
      )
    }
  }

  render() {
    const{
      container
    } = styles;
    return (
      <View style={ container }>
        <Text>Login</Text>
        <Input
          title="Email"
          placeholder="joesmith@email.com"
          onChangeText={ email => this.props.emailChanged(email) }
          value={ this.props.email }
        />
        <Input
          title="Password"
          placeholder="password123"
          onChangeText={ password => this.props.passwordChanged(password) }
          value={ this.props.password }
          secureTextEntry
        />
        {this.renderButton()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading};
}

const userAuth = { emailChanged, passwordChanged, loginUser }

export default connect(mapStateToProps, userAuth)(Login);
