/*
  Create Account Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Image, KeyboardAvoidingView } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

///////////////////////////////////////////////////////////
// Create Account
// Allows users to create account for coffee pot
///////////////////////////////////////////////////////////
class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: 'Create Account',
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
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior='padding'
      >
      <View style={styles.imageContainerStyle}>
        <Image
          style={styles.imageStyle}
          source={require('../images/LoginLogo.png')}
        />
      </View>

        <View style={styles.nameStyle}>
          <FormInput
            placeholder="First Name"
            inputStyle={{ color: 'black' }}
            containerStyle={styles.containerStyle}
          />
          <FormInput
            placeholder="Last Name"
            inputStyle={{ color: 'black' }}
            containerStyle={styles.containerStyle}
          />
        </View>

        <View>
          <View style={styles.formStyle}>
            <FormInput
              placeholder="Email"
              inputStyle={{ color: 'black' }}
            />
          </View>

          <View style={styles.formStyle}>
            <FormInput
              placeholder="Password"
              secureTextEntry
              inputStyle={{ color: 'black' }}
            />
          </View>

          <View style={styles.formStyle}>
            <FormInput
              placeholder="Confirm Password"
              inputStyle={{ color: 'black' }}
              secureTextEntry
              shake
            />
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Button
            title="Create Account"
            rounded
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

//////////////////////////////////////////////////////////
//Syles
const styles = {
  formStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  nameStyle: {
    flexDirection: 'row'
  },
  containerStyle: {
    width: 150
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 50
  },
  imageContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonStyle: {
    backgroundColor: BUTTON_COLOR,
    width: 200
  }
};

export default CreateAccountScreen;
