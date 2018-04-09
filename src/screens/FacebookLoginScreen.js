import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class FacebookLoginScreen extends Component {
  static navigationOptions = {
    title: "Facebook",
    header: null
  };

  // Automatically attempts to login to Facebook
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("Homeapp");
    }
  }

  render() {
    return <View />;
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(FacebookLoginScreen);
