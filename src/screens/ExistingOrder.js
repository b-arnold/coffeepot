import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Avatar } from "react-native-elements";

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BUTTON_COLOR
} from "../constants/style";

class ExistingOrder extends Component {
  static navigationOptions = {
    title: "Existing Order",
    //Changes the header color
    headerStyle: {
      backgroundColor: PRIMARY_COLOR
    },
    //Changes the Header Title color
    headerTitleStyle: {
      color: SECONDARY_COLOR
    },
    //Changes the Back button color
    headerTintColor: SECONDARY_COLOR,
    tabBarVisible: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Time Left:</Text>

        <Avatar xlarge title="Test" />

        <View>
          <Text style={styles.text}>Location:</Text>
        </View>

        <Text style={styles.text}> Order:</Text>

        <Button
          title="Accept Order"
          buttonStyle={styles.button_style}
          rounded
        />
      </View>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = {
  container: {
    margin: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    padding: 10,
    backgroundColor: BUTTON_COLOR,
    color: SECONDARY_COLOR
  },
  button_style: {
    backgroundColor: BUTTON_COLOR
  }
};

export default ExistingOrder;
