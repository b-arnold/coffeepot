/*
  Login Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import {
  Button,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';
import Navigate from './Navigate';
import * as actions from '../actions';
import { Spinner } from '../components/Spinner';

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

  //////////////////////////////////////////////////////////////////////////////////
  // State definition
  state = { inSignupMode: false, showLoading: true };

  /////////////////////////////////////////////////////////
  // Register the event which detects a change in state of user
  componentWillMount() {
    if (firebase.auth().currentUser) {
    //  this.props.signoutUser();
      this.props.navigation.navigate('Home');
      return;
    }

    // Listen for authentication state to change
    firebase.auth().onAuthStateChanged(user => {
      this.props.loading = false;
      this.setState({ showLoading: this.props.loading });

      if (user) {
        this.props.navigation.navigate('Home');
        return;
      }
      this.props.navigation.navigate('Auth');
    });
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Called whenever one of the props (properties) changes - when the login/token
  // property from the auth reducer changes, this will be called.
  componentWillReceiveProps(nextProps) {
    this.setState({ showLoading: nextProps.loading });
  }

  /////////////////////////////////////////////////////////
  // call action when first name is changed
  onFirstNameChange = text => {
    this.props.firstNameChange(text);
  }

  /////////////////////////////////////////////////////////
  //  call action when last name Changed
  onLastNameChange = text => {
    this.props.lastNameChange(text);
  }

  /////////////////////////////////////////////////////////
  // update the emailed property when email Changed
  onEmailChange = text => {
    this.props.emailChange(text);
  };

  /////////////////////////////////////////////////////////
  // update password
  onPasswordChange = text => {
    this.props.passwordChange(text);
  };

  ///////////////////////////////////////////////////////////
  // Update the property when changed
  onPasswordRetypeChange = text => {
    this.props.passwordRetypeChange(text);
  };

  ///////////////////////////////////////////////////////////
  // Login user via username/password
  onStandardSignupButtonPress = () => {
    const { email, password, passwordRetype } = this.props;
    this.props.signupUser(email, password, passwordRetype);
  };

  /////////////////////////////////////////////////////////
  // login user via email/pass
  onStandardLoginButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Toggles between Login mode and Signup mode
  onSignupLoginToggle = () => {
    this.setState({ inSignupMode: !this.state.inSignupMode });
    this.props.resetSignupLoginPages();
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Renders Buttons
  renderButtons() {
    if (this.state.inSignupMode) {
      return (
        <View
          style={{
            alignItems: 'center'
          }}
        >
          <Button
            title="Sign Up"
            onPress={this.onStandardSignupButtonPress}
            buttonStyle={styles.loginButtonStyle}
          />
          <View style={{ flexDirection: 'column', marginTop: 10 }}>
            <Text style={{ textAlign: 'center' }}>Already have an account?&nbsp;</Text>
            <TouchableWithoutFeedback onPress={this.onSignupLoginToggle}>
              <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Log In</Text>
              </View>
            </TouchableWithoutFeedback>
            </View>
        </View>
      );
    }
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40
        }}
        >
          <Button
            title="Log In"
            rounded
            buttonStyle={styles.loginButtonStyle}
            onPress={this.onStandardLoginButtonPress}
          />
      </View>

      <View
        style={styles.containerStyle}style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25
      }}
      >
        <Button
          title="Register"
          fontSize={14}
          rounded
          buttonStyle={styles.smallButtonStyle}
          onPress={this.onSignupLoginToggle}
        />

        <Button
          title="Forgot Password?"
          fontSize={10.5}
          rounded
          buttonStyle={styles.smallButtonStyle}
        />
      </View>
    </View>
  );
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Render password retype button if in signup mode
  renderNameField() {
    if (this.state.inSignupMode) {
      return (
        <View style={styles.nameStyle}>
          <FormInput
            placeholder="First Name"
            inputStyle={{ color: 'black' }}
            containerStyle={{ width: 150 }}
            value={this.props.firstName}
            onChangeText={this.onFirstNameChange}
          />
          <FormInput
            placeholder="Last Name"
            inputStyle={{ color: 'black' }}
            containerStyle={{ width: 150 }}
            value={this.props.lastName}
            onChangeText={this.props.onLastNameChange}
          />
        </View>
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Render password retype button if in signup mode
  renderPasswordRetypeButton() {
    if (this.state.inSignupMode) {
      return (
        <View style={{ marginBottom: 10 }}>
          <FormInput
            placeholder="retype password"
            secureTextEntry
            value={this.props.passwordRetype}
            onChangeText={this.onPasswordRetypeChange}
            style={{ color: 'black' }}
          />
        </View>
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Get screen style (used to center activity spinner when loading)
  getScreenStyle() {
    if (this.state.showLoading) {
      return styles.spinnerStyle;
    }
    return { flex: 1 };
  }


  /////////////////////////////////////////////////////////
  // Main render method
  /////////////////////////////////////////////////////////
  renderContent() {
    if (this.state.showLoading) {
      return <Spinner size="large" message="Authenticating..." />;
    }
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

         {this.renderNameField()}

        <View style={{ marginBottom: 10, marginTop: 10 }}>

          <FormInput
            placeholder="youremail@email.com"
            containerStyle={{ marginTop: 10, marginBottom: 10 }}
            value={this.props.email}
            onChangeText={this.onEmailChange}
          />

          <FormInput
            placeholder="password"
            secureTextEntry
            containerStyle={{ marginTop: 10, marginBottom: 10 }}
            value={this.props.password}
            onChangeText={this.onPasswordChange}
          />
        </View>

        {this.renderPasswordRetypeButton()}

        <FormValidationMessage containerStyle={{ marginBottom: 10 }}>
          {this.props.error}
        </FormValidationMessage>

        {this.renderButtons()}
      </KeyboardAvoidingView>
    );
  }

  /////////////////////////////////////////////////////////
  // Main render method
  /////////////////////////////////////////////////////////
  render() {
    return <View style={this.getScreenStyle()}>{this.renderContent()}</View>;
  }
}

///////////////////////////////////////////////////////////
//Syles
const styles = {
  smallButtonStyle: {
    width: 100,
    margin: 20,
    height: 40,
    backgroundColor: BUTTON_COLOR
  },
  loginButtonStyle: {
    width: 160,
    backgroundColor: BUTTON_COLOR
  },
  imageStyle: {
    width: 225,
    height: 225,
    borderRadius: 50
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  formStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  nameStyle: {
    flexDirection: 'row',
    alignItems: 'center'
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
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};


/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ auth }) {
  return {
    email: auth.email,
    password: auth.password,
    passwordRetype: auth.passwordRetype,
    error: auth.error,
    loading: auth.loading,
    firstName: auth.firstName,
    lastName: auth.lastName
  };
}
export default connect(mapStateToProps, actions)(LoginScreen);
