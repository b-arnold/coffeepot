import { AppLoading, Asset } from "expo";
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { connect } from "react-redux";
import axios from "axios";
import firebase from "firebase";

import { Spinner } from "../components/Spinner";
import CountDown from "../components/CountDown";
import HomeCoffeePot from "../components/HomeCoffeePot";
import { store } from "../store";
import * as actions from "../actions";

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BUTTON_COLOR
} from "../constants/style";

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

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Coffee Pot",
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      paddingRight: 10,
      paddingLeft: 10
    },
    headerTitleStyle: {
      color: SECONDARY_COLOR,
      fontFamily: "brush-script-mt",
      fontSize: 30
    },
    headerTintColor: SECONDARY_COLOR,
    headerBackTitle: null,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon type="material-community" name="menu" color="grey" />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("PlaceOrder")}>
        <Icon type="font-awesome" name="coffee" color="grey" />
      </TouchableOpacity>
    ),
    tabBarIcon: () => {
      return <Icon name="home" size={30} color="grey" />;
    }
  });

  ///////////////////////////////////////////////////////////
  //// State of current CoffeePot
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      startTimer: false
    };
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    this.props.fetchMyCoffeePot(currentUser.uid);
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

    // // Load profile image into properties
    // firebase
    //   .database()
    //   .ref(`users/${currentUser.uid}/profile_image`)
    //   .on("value", snapshot => {
    //     this.props.profileImageChanged(snapshot.val());
    //   });
  }

  ///////////////////////////////////////////////////////////////////
  //  Method taken from Expo documents
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("../images/CoffeePot-Logo-White-02.png"),
      require("../images/background.jpg")
    ]);

    await Promise.all([...imageAssets]);
  }

  renderBttns() {
    const { navigate } = this.props.navigation;
    if (this.props.myCoffeePot != null) {
      return (
        <View>
          <Button
            icon={{
              name: "ios-navigate",
              type: "ionicon",
              size: 30
            }}
            title="Track Delivery"
            buttonStyle={styles.button_style}
            onPress={() => navigate("TrackDelivery")}
          />
          <Button
            icon={{
              name: "message",
              type: "entypo",
              size: 30
            }}
            title="Message Deliverer"
            buttonStyle={styles.button_style}
            onPress={() => navigate("MessageScreen")}
          />
          <Button
            icon={{
              name: "cross",
              type: "entypo",
              size: 30
            }}
            title="Cancel Coffee Pot"
            buttonStyle={styles.button_style}
            onPress={() => this.props.removeMyCoffeePot()}
          />
        </View>
      );
    }
  }

  renderCoffeePot = () => {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        source={require("../images/background.jpg")}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2, marginTop: 10 }}>
            <HomeCoffeePot startTimer={this.state.startTimer} />
          </View>
          <View style={{ flex: 3, justifyContent: "center" }}>
            {this.renderBttns()}
          </View>
        </View>
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
    return <View>{this.renderCoffeePot()}</View>;
  }
}
const styles = {
  background: {
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  button_style: {
    backgroundColor: BUTTON_COLOR,
    borderRadius: 5,
    margin: 10
  }
};

/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ coffee }) {
  if (coffee.myCoffeePot === null) {
    return { myCoffeePot: null };
  }
  return {
    hasCoffeePot: coffee.hasCoffeePot,
    time: coffee.time,
    drinks: coffee.drinks,
    myCoffeePot: coffee.myCoffeePot
  };
}

export default connect(mapStateToProps, actions)(HomeScreen);
