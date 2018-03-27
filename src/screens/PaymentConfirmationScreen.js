/*
  Payment Confirmation Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';
import * as actions from '../actions';

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
    headerTintColor: SECONDARY_COLOR,
    tabBarVisible: false
  }
  

  onConfirmPress = () => {
    const timeDate = new Date();
    time = timeDate.toString();
    this.props.orderCreate({name: name || 'name', location: location || 'Starbucks, Azusa', 
    drink: drink || 'drink', time: time || '30180101:010101', cost: '$0.00'});
    this.props.startTime(true);
    const drinks = this.props.drinks + 1;
    this.props.addOrder(drinks);
    console.log('Coffee Pot initialized');

    this.props.navigation.navigate('ReceiptScreen');
  } 

  /////////////////////////////////////////////////////////
  // Main render method
  /////////////////////////////////////////////////////////
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View>
          <Card style={styles.cardStyle}>
            <View style={{ margin: 10 }}>
              <View style={styles.cardTextStyle}>
                <Text>Order: {this.props.drink}</Text>
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
            onPress = {() => navigate('PlaceOrder')}
          />

          <Button
            title="Confirm"
            rounded
            buttonStyle={styles.buttonStyle}
            onPress = {this.onConfirmPress}
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

function mapStateToProps({ coffee }) {
  return {
      time: coffee.time,
      drinks: coffee.drinks
  };
}

export default connect(mapStateToProps, actions)(PaymentConfirmationScreen);
