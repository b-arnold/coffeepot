/*
  Login Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';

///////////////////////////////////////////////////////////
// Login Screen
// Logs users into the application or directs them to signup
// if they do not have an account
///////////////////////////////////////////////////////////
class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#16A085'
    },
    headerTitleStyle: {
      color: '#ECF0F1'
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
          Login
        </Text>
      </View>
    );
  }
}

export default LoginScreen;
