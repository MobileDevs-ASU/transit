import React from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

const BUTTON_WIDTH = Dimensions.get('window').width * 0.6;

const Button = (props) => {
  const {
    container,
    textStyle
  } = styles;
  return (
    <TouchableOpacity style={container} onPress={ props.onPress }>
      <Text style={textStyle}>{ props.title }</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    width: BUTTON_WIDTH,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: '#f8f8f8',
    borderWidth: 1
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center'
  }
}

export { Button };
