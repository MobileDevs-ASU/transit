import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Button
} from './common'

class Choice extends Component {
  onCityPress = () => {
    Actions.city()
  }

  onBusinessPress = () => {
    Actions.business()
  }

  onConsultantPress = () => {
    alert('pressed')
  }

  render() {
    return (
      <View>
        <Button
          title="Business"
          onPress={this.onBusinessPress.bind(this)}
        />
        <Button
          title="Consultant"
          onPress={this.onConsultantPress.bind(this)}
        />
        <Button
          title="City"
          onPress={this.onCityPress.bind(this)}
        />
      </View>
    )
  }
}

export default Choice;
