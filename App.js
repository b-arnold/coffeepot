import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Navigate from './src/screens/Navigate';
import CoffeePotList from './src/screens/CoffeePotList';
import CoffeePot from './src/screens/CoffeePot';
import ExistingOrdersList from './src/screens/ExistingOrdersList';
import ExistingOrder from './src/screens/ExistingOrdersList';
import LoginScreen from './src/screens/LoginScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';

///////////////////////////////////////////////////////////
// YOU'RE CURRENTLY WORKING IN DEVELOPMENT BRANCH
///////////////////////////////////////////////////////////

export default class App extends React.Component {
  render() {
    const ButtonNav = StackNavigator({
      Navigate: { screen: Navigate },
      CoffeePotList: { screen: CoffeePotList },
      CoffeePot: { screen: CoffeePot },
      ExistingOrdersList: { screen: ExistingOrdersList },
      ExistingOrder: { screen: ExistingOrder },
      LoginScreen: { screen: LoginScreen },
      CreateAccountScreen: { screen: CreateAccountScreen }
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
