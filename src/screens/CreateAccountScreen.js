/*
  Create Account Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

///////////////////////////////////////////////////////////
// Create Account
// Allows users to create account for coffee pot
///////////////////////////////////////////////////////////
class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: 'Create Account',
    headerStyle: {
      backgroundColor: '#16A085'
    },
    headerTitleStyle: {
      color: 'ECF0F1'
    },
    headerTintColor: 'white'
  }
  /////////////////////////////////////////////////////////
  // Main render method
  /////////////////////////////////////////////////////////
  render() {
    return (
      <View>
        <Text>
          Create Account
        </Text>
      </View>
    );
  }

}

export default CreateAccountScreen;
