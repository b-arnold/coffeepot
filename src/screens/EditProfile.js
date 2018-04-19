import React, { Component } from "react";
import firebase from "firebase";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { AppLoading, Asset, ImagePicker } from "expo";
import {
  Card,
  Icon,
  Avatar,
  FormInput,
  Rating,
  Button
} from "react-native-elements";
import { connect } from "react-redux";
import { Spinner } from "../components/Spinner";

import * as actions from "../actions";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BUTTON_COLOR
} from "../constants/style";

class EditProfile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Edit Profile",
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      paddingRight: 0,
      paddingLeft: 0
    },
    headerTitleStyle: {
      color: SECONDARY_COLOR
    },
    headerTintColor: SECONDARY_COLOR
  });

  state = {
    isReady: false,
    firstName: "",
    lastName: ""
  };

  componentWillMount() {
    const { currentUser } = firebase.auth();

    // Load first name into properties
    firebase
      .database()
      .ref(`users/${currentUser.uid}/name_field/firstName`)
      .on("value", snapshot => {
        this.props.profileFirstNameChange(snapshot.val());
      });

    // Load last name into properties
    firebase
      .database()
      .ref(`users/${currentUser.uid}/name_field/lastName`)
      .on("value", snapshot => {
        this.props.profileLastNameChange(snapshot.val());
      });

    // Load profile image into properties
    firebase
      .database()
      .ref(`users/${currentUser.uid}/profile_image`)
      .on("value", snapshot => {
        this.props.profileImageChanged(snapshot.val());
      });
  }

  /////////////////////////////////////////////////////////
  // call action when first name is changed
  onImageChange = uri => {
    this.props.setProfileImage(uri);
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      //this.setState({ image: result.uri });
      this.onImageChange(result.uri);
    }
  };

  /////////////////////////////////////////////////////////
  // call action when first name is changed
  onFirstNameChange = text => {
    this.setState({ firstName: text });
  };

  /////////////////////////////////////////////////////////
  //  call action when last name Changed
  onLastNameChange = text => {
    this.setState({ lastName: text });
  };

  onSave = () => {
    this.props.setFirstName(this.state.firstName);
    this.props.setLastName(this.state.lastName);
  };

  render() {
    return (
      <View style={styles.background}>
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: "center" }}
          behavior="padding"
        >
          <View style={{ margin: 10, alignItems: "center" }}>
            <Image
              source={{ uri: this.props.profileImage }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
            <Button
              title="Change Profile Image"
              buttonStyle={styles.button_style}
              onPress={this._pickImage}
            />
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <View>
              <View style={{ margin: 5, alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: "white" }}>First Name</Text>
              </View>
              <FormInput
                placeholder={this.props.firstName}
                inputStyle={{ color: "black", left: 10, marginTop: 7 }}
                containerStyle={{
                  backgroundColor: "white",
                  height: 50,
                  borderRadius: 7,
                  width: 150
                }}
                value={this.state.firstName}
                onChangeText={this.onFirstNameChange}
              />
            </View>
            <View>
              <View style={{ margin: 5, alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: "white" }}>First Name</Text>
              </View>
              <FormInput
                placeholder={this.props.lastName}
                inputStyle={{ color: "black", left: 10, marginTop: 7 }}
                containerStyle={{
                  backgroundColor: "white",
                  height: 50,
                  borderRadius: 7,
                  width: 150
                }}
                value={this.state.lastName}
                onChangeText={this.onLastNameChange}
              />
            </View>
          </View>

          <View>
            <Button
              title="Save Name Changes"
              buttonStyle={styles.button_style}
              onPress={this.onSave}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = {
  background: {
    alignItems: "center",
    backgroundColor: "#545454",
    justifyContent: "center",
    flex: 1
  },
  button_style: {
    backgroundColor: BUTTON_COLOR,
    borderRadius: 5,
    margin: 10
  }
};

/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ prof }) {
  return {
    firstName: prof.firstName,
    lastName: prof.lastName,
    profileImage: prof.profileImage
  };
}

export default connect(mapStateToProps, actions)(EditProfile);
