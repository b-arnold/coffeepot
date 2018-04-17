import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
import { AppLoading, Asset } from "expo";
import { Card, Button, Avatar, Rating, Icon } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../actions";

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

class CustomerDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Customer Details",
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      paddingRight: 10,
      paddingLeft: 10
    },
    headerTintColor: SECONDARY_COLOR,
    headerBackTitle: null,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon type="material-community" name="menu" color="grey" />
      </TouchableOpacity>
    ),
    tabBarIcon: () => {
      return <Icon type="action" name="view-list" size={30} color="grey" />;
    }
  });

  ///////////////////////////////////////////////////////////
  //// State of current Deliver Screen
  state = {
    isReady: false
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

  renderCustomerCards = () => {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <Avatar
                source={require("../images/bretts_profile_pic.jpg")}
                large
              />
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>Name: First Last </Text>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity onPress={() => navigate("MessageScreen")}>
                  <Icon type="entypo" name="message" color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("CustomerDetails")}>
                  <Icon type="font-awesome" name="coffee" color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <Avatar
                source={require("../images/20525706_2013554065336740_3876920685561982293_n.jpg")}
                large
              />
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>Name: First Last </Text>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity onPress={() => navigate("MessageScreen")}>
                  <Icon type="entypo" name="message" color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("CustomerDetails")}>
                  <Icon type="font-awesome" name="coffee" color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <Avatar
                source={require("../images/12888708_10204399453705915_420030971035080375_o.jpg")}
                large
              />
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>Name: First Last </Text>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity onPress={() => navigate("MessageScreen")}>
                  <Icon type="entypo" name="message" color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("CustomerDetails")}>
                  <Icon type="font-awesome" name="coffee" color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <Avatar source={require("../images/0.jpeg")} large />
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>Name: First Last </Text>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity onPress={() => navigate("MessageScreen")}>
                  <Icon type="entypo" name="message" color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("CustomerDetails")}>
                  <Icon type="font-awesome" name="coffee" color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: 10, marginRight: 20 }}>
              <Avatar source={require("../images/0-2.jpeg")} large />
            </View>
            <View>
              <Text style={{ fontSize: 20 }}>Name: First Last </Text>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between"
                }}
              >
                <TouchableOpacity onPress={() => navigate("MessageScreen")}>
                  <Icon type="entypo" name="message" color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("CustomerDetails")}>
                  <Icon type="font-awesome" name="coffee" color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  };

  renderCustomerDetails = () => {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        source={require("../images/background.jpg")}
      >
        {this.props.myCoffeePot == null ? (
          <View style={styles.background}>
            <Text style={styles.text_style}>Start a Coffee Pot</Text>
            <Text style={styles.text_style}>to see Customer Details!</Text>
          </View>
        ) : (
          <View style={styles.background}>{this.renderCustomerCards()}</View>
        )}
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
    return <View>{this.renderCustomerDetails()}</View>;
  }
}

const styles = {
  background: {
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
    flex: 1
  },
  button_style: {
    backgroundColor: BUTTON_COLOR,
    width: 345,
    height: 45,
    borderWidth: 0,
    borderRadius: 5
  },
  text_style: {
    fontSize: 25,
    color: "white"
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

export default connect(mapStateToProps, actions)(CustomerDetails);
