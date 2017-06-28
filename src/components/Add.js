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
  companyTextChanged,
  positionTextChanged,
  descriptionTextChanged,
  requirementsTextChanged
} from './../actions'

class Add extends Component {

  onNextPressed = () => {

  }
  onCompanyChangedText = (text) => {
    this.props.companyTextChanged(text);
  }

  render() {
    const { container } = styles
    return (
      <View style={container}>
        <Input
          title="Company"
          placeholder="Joe Smith"
          onChangeText={ (text) => this.onCompanyChangedText(text) }
          value={ this.props.company }
        />
        <Input
          title="position"
          placeholder="Director"
        />
        <Input
          title="desciption"
          placeholder="Assistant to the CEO"
        />
        <Input
          title="requirements"
          placeholder="Must be able to lift a box"
        />
        <Button
          title="Next"
          onPress={this.onNextPressed.bind(this)}
        />
        <Text>{ this.props.company }</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 60
  }
}

const mapStateToProps = state => {
  const {
    company,
    position,
    description,
    requirements
  } = state.post
  return {
    company,
    position,
    description,
    requirements
  }
}

const actions = {
  companyTextChanged,
  positionTextChanged,
  descriptionTextChanged,
  requirementsTextChanged
}

export default connect(mapStateToProps, actions)(Add);
