import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Spinner } from '../components/Spinner';

// Purpose of this auth screen is just to call action creator
class LoginScreen extends Component {
  //////////////////////////////////////////////////////////////////////////////////
  // Properties automatically referred to by react-navigation navigators
  static navigationOptions = {
    //tabBarVisible: false,
    title: 'Log Out',
    drawerIcon: ({ tintColor }) => <Icon type="entypo" name="log-out" size={25} color={tintColor} />
  };

  //////////////////////////////////////////////////////////////////////////////////
  // State definition
  state = { inSignupMode: false }; // Just for local use

  //////////////////////////////////////////////////////////////////////////////////
  // Register the event which detects a change of state in the logged-in user
  componentWillMount() {
    this.props.signoutUser();

    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Print out debug info
        console.log(`${user.email} still logged in?!?!?`);

        // Navigate to main page
        this.props.navigation.navigate('CoffeePot');
      } else {
        console.log('User logged out successfully.');
        this.props.navigation.navigate('LoginScreen');
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Render loading button while logging out
  renderScreen() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Main render method
  render() {
    return <View>{this.renderScreen()}</View>;
  }
}

//////////////////////////////////////////////////////////////////////////////////
// Map redux reducers to component props.
function mapStateToProps({ auth }) {
  return {
    loading: auth.loading
  };
}

export default connect(mapStateToProps, actions)(LoginScreen);
