/*
  Login Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';
import Navigate from './Navigate';

///////////////////////////////////////////////////////////
// Login Screen
// Logs users into the application or directs them to signup
// if they do not have an account
///////////////////////////////////////////////////////////
class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: PRIMARY_COLOR
    },
    headerTitleStyle: {
      color: SECONDARY_COLOR
    },
    headerTintColor: SECONDARY_COLOR
  }

  /////////////////////////////////////////////////////////
  // Main render method
  /////////////////////////////////////////////////////////
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior='padding'
      >
        <View style={styles.containerStyle}>
          <Image
            style={styles.imageStyle}
            source={require('../images/LoginLogo.png')}
          />
        </View>

        <View style={{ marginBottom: 10, marginTop: 10 }}>
          <View style={{ marginBottom: 10, marginTop: 10, marginLeft: 20 }}>
            <Text>Email</Text>
          </View>
          <FormInput
            placeholder="youremail@email.com"
            style={{ color: 'black' }}
          />
          <View style={{ marginBottom: 10, marginTop: 10, marginLeft: 20 }}>
            <Text>Password</Text>
          </View>
          <FormInput
            placeholder="password"
            secureTextEntry
            style={{ color: 'black' }}
          />
        </View>

        <View
          style={styles.containerStyle}
        >
          <Button
            title="Log In"
            rounded
            buttonStyle={styles.loginButtonStyle}
            onPress = {() => navigate('Main')}
          />
        </View>

        <View
          style={styles.containerStyle}
        >
          <Button
            title="Register"
            rounded
            buttonStyle={styles.smallButtonStyle}
          />

          <Button
            title="Forgot Password?"
            fontSize={10.5}
            rounded
            buttonStyle={styles.smallButtonStyle}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

///////////////////////////////////////////////////////////
//Syles
const styles = {
  smallButtonStyle: {
    width: 90,
    margin: 20,
    height: 40,
    backgroundColor: BUTTON_COLOR
  },
  loginButtonStyle: {
    width: 160,
    backgroundColor: BUTTON_COLOR
  },
  imageStyle: {
    width: 200,
    height: 200
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
};

export default LoginScreen;
