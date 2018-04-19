import React, { Component, AsyncStorage } from "react";
import { Font } from "expo";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import { Button, Icon, Divider, Avatar } from "react-native-elements";
import firebase from "firebase";
import { connect } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  DrawerItems
} from "react-navigation";

//Side Bar Menu Screens
import About from "../screens/About";
import Settings from "../screens/Settings";
import StandardLegal from "../screens/StandardLegal";
import DeliveryLegal from "../screens/DeliveryLegal";

// Settings Screens
import EditProfile from "../screens/EditProfile";

// CoffeePot Screens
import CoffeePotList from "../screens/CoffeePotList";
import CoffeePot from "../screens/CoffeePot";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import GPSMap from "../screens/GPSMap";
import CoffeePotGPS from "../screens/CoffeePotGPS";
import OrderSelectionScreen from "../screens/OrderSelectionScreen";

// Extensions from HomeScreen
import MessageScreen from "../screens/MessageScreen";
import TrackDelivery from "../screens/TrackDelivery";

// Delivery Screens
import ChooseDelivery from "../screens/ChooseDelivery";
import ExistingOrdersList from "../screens/ExistingOrdersList";
import ExistingOrder from "../screens/ExistingOrder";
import PickLocationList from "../screens/PickLocationList";
import PickedLocation from "../screens/PickedLocation";
import PlaceOrder from "../screens/PlaceOrder";
import OrderGPSMap from "../screens/OrderGPSMap";
import InputCoffeeOrderScreen from "../screens/InputCoffeeOrderScreen";
import DeliverScreen from "../screens/DeliverScreen";
import CustomerGPS from "../screens/CustomerGPS";
import CustomerDetails from "../screens/CustomerDetails";

// Authenticaiton Screens
import LoginScreen from "../screens/LoginScreen";
import LogOut from "../screens/LogOut";
import FacebookLoginScreen from "../screens/FacebookLoginScreen";

// Payment Screens
import PaymentScreen from "../screens/PaymentScreen";
import ReceiptSnapshot from "../screens/ReceiptSnapshot";
import PaymentConfirmationScreen from "../screens/PaymentConfirmationScreen";
import ReceiptScreen from "../screens/ReceiptScreen";

// Constants
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  BUTTON_COLOR
} from "../constants/style";
import * as actions from "../actions";

class Navigation extends Component {
  state = {
    hScreen: false,
    cpScreen: false,
    gpsScreen: false,
    profScreen: false
  };

  ////////////////////////////////////////////////////////////////////////
  // Upon loading app, loads Brush Script MT for header
  async componentDidMount() {
    Font.loadAsync({
      "brush-script-mt": require("../../assets/fonts/BRUSHSCI.ttf")
    });
  }

