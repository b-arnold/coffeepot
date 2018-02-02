import React from 'react';

import { StyleSheet, Text, View, Platform, StatusBar, ScrollView } from 'react-native';
import { Button, Icon, Divider, Avatar } from 'react-native-elements';
import firebase from 'firebase';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

// Navigate is used for screen testing purposes
import Navigate from './src/screens/Navigate';

//Side Bar Menu Screens
import Profile from './src/screens/Profile';

// GPS Screen
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

// Authenticaiton Screens
import LoginScreen from './src/screens/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';

// Payment Screens
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
      GPSMap: { screen: GPSMap },
      PaymentConfirmationScreen: { screen: PaymentConfirmationScreen },
      ReceiptScreen: { screen: ReceiptScreen }
    })

    /////////////////////////////////////////////////////////////////////////
    //// This is used for the actual development of the app
    const Home = StackNavigator({
      CoffeePotList: { screen: CoffeePotList },
      CoffeePot: { screen: CoffeePot },
      Profile: { screen: Profile },
      GPS: { screen: GPSMap }
    })

    //////////////////////////////////////////////////////////////////////////////
    // This component dictates the configuration of the drawer
    const customDrawerComponent = props => (
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            alignContent: "center"
          }}
        >
          <Avatar
            title='Test'
            xlarge
            rounded
            containerStyle={{ margin: 10 }}
          />
          <Text style={{ margin: 10, color: 'white' }}>John TestyMcTestFace</Text>
        </View>

        <View>
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    );

    const Drawer = DrawerNavigator({
      Home: { screen: Home },
      Profile: { screen: Profile }
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
      Login: { screen: LoginScreen },
      Main: { screen: Drawer }
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
        {/* <MainNav /> */}
        <ButtonNav />
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
