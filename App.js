import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, Platform, StatusBar, ScrollView, Image } from 'react-native';
import { Button, Icon, Divider, Avatar } from 'react-native-elements';
import firebase from 'firebase';
import { createStore, compose, applyMiddleware } from 'redux';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store'

// Navigate is used for screen testing purposes
import Navigate from './src/screens/Navigate';

//Side Bar Menu Screens
import About from './src/screens/About';
import Settings from './src/screens/Settings';
import StandardLegal from './src/screens/StandardLegal';
import DeliveryLegal from './src/screens/DeliveryLegal';

// CoffeePot Screens
import CoffeePotList from './src/screens/CoffeePotList';
import CoffeePot from './src/screens/CoffeePot';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/Profile';

// GPS Screens
import GPSMap from './src/screens/GPSMap';
import CoffeePotGPS from './src/screens/CoffeePotGPS'

// Extensions from HomeScreen
import MessageScreen from './src/screens/MessageScreen';
import TrackDelivery from './src/screens/TrackDelivery';

// Delivery Screens
import ChooseDelivery from './src/screens/ChooseDelivery';
import ExistingOrdersList from './src/screens/ExistingOrdersList';
import ExistingOrder from './src/screens/ExistingOrder';
import PickLocationList from './src/screens/PickLocationList';
import PickedLocation from './src/screens/PickedLocation';
import PlaceOrder from './src/screens/PlaceOrder';
import OrderGPSMap from './src/screens/OrderGPSMap';
import InputCoffeeOrderScreen from './src/screens/InputCoffeeOrderScreen';

// Authenticaiton Screens
import LoginScreen from './src/screens/LoginScreen';
import LogOut from './src/screens/LogOut';

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

  ////////////////////////////////////////////////////////////////////////
  // Upon loading app, loads Brush Script MT for header
  async componentDidMount() {
    Font.loadAsync({
      'brush-script-mt': require('./assets/fonts/BRUSHSCI.ttf')
    });
  }

  render() {
    const ProfileNav = StackNavigator({
      Profile: { screen: Profile },
      PlaceOrder: { screen: PlaceOrder }
    })

    const SettingNav = StackNavigator({
      Settings: { screen: Settings }
    })

    const StandardLegalNav = StackNavigator({
      StandardLegal: { screen: StandardLegal }
    })

    /////////////////////////////////////////////////////////////////////////
    //// Authentication Screens
    const Auth = StackNavigator({
      LoginScreen: { screen: LoginScreen }
    });

    const Delivery = StackNavigator({
      ChooseDelivery: { screen: ChooseDelivery },
      PickLocationList: { screen: PickLocationList },
      PickedLocation: { screen: PickedLocation },
      ExistingOrdersList: { screen: ExistingOrdersList },
      ExistingOrder: { screen: ExistingOrder },
      GPSMap: { screen: GPSMap },
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
      Legal: { screen: StandardLegal },
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
    });

    const HomeNav = TabNavigator({
      HomeScreen: { screen: HomeScreenNav },
      CoffeePotList: { screen: CoffeePotListNav },
      GPS: { screen: GPSNav },
      Profile: { screen: ProfileNav }
    }, {
      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: 'black'
        }
      }
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

          <Avatar
            source={require('./src/images/Profile_Pic.jpg')}
            style={{ width: 200, height: 200, borderRadius: 100 }}
            rounded
            xlarge
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

    const Drawer = DrawerNavigator(
    {
      Delivery: { screen: Delivery },
      Home: { screen: HomeNav },
      Profile: { screen: ProfileNav },
      Settings: { screen: SettingNav },
      Legal: { screen: StandardLegalNav },
      LogOut: { screen: LogOut },
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
    });

    const MainNav = TabNavigator(
    {
      Login: { screen: Auth },
      Main: { screen: Drawer },
    },
    {
      navigationOptions: {
        tabBarVisible: false
    },
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      lazy: true, // Each screen will not mount/load until user clicks on them
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar
            barStyle='light-content'
          />
          {/* <ButtonNav /> */}
          <MainNav />
        </View>
      </Provider>
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
