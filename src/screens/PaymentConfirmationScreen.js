/*
  Payment Confirmation Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

///////////////////////////////////////////////////////////
// Payment Confirmation Screen
// prompts user to look over total cost and to confirm order
///////////////////////////////////////////////////////////
class PaymentConfirmationScreen extends Component {
  static navigationOptions = {
    title: 'Review',
    headerStyle: {
      backgroundColor: PRIMARY_COLOR
    },
    headerTitleStyle: {
      color: SECONDARY_COLOR
    },
    headerTintColor: SECONDARY_COLOR
  }

  /////////////////////////////////////////////////////////
  // Main render method
  /////////////////////////////////////////////////////////
  render() {
    return (
      <View>
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

        <View style={styles.textStyle}>
          <Text>Please Confirm Your Order</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button
            title="Return to Order"
            rounded
            buttonStyle={styles.buttonStyle}
          />

          <Button
            title="Confirm"
            rounded
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </View>
    );
  }
}

///////////////////////////////////////////////////////////
//Syles
const styles = {
  buttonStyle: {
    width: 200,
    backgroundColor: BUTTON_COLOR,
    marginBottom: 20,
    marginTop: 20
  },
  cardStyle: {

  },
  textStyle: {
    alignItems: 'center',
    marginTop: 30
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

export default PaymentConfirmationScreen;
