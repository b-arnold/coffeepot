import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import { Button, Icon } from "react-native-elements";

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BUTTON_COLOR
} from "../constants/style";

class Settings extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Settings",
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      paddingRight: 0,
      paddingLeft: 0
    },
    headerTitleStyle: {
      color: SECONDARY_COLOR
    },
    headerTintColor: SECONDARY_COLOR,
    headerBackTitle: null,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon type="material-community" name="menu" color={SECONDARY_COLOR} />
      </TouchableOpacity>
    )
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ margin: 20 }}>
            <Text style={styles.textStyle}>Preferences</Text>
          </View>
          {/* Edit Profile */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Edit Profile"
            onPress={() => navigate("EditProfile")}
          />

          {/* Cards */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Credit Cards"
            onPress={() => navigate("Settings")}
          />

          {/* Privacy */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Privacy"
            onPress={() => navigate("Settings")}
          />

          {/* Blocke Users */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Blocke Users"
            onPress={() => navigate("Settings")}
          />

          {/* Notifications */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Notifications"
            onPress={() => navigate("Settings")}
          />

          {/* Social Networks */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Social Networks"
            onPress={() => navigate("Settings")}
          />

          <View style={{ margin: 20 }}>
            <Text style={styles.textStyle}>Security</Text>
          </View>

          {/* TouchID & Pin*/}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="TouchID & Pin"
            onPress={() => navigate("Settings")}
          />
          {/* Change Password */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Change Password"
            onPress={() => navigate("Settings")}
          />
          {/* Remember Devices */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Remember Devices"
            onPress={() => navigate("Settings")}
          />

          <View style={{ margin: 20 }}>
            <Text style={styles.textStyle}>Information</Text>
          </View>

          {/* Legal */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Legal"
            onPress={() => navigate("Settings")}
          />
          {/* Helpful Information */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Helpful Information"
            onPress={() => navigate("Settings")}
          />
          {/* Send Feedback */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Send Feedback"
            onPress={() => navigate("Settings")}
          />
          {/* Rate CoffeePot */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Rate CoffeePot"
            onPress={() => navigate("Settings")}
          />
          {/* Sign Out of CoffeePot */}
          <Button
            buttonStyle={styles.buttonStyles}
            containerViewStyle={{ width: "100%" }}
            title="Sign Out of CoffeePot"
            onPress={() => navigate("Settings")}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#545454"
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 25
  },
  buttonStyles: {
    margin: 1,
    width: "100%",
    backgroundColor: "#494949"
  }
};

export default Settings;