  render() {
    const ProfileNav = StackNavigator({
      Profile: { screen: Profile },
      PlaceOrder: { screen: PlaceOrder }
    });

    const SettingNav = StackNavigator({
      Settings: { screen: Settings },
      EditProfile: { screen: EditProfile }
    });

    const StandardLegalNav = StackNavigator({
      StandardLegal: { screen: StandardLegal }
    });

    /////////////////////////////////////////////////////////////////////////
    //// Authentication Screens
    const Auth = StackNavigator({
      LoginScreen: { screen: LoginScreen },
      Facebook: { screen: FacebookLoginScreen }
    });

    /////////////////////////////////////////////////////////////////////////
    //// This is used for the actual development of the app (HOME SCREEN)

    const HomeScreenNav = StackNavigator({
      HomeScreen: { screen: HomeScreen },
      TrackDelivery: { screen: TrackDelivery },
      MessageScreen: { screen: MessageScreen },
      PlaceOrder: { screen: PlaceOrder },
      PaymentScreen: { screen: PaymentScreen },
      PaymentConfirmationScreen: { screen: PaymentConfirmationScreen },
      ReceiptScreen: { screen: ReceiptScreen },
      Legal: { screen: StandardLegal }
    });

    const GPSNav = StackNavigator({
      CoffeePotGPS: { screen: CoffeePotGPS },
      PlaceOrder: { screen: PlaceOrder },
      PaymentScreen: { screen: PaymentScreen },
      PaymentConfirmationScreen: { screen: PaymentConfirmationScreen },
      ReceiptScreen: { screen: ReceiptScreen },
      Legal: { screen: StandardLegal },
      PickedLocation: { screen: PickedLocation }
    });

    const CoffeePotListNav = StackNavigator({
      CoffeePotList: { screen: CoffeePotList },
      PlaceOrder: { screen: PlaceOrder },
      PaymentScreen: { screen: PaymentScreen },
      PaymentConfirmationScreen: { screen: PaymentConfirmationScreen },
      ReceiptScreen: { screen: ReceiptScreen },
      Legal: { screen: StandardLegal },
      OrderSelectionScreen: { screen: OrderSelectionScreen }
    });

    const Delivery = StackNavigator({
      DeliverScreen: { screen: DeliverScreen },
      ChooseDelivery: { screen: ChooseDelivery },
      PickLocationList: { screen: PickLocationList },
      PickedLocation: { screen: PickedLocation },
      ExistingOrdersList: { screen: ExistingOrdersList },
      ExistingOrder: { screen: ExistingOrder },
      MessageScreen: { screen: MessageScreen },
      GPSMap: { screen: GPSMap }
    });

    const CustomerGPSNav = StackNavigator({
      CustomerGPS: { screen: CustomerGPS }
    });

    const CustomerDetailsNav = StackNavigator({
      CustomerDetails: { screen: CustomerDetails }
    });

    const HomeNav = TabNavigator(
      {
        HomeScreen: { screen: HomeScreenNav },
        CoffeePotList: { screen: CoffeePotListNav },
        GPS: { screen: GPSNav },
        Profile: { screen: ProfileNav }
      },
      {
        tabBarOptions: {
          showLabel: false,
          style: {
            backgroundColor: "black"
          }
        }
      }
    );

    const DeliverNav = TabNavigator(
      {
        DeliverScreen: { screen: Delivery },
        CustomerDetails: { screen: CustomerDetailsNav },
        GPSNav: { screen: CustomerGPSNav }
      },
      {
        tabBarOptions: {
          showLabel: false,
          style: {
            backgroundColor: "black"
          }
        }
      }
    );

    //////////////////////////////////////////////////////////////////////////////
    // This component dictates the configuration of the drawer
    const customDrawerComponent = props => (
      <ScrollView>
        <View
          style={{
            // flex: 1,
            alignItems: "center",
            alignContent: "center",
            marginTop: 30
          }}
        >
          <Image
            source={{ uri: this.props.profileImage }}
            style={{ width: 150, height: 150, borderRadius: 75 }}
          />
          <Text
            style={{
              marginTop: 10,
              marginBottom: 20,
              color: "white",
              fontSize: 20
            }}
          >
            {this.props.firstName} {this.props.lastName}
          </Text>
        </View>

        <View>
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    );

    const Drawer = DrawerNavigator(
      {
        Homeapp: { screen: HomeNav },
        Delivery: { screen: DeliverNav },
        Settings: { screen: SettingNav },
        Legal: { screen: StandardLegalNav },
        LogOut: { screen: LogOut }
      },
      {
        contentComponent: customDrawerComponent,
        drawerBackgroundColor: "#545454",
        contentOptions: {
          inactiveBackgroundColor: "#494949",
          activeBackgroundColor: "#434343",
          labelStyle: {
            color: SECONDARY_COLOR,
            alignItems: "center",
            margin: 20
          }
        }
      }
    );

    const MainNav = TabNavigator(
      {
        Login: { screen: Auth },
        Main: { screen: Drawer }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        tabBarPosition: "bottom",
        swipeEnabled: false,
        lazy: true // Each screen will not mount/load until user clicks on them
      }
    );

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <ButtonNav /> */}
        <MainNav />
      </View>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? 24 : 0
  }
});

/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ prof }) {
  return {
    firstName: prof.firstName,
    lastName: prof.lastName,
    profileImage: prof.profileImage
  };
}

export default connect(mapStateToProps, actions)(Navigation);
