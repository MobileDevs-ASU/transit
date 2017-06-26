import React from 'react';
import {
  TextInput,
  Text,
  View,
  Dimensions
} from 'react-native';

const INPUT_WIDTH = Dimensions.get('window').width * 0.8;

const Input = (props) => {
  const {
    textInputStyle,
    container,
    textStyle
  } = styles;
  return (
    <View style={ container }>
      <Text style={ textStyle }>{ props.title }</Text>
      <TextInput
        placeholder={ props.placeholder }
        style={ textInputStyle }
        secureTextEntry={ props.secureTextEntry }
        onChangeText={ props.onChangeText }
        value={ props.value }
      />
    </View>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: INPUT_WIDTH
  },
  textStyle: {
    flex: 2,
    fontSize: 18,
    textAlign: 'left',
    padding: 5
  },
  textInputStyle: {
    borderColor: '#f8f8f8',
    borderWidth: 1,
    borderRadius: 5,
    flex: 5,
    height: 40,
    padding: 10
  }
}

export { Input };
