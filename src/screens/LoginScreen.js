/*
  Login Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';

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
  // Button Render Method
  /////////////////////////////////////////////////////////
  renderButtons() {
    return (
      <View>
        <Button
          title="Log In"
        />

        <View>
          <Button
            title="Register"
          />

          <Button
            title="Forgot Password?"
          />
        </View>
      </View>
    );
  }

  /////////////////////////////////////////////////////////
  // Main render method
  /////////////////////////////////////////////////////////
  render() {
    return (
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: '' }}
        />
        {this.renderButtons()}

      </View>
    );
  }
}

export default LoginScreen;
