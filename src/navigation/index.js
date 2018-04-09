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

// CoffeePot Screens
import CoffeePotList from "../screens/CoffeePotList";
import CoffeePot from "../screens/CoffeePot";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import GPSMap from "../screens/GPSMap";
import CoffeePotGPS from "../screens/CoffeePotGPS";

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
    user: null,
    firstName: "",
    lastName: ""
  };

  componentWillMount() {
    this.props.getCurrentUser();
    // this.setState({ user: currentUser });
    // console.log(this.state.user);
  }

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
      Settings: { screen: Settings }
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
      OrderGPSMap: { screen: OrderGPSMap },
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
      Legal: { screen: StandardLegal }
    });

    const HomeNav = TabNavigator(
      {
        HomeScreen: { screen: HomeScreenNav },
        CoffeePotList: { screen: CoffeePotListNav },
        GPS: { screen: CoffeePotGPS },
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

    /////////////////////////////////////////////////////////////////////////
    //// Authentication Screens
    const Delivery = StackNavigator({
      ChooseDelivery: { screen: ChooseDelivery },
      PickLocationList: { screen: PickLocationList },
      PickedLocation: { screen: PickedLocation },
      ExistingOrdersList: { screen: ExistingOrdersList },
      ExistingOrder: { screen: ExistingOrder },
      GPSMap: { screen: GPSMap }
    });

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
          <Avatar
            source={require("../images/Profile_Pic.jpg")}
            style={{ width: 200, height: 200, borderRadius: 100 }}
            rounded
            xlarge
          />
          <Text style={{ marginBottom: 20, color: "white", fontSize: 20 }}>
            {this.state.firstName} {this.state.lastName}
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
        Delivery: { screen: Delivery },
        Settings: { screen: SettingNav },
        Legal: { screen: StandardLegalNav },
        LogOut: { screen: LogOut }
      },
      {
        contentComponent: customDrawerComponent,
        drawerBackgroundColor: "#545454",
        contentOptions: {
          inactiveBackgroundColor: "#494949",
          activeBackgroundColor: "#494949",
          margin: 20,
          labelStyle: {
            color: SECONDARY_COLOR,
            alignItems: "center"
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
    user: prof.user
  };
}

export default connect(mapStateToProps, actions)(Navigation);
