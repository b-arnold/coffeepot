import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { Button, Card, Avatar, Icon } from "react-native-elements";
import { AppLoading, Asset } from "expo";

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

class ExistingOrdersList extends Component {
  static navigationOptions = {
    title: "Existing Orders",
    headerStyle: {
      backgroundColor: PRIMARY_COLOR
    },
    headerTitleStyle: {
      color: SECONDARY_COLOR
    },
    headerTintColor: SECONDARY_COLOR,
    tabBarVisible: false
  };

  ///////////////////////////////////////////////////////////////////
  //  Method taken from Expo documents
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("../images/background.jpg")]);

    await Promise.all([...imageAssets]);
  }

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
        <View>
          {/* This file is here for scaffolding, but will be replaced */}
          <ScrollView>
            <View style={styles.view_bttn}>
              <Button
                iconRight={{
                  name: "map-marker",
                  type: "font-awesome",
                  size: 25
                }}
                title="GPS View"
                buttonStyle={{ backgroundColor: BUTTON_COLOR }}
                rounded
                onPress={() => navigate("GPSMap")}
              />
            </View>

            <TouchableOpacity onPress={() => navigate("ExistingOrder")}>
              <Card>
                <View style={styles.view_card}>
                  <View style={styles.view_avatar}>
                    <Avatar title="Test" large />
                  </View>

                  <View style={styles.view_text}>
                    <Text> Location: </Text>
                    <Text> Order: </Text>
                    <Text> Time Left: </Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>

            <Card>
              <View style={styles.view_card}>
                <View style={styles.view_avatar}>
                  <Avatar title="Test" large />
                </View>

                <View style={styles.view_text}>
                  <Text> Location: </Text>
                  <Text> Order: </Text>
                  <Text> Time Left: </Text>
                </View>
              </View>
            </Card>

            <Card>
              <View style={styles.view_card}>
                <View style={styles.view_avatar}>
                  <Avatar title="Test" large />
                </View>

                <View style={styles.view_text}>
                  <Text> Location: </Text>
                  <Text> Order: </Text>
                  <Text> Time Left: </Text>
                </View>
              </View>
            </Card>

            <Card>
              <View style={styles.view_card}>
                <View style={styles.view_avatar}>
                  <Avatar title="Test" large />
                </View>

                <View style={styles.view_text}>
                  <Text> Location: </Text>
                  <Text> Order: </Text>
                  <Text> Time Left: </Text>
                </View>
              </View>
            </Card>

            <Card>
              <View style={styles.view_card}>
                <View style={styles.view_avatar}>
                  <Avatar title="Test" large />
                </View>

                <View style={styles.view_text}>
                  <Text> Location: </Text>
                  <Text> Order: </Text>
                  <Text> Time Left: </Text>
                </View>
              </View>
            </Card>

            <Card>
              <View style={styles.view_card}>
                <View style={styles.view_avatar}>
                  <Avatar title="Test" large />
                </View>

                <View style={styles.view_text}>
                  <Text> Location: </Text>
                  <Text> Order: </Text>
                  <Text> Time Left: </Text>
                </View>
              </View>
            </Card>

            <Card>
              <View style={styles.view_card}>
                <View style={styles.view_avatar}>
                  <Avatar title="Test" large />
                </View>

                <View style={styles.view_text}>
                  <Text> Location: </Text>
                  <Text> Order: </Text>
                  <Text> Time Left: </Text>
                </View>
              </View>
            </Card>

            <Card>
              <View style={styles.view_card}>
                <View style={styles.view_avatar}>
                  <Avatar title="Test" large />
                </View>

                <View style={styles.view_text}>
                  <Text> Location: </Text>
                  <Text> Order: </Text>
                  <Text> Time Left: </Text>
                </View>
              </View>
            </Card>

            <Text style={styles.end_text}>No More Coffee Pots</Text>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = {
  view_bttn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  view_card: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  view_avatar: {
    flexDirection: "row"
  },
  view_text: {
    justifyContent: "space-between"
  },
  end_text: {
    margin: 10,
    textAlign: "center"
  },
  button_style: {
    backgroundColor: BUTTON_COLOR
  }
};

export default ExistingOrdersList;
