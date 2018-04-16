import React, { Component } from "react";
import {
  View,
  Text,
  Geolocation,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import { Button, Icon, Card } from "react-native-elements";
import { connect } from "react-redux";
import MapView, { Marker, Callout } from "react-native-maps";

import * as actions from "../actions";
import * as urlBuilder from "../utility/url_builder";

import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BUTTON_COLOR
} from "../constants/style";

class CustomerGPS extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Customer Locations",
    headerStyle: {
      backgroundColor: PRIMARY_COLOR,
      paddingRight: 10,
      paddingLeft: 10
    },
    headerTitleStyle: {
      color: SECONDARY_COLOR
    },
    headerTintColor: SECONDARY_COLOR,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
        <Icon type="material-community" name="menu" color="grey" />
      </TouchableOpacity>
    ),
    tabBarIcon: () => {
      return <Icon name="location-on" type="material" size={30} color="grey" />;
    }
  });

  ///////////////////////////////////////////////////////////////////////////////
  //defining state
  //The 'region' state object will contain latitude and longitude of the user
  state = { region: {} };

  ///////////////////////////////////////////////////////////////////////////////
  // Before anything is loaded, this will set the region to the user's current position
  // Then it will fetch the places that is nearby the user's location.  (nearby is determined by the radius set in "url_builder.js")
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        // Changes the state of region to user's current location
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
        //The action 'fetchPlaces' will search for places with the label 'cafe' with respect to the 'region' state (user's current position)
        this.props.fetchPlaces(this.state.region);
      },
      error => console.log(new Date(), error),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 3000 }
    );
  }

  ///////////////////////////////////////////////////////////////////////////////
  // Renders the map with specific settings and calls the render marker method
  renderMap() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          mapType="hybrid"
          initialRegion={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0021
          }}
          showsUserLocation={true}
          showsPointsOfInterest={false}
          showsMyLocationButton={true}
          rotateEnabled={false}
        >
          {/* {this.renderMarkers()} */}
        </MapView>
      </View>
    );
  }

  ///////////////////////////////////////////////////////////////////////////////
  // Main Render Method
  render() {
    const { navigate } = this.props.navigation;
    //console.log(this.state.region.latitude);
    if (this.state.region.latitude !== undefined) {
      return <View style={styles.container}>{this.renderMap()}</View>;
    }
    return (
      <View style={styles.loadingStyle}>
        <ActivityIndicator size="large" color={BUTTON_COLOR} />
      </View>
    );
  }
}

//////////////////////////////////////////////////////
//Styles Object
const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  button_style: {
    width: 130,
    backgroundColor: BUTTON_COLOR
  },
  content: {
    flex: 1,
    flexDirection: "row"
  },
  image_style: {
    margin: 5,
    width: 80,
    height: 70
  },
  description: {
    flex: 1,
    flexDirection: "column",
    margin: 10
  },
  bold: {
    fontWeight: "bold"
  },
  loadingStyle: {
    flex: 1,
    justifyContent: "center"
  }
};

export default CustomerGPS;
