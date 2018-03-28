/*
  Login Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
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
    header: null
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
    const { email, password, passwordRetype, firstName, lastName } = this.props;
    this.props.signupUser(email, password, passwordRetype, firstName, lastName);
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
            rounded
            buttonStyle={styles.loginButtonStyle}
            buttonStyle={{ backgroundColor: '#E55300', width: 270, borderRadius: 7 }}
          />
          <View style={{ flexDirection: 'column', marginTop: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white', backgroundColor: 'transparent' }}>Already have an account?&nbsp;</Text>
            <TouchableOpacity onPress={this.onSignupLoginToggle}>
              <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text style={{ color: 'white', backgroundColor: 'transparent' }}>Log In</Text>
              </View>
            </TouchableOpacity>
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
            marginTop: 25
        }}
        >
          <Button
            title="Log In"
            buttonStyle={styles.loginButtonStyle}
            buttonStyle={{ backgroundColor: '#E55300', width: 330, borderRadius: 7, height: 47 }}
            onPress={this.onStandardLoginButtonPress}
          />
      </View>

      <View
        style={styles.containerStyle}style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30
      }}
      >
      <TouchableOpacity onPress={this.onSignupLoginToggle}>
        <Text style={{ backgroundColor: 'transparent', color: 'white', marginRight: 40, fontSize: 18 }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ backgroundColor: 'transparent', color: 'white', marginLeft: 30, fontSize: 18 }}>
          Forgot Password
        </Text>
      </TouchableOpacity>

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
            inputStyle={{ color: 'black', left: 10, marginTop: 7 }}
            containerStyle={{ backgroundColor: 'white', height: 50, borderRadius: 7, width: 150 }}
            value={this.props.firstName}
            onChangeText={this.onFirstNameChange}
          />
          <FormInput
            placeholder="Last Name"
            inputStyle={{ color: 'black', left: 10, marginTop: 7 }}
            containerStyle={{ backgroundColor: 'white', height: 50, borderRadius: 7, width: 150 }}
            value={this.props.lastName}
            onChangeText={this.onLastNameChange}
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
            placeholder="Retype Password"
            secureTextEntry
            value={this.props.passwordRetype}
            onChangeText={this.onPasswordRetypeChange}
            inputStyle={{ color: 'black', left: 10, marginTop: 7 }}
            containerStyle={{ backgroundColor: 'white', height: 50, borderRadius: 7 }}
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
            source={require('../images/logo_with_name.png')}
          />
        </View>

         {this.renderNameField()}

        <View style={{ marginBottom: 10, marginTop: 10 }}>

          <FormInput
            placeholder="email"
            containerStyle={{ backgroundColor: 'white', height: 50, borderTopRightRadius: 7, borderTopLeftRadius: 7 }}
            inputStyle={{ color: 'black', left: 10, marginTop: 7 }}
            value={this.props.email}
            onChangeText={this.onEmailChange}
          />

          <FormInput
            placeholder="password"
            secureTextEntry
            containerStyle={{ backgroundColor: 'white', height: 50, borderBottomRightRadius: 7, borderBottomLeftRadius: 7 }}
            inputStyle={{ color: 'black', left: 10, marginTop: 7 }}
            value={this.props.password}
            onChangeText={this.onPasswordChange}
          />
        </View>

        {this.renderPasswordRetypeButton()}

        <FormValidationMessage containerStyle={{ marginBottom: 10, backgroundColor: 'transparent' }}>
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
    return (

      <ImageBackground
        source={require('../images/background.jpg')} style={{ width: '100%', height: '100%' }}
      >
        <View style={this.getScreenStyle()}>{this.renderContent()}</View>
      </ImageBackground>
  );
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
