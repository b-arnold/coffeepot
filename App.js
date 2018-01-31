import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Navigate from './src/screens/Navigate';
import DeliveryLegal from './src/screens/DeliveryLegal';
import StandardLegal from './src/screens/StandardLegal';
import About from './src/screens/About';
import Settings from './src/screens/Settings';
import SideBarMenu from './src/screens/SideBarMenu';

///////////////////////////////////////////////////////////
// YOU'RE CURRENTLY WORKING IN DEVELOPMENT BRANCH
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// YOU'RE CURRENTLY WORKING IN DANNY'S BRANCH
///////////////////////////////////////////////////////////

export default class App extends React.Component {
  render() {
    const ButtonNav = StackNavigator({
      Navigate: { screen: Navigate },
      DeliveryLegal: { screen: DeliveryLegal },
      StandardLegal: { screen: StandardLegal },
      About: { screen: About },
      Settings: { screen: Settings },
      SideBarMenu: { screen: SideBarMenu }
    });

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
