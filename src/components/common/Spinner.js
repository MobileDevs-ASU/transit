import React from 'react';
import{
  ActivityIndicator
} from 'react-native';

const Spinner = (props) => {
  return (
    <ActivityIndicator
    color="grey"
    animating={true}
    size="large" />
  )
}

export { Spinner };
