import React from 'react';

import { StyleSheet, Text, View, Platform, StatusBar, ScrollView, Image } from 'react-native';
import { Button, Icon, Divider, Avatar } from 'react-native-elements';
import firebase from 'firebase';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import Navigate from './src/screens/Navigate';
import Profile from './src/screens/Profile';
import GPSMap from './src/screens/GPSMap';

// CoffeePot Screens
import CoffeePotList from './src/screens/CoffeePotList';
import CoffeePot from './src/screens/CoffeePot';

// Delivery Screens
import ChooseDelivery from './src/screens/ChooseDelivery';
import ExistingOrdersList from './src/screens/ExistingOrdersList';
import ExistingOrder from './src/screens/ExistingOrder';
import PickLocationList from './src/screens/PickLocationList';
import PickedLocation from './src/screens/PickedLocation';
import PlaceOrder from './src/screens/PlaceOrder';

// Authenticaiton Screens
import LoginScreen from './src/screens/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';

// Payment Screens
import PaymentScreen from './src/screens/PaymentScreen';
import ReceiptSnapshot from './src/screens/ReceiptSnapshot';
import PaymentConfirmationScreen from './src/screens/PaymentConfirmationScreen';
import ReceiptScreen from './src/screens/ReceiptScreen';

// Constants
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from './src/constants/style';
import { GOOGLE_FIREBASE_CONFIG } from './src/constants/api_keys';

export default class App extends React.Component {
  ////////////////////////////////////////////////////////////////////////
  // Upon loading app, initialize firebase
  componentWillMount() {
    firebase.initializeApp(GOOGLE_FIREBASE_CONFIG);
  }

  render() {
    /////////////////////////////////////////////////////////////
    //This nav is used for testing purposes only.
    const ButtonNav = StackNavigator({
      Navigate: { screen: Navigate },
      CoffeePotList: { screen: CoffeePotList },
      CoffeePot: { screen: CoffeePot },
      ExistingOrdersList: { screen: ExistingOrdersList },
      ExistingOrder: { screen: ExistingOrder },
      LoginScreen: { screen: LoginScreen },
      CreateAccountScreen: { screen: CreateAccountScreen },
      ChooseDelivery: { screen: ChooseDelivery },
      PickLocationList: { screen: PickLocationList },
      PickedLocation: { screen: PickedLocation },
      Profile: { screen: Profile },
      ReceiptSnapshot: { screen: ReceiptSnapshot },
      PlaceOrder: { screen: PlaceOrder},
      PaymentScreen: { screen: PaymentScreen },
      GPSMap: { screen: GPSMap },
      PaymentConfirmationScreen: { screen: PaymentConfirmationScreen },
      ReceiptScreen: { screen: ReceiptScreen }
    })

    /////////////////////////////////////////////////////////////////////////
    //// This is used for the actual development of the app
    const Home = StackNavigator({
      CoffeePotList: { screen: CoffeePotList },
      CoffeePot: { screen: CoffeePot },
      GPSMap: { screen: GPSMap },
      Profile: { screen: Profile }
    });

    /////////////////////////////////////////////////////////////////////////
    //// Authentication Screens
    const Auth = StackNavigator({
      LoginScreen: { screen: LoginScreen },
      CreateAccount: { screen: CreateAccountScreen }
    });

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
            alignItems: 'center',
            alignContent: 'center',
            marginTop: 30
          }}
        >
          <Image
            source={require('./src/images/profile_icon.png')}
            style={{ width: 200, height: 200, borderRadius: 100 }} 
          />
          <Text style={{ marginBottom: 20, color: 'white', fontSize: 20 }}>
            John TestyMcTestFace
          </Text>
        </View>

        <View>
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    );

    const Drawer = DrawerNavigator({
      Home: { screen: Home },
      Profile: { screen: Profile },
      Delivery: { screen: Delivery }
    },{
      contentComponent: customDrawerComponent,
      drawerBackgroundColor: '#607D8B',
      contentOptions: {
        inactiveBackgroundColor: BUTTON_COLOR,
        activeBackgroundColor: BUTTON_COLOR,
        margin: 10,
        labelStyle: {
          color: SECONDARY_COLOR,
        },

      }
    })

    const MainNav = TabNavigator({
      Login: { screen: Auth },
      Main: { screen: Drawer },
    },{
      navigationOptions: {
        tabBarVisible: false
      },
      tabBarPosition: "bottom",
      swipeEnabled: false,
      lazy: true, // Each screen will not mount/load until user clicks on them
    })

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <MainNav />
        {/* <ButtonNav /> */}
      </View>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 25
    marginTop: Platform.OS === 'android' ? 24 : 0
  }
});
