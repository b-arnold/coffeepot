import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Navigate from './src/screens/Navigate';
import Profile from './src/screens/Profile';

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


export default class App extends React.Component {
  render() {
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
      PaymentConfirmationScreen: { screen: PaymentConfirmationScreen },
      ReceiptScreen: { screen: ReceiptScreen },
    })

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
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
