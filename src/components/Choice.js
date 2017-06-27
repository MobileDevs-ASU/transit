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
  render() {
    return (
      <View>
        <Button
          title="Business"
        />
        <Button
          title="Consultant"
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
