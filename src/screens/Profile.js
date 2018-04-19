import React, { Component } from "react";
import firebase from "firebase";
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { AppLoading, Asset, ImagePicker } from "expo";
import { Card, Icon, Avatar, Rating } from "react-native-elements";
import { connect } from "react-redux";
import { Spinner } from "../components/Spinner";

import * as actions from "../actions";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants/style";

/////////////////////////////////////////////////////////
////  The following code is for the Profile Screen   ////
/////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
//  Method taken from Expo documents
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Profile",
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      paddingRight: 10,
      paddingLeft: 10
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
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("PlaceOrder")}>
        <Icon type="font-awesome" name="coffee" color="grey" />
      </TouchableOpacity>
    ),
    tabBarIcon: () => {
      return <Icon name="user" type="font-awesome" size={30} color="grey" />;
    }
  });

  state = {
    isReady: false,
    ifViewing: false
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

  ///////////////////////////////////////////////////////////////////
  //  Method taken from Expo documents
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      // require('../images/Profile_Pic.jpg'),
      require("../images/background.jpg")
    ]);

    await Promise.all([...imageAssets]);
  }

  renderProfileScreen = () => {
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        source={require("../images/background.jpg")}
      >
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ marginTop: 10 }}>
              <Image
                source={{ uri: this.props.profileImage }}
                style={{ width: 180, height: 180, borderRadius: 90 }}
              />
            </View>

            <View>
              <Text
                style={{
                  fontSize: 40,
                  marginTop: 15,
                  backgroundColor: "transparent",
                  color: "white"
                }}
              >
                {this.props.firstName} {this.props.lastName}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                margin: 10
              }}
            >
              <View style={styles.container}>
                <Rating
                  imageSize={30}
                  readonly
                  //starting value will equal all ratings together out of five
                  startingValue={4.5}
                />
              </View>
              <View style={styles.container}>
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: "transparent",
                    color: "white"
                  }}
                >
                  Deliveries: {}
                </Text>
              </View>
            </View>
          </View>
          <Card style={{ card: { backgroundColor: "grey" } }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 10, marginRight: 20 }}>
                <Avatar
                  source={require("../images/bretts_profile_pic.jpg")}
                  medium
                />
              </View>
              <View>
                <View style={{ marginBottom: 5 }}>
                  <Rating imageSize={30} readonly startingValue={4.5} />
                </View>
                <Text>Name: First Last </Text>
                <Text>Comments: Blah blah blah blah...</Text>
              </View>
            </View>
          </Card>

          <View
            style={{ alignItems: "center", marginTop: 10, marginBottom: 10 }}
          >
            <Text style={{ backgroundColor: "transparent", color: "white" }}>
              No More Reviews
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  };

  render() {
    ///////////////////////////////////////////////////////////////////
    //  Method taken from Expo documents
    if (!this.state.isReady) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <AppLoading
            startAsync={this._loadAssetsAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
          <Spinner size="large" />
        </View>
      );
    }
    return this.renderProfileScreen();
  }
}

const styles = {
  container: {
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

export default connect(mapStateToProps, actions)(Profile);
