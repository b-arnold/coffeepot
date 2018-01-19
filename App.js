import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import CoffeePotList from './src/screens/CoffeePotList';
import ExistingOrdersList from './src/screens/ExistingOrdersList';
import Navigate from './src/screens/Navigate';

export default class App extends React.Component {
  render() {
    const ButtonNav = StackNavigator({
      Navigate: { screen: Navigate },
      CoffeePotList: { screen: CoffeePotList },
      ExistingOrdersList: { screen: ExistingOrdersList }
    })

    return (
      <View style={styles.container}>
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
