import React, { Component } from "react";
import { ImageBackground, View, KeyboardAvoidingView } from "react-native";
import { Asset } from "expo";
import { Icon, Button, FormInput } from "react-native-elements";

import { connect } from "react-redux";

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
      return image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

class OrderSelectionScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Order Selection",
    //Changes the color of the header
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      paddingRight: 10,
      paddingLeft: 10
    },
    //Changes the color of the Header Title
    headerTitleStyle: {
      color: SECONDARY_COLOR
    },
    //Changes the color of the back button
    headerTintColor: SECONDARY_COLOR,
    tabBarIcon: () => {
      return <Icon name="grid" type="entypo" size={30} color="grey" />;
    }
  });

  ///////////////////////////////////////////////////////////////////
  //  Method taken from Expo documents
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("../images/CoffeePot-Logo-White-02.png"),
      require("../images/background.jpg")
    ]);

    await Promise.all([...imageAssets]);
  }

  standardPaymentPress = () => {
    const { drinkName, specialInstructions } = this.props;
    const order = this.props.orderID;
    this.props.createOrder(drinkName, specialInstructions, order);
    this.props.navigation.navigate("PaymentScreen");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        source={require("../images/background.jpg")}
      >
        <KeyboardAvoidingView>
          <View style={{ marginBottom: 10, marginTop: 30 }}>
            <FormInput
              placeholder="Drink Name"
              value={this.props.drinkName}
              inputStyle={{ color: "black", left: 10, marginTop: 7 }}
              onChangeText={text => this.props.drinkNameChange(text)}
              containerStyle={{
                backgroundColor: "white",
                height: 50,
                borderRadius: 7
              }}
            />
            <View style={{ marginTop: 20 }}>
              <FormInput
                placeholder="Special Instructions"
                value={this.props.specialInstructions}
                inputStyle={{ color: "black", left: 10, marginTop: 7 }}
                onChangeText={text =>
                  this.props.specialInstructionsChange(text)
                }
                containerStyle={{
                  backgroundColor: "white",
                  height: 100,
                  borderRadius: 7
                }}
              />
            </View>

            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Button
                title="Payment Options"
                onPress={this.standardPaymentPress}
                rounded
                buttonStyle={{
                  backgroundColor: "#E55300",
                  width: 270,
                  borderRadius: 7
                }}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

function mapStateToProps({ order }) {
  return {
    drinkName: order.drinkName,
    specialInstructions: order.specialInstructions,
    orderID: order.orderID
  };
}

export default connect(mapStateToProps, actions)(OrderSelectionScreen);
