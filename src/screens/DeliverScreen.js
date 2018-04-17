import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { AppLoading, Asset } from "expo";
import { Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../actions";
import firebase from "firebase";

import { Spinner } from "../components/Spinner";
import CountDown from "../components/CountDown";
import HomeCoffeePot from "../components/HomeCoffeePot";

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

class DeliverScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Coffee Pot Delivery",
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      paddingRight: 10,
      paddingLeft: 10
    },
    headerTitleStyle: {
      color: SECONDARY_COLOR,
      fontFamily: "brush-script-mt",
      fontSize: 25
    },
    headerTintColor: SECONDARY_COLOR,
    headerBackTitle: null,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon type="material-community" name="menu" color="grey" />
      </TouchableOpacity>
    ),
    tabBarIcon: () => {
      return <Icon name="home" size={30} color="grey" />;
    }
  });

  componentWillMount() {
    const { currentUser } = firebase.auth();
    this.props.fetchMyCoffeePot(currentUser.uid);
  }

  ///////////////////////////////////////////////////////////
  //// State of current Deliver Screen
  state = {
    isReady: false,
    balance: 0.0
  };

  ///////////////////////////////////////////////////////////////////
  //  Method taken from Expo documents
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("../images/CoffeePot-Logo-White-02.png"),
      require("../images/background.jpg")
    ]);

    await Promise.all([...imageAssets]);
  }

  renderRemoveBttn = () => {
    if (this.props.myCoffeePot != null) {
      return (
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
      );
    }
  };

  renderDeliverScreen = () => {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        source={require("../images/background.jpg")}
      >
        <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 15 }}>
          <View style={{ flex: 2, marginTop: 10 }}>
            <HomeCoffeePot />
          </View>
          {this.props.myCoffeePot !== null ? (
            <View
              style={{
                flex: 3,
                justifyContent: "flex-end",
                paddingBottom: 15,
                alignItems: "center"
              }}
            >
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: "white",
                    backgroundColor: "transparent"
                  }}
                >
                  Balance: ${this.state.balance}
                </Text>
              </View>
              <View style={{ margin: 10 }}>
                <Button
                  icon={{
                    name: "check",
                    type: "navigation",
                    size: 30
                  }}
                  title="Update Delivery"
                  buttonStyle={styles.button_style}
                  onPress={() => navigate("TrackDelivery")}
                />
              </View>
              <View style={{ margin: 10 }}>{this.renderRemoveBttn()}</View>
            </View>
          ) : (
            <View />
          )}
        </View>
      </ImageBackground>
    );
  };

  render() {
    const { navigate } = this.props.navigation;
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
    if (this.props.myCoffeePot !== null) {
      return <View>{this.renderDeliverScreen()}</View>;
    } else {
      return (
        <ImageBackground
          style={{
            width: "100%",
            height: "100%"
          }}
          source={require("../images/background.jpg")}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: "transparent",
              justifyContent: "center",
              flex: 1
            }}
          >
            <Button
              title="Start a Coffee Pot"
              buttonStyle={styles.button_style}
              onPress={() => navigate("ChooseDelivery")}
            />
          </View>
        </ImageBackground>
      );
    }
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
    width: 345,
    height: 60,
    borderWidth: 0,
    borderRadius: 5
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

export default connect(mapStateToProps, actions)(DeliverScreen);
