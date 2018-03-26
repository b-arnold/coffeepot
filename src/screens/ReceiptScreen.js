/*
  Receipt Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, Card, Icon } from 'react-native-elements';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

///////////////////////////////////////////////////////////
// Receipt Screen
// Shows Receipt of coffee and allows user to rate transaction
///////////////////////////////////////////////////////////
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

class ReceiptScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Receipt',
    headerStyle: {
        backgroundColor: PRIMARY_COLOR,
        paddingRight: 10,
        paddingLeft: 10
    },
    headerTitleStyle: {
        color: SECONDARY_COLOR
    },
    headerTintColor: SECONDARY_COLOR,
    headerBackTitle: null,
    headerLeft: null,
    tabBarVisible: false
})

  /////////////////////////////////////////////////////////
  // Main render method
  /////////////////////////////////////////////////////////
  render() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })]
    })
    return (
      <ScrollView>
        <View>
          <Card style={styles.cardStyle}>
            <View style={{ margin: 10 }}>
              <View style={styles.cardTextStyle}>
                <Text>Order: </Text>
              </View>

              <View style={styles.cardTextStyle}>
                <Text>Drink Cost: </Text>
              </View>

              <View style={styles.cardTextStyle}>
                <Text>Taxes: </Text>
              </View>

              <View style={styles.cardTextStyle}>
                <Text>Delivery: </Text>
              </View>

              <View style={styles.totalTextStyle}>
                <Text>Total: </Text>
              </View>
            </View>
          </Card>
        </View>

        <View style={{ marginTop: 20}}>
          <Button
            title="Email Receipt"
            buttonStyle={styles.emailButtonStyle}
            rounded
            onPress={exports.sendEmailConfirmation = functions.database.ref('/users/{uid}').onWrite((event) => { return null; }
            )}
          />
        </View>

        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Button
            title="Give Review"
            buttonStyle={styles.buttonStyle}
            rounded
          />
          <Card containerStyle={{ width: 350, padding: 10, marginTop: 0, borderRadius: 30 }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={require('../images/ratings_example_icon.png')}
                style={{ width: 100, height: 20 }}
              />
            </View>
          </Card>
          <Button
            title="Leave A Comment"
            buttonStyle={styles.buttonStyle}
            rounded
          />
          <Button
            title="Return Home"
            buttonStyle={styles.buttonStyle}
            rounded
            onPress={() => this.props.navigation.dispatch(resetAction)}
          />
        </View>
      </ScrollView>
    );
  }
}

///////////////////////////////////////////////////////////
//Syles
const styles = {
  buttonStyle: {
    width: 350,
    backgroundColor: BUTTON_COLOR,
    marginBottom: 5,
    marginTop: 5
  },
  emailButtonStyle: {
    width: 350,
    backgroundColor: BUTTON_COLOR,
    marginBottom: 5,
    marginTop: 5,
    height: 65
  },
  cardStyle: {

  },
  cardTextStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  totalTextStyle: {
    marginTop: 10,
    marginBottom: 10,
    left: 150
  }
};

export default ReceiptScreen;
