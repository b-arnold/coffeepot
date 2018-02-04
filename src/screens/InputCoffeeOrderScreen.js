/*
  Input Coffee Order Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';
import Navigate from './Navigate';

///////////////////////////////////////////////////////////
// Login Screen
// Logs users into the application or directs them to signup
// if they do not have an account
///////////////////////////////////////////////////////////
class InputCoffeeOrderScreen extends Component {
  static navigationOptions = {
    title: 'Order Cost',
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
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior='padding'
      >
        <View style={styles.containerStyle}>
          <View style={{ marginBottom: 20 }}>
            <FormInput
              placeholder="Customer Name"
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <FormInput
              placeholder="Drink Cost"
            />
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button
            title="Add Another Drink Cost"
            rounded
            buttonStyle={styles.addStyle}
          />
        </View>

        <View style={styles.containerStyle}>
          <View style={{ marginBottom: 20 }}>
            <FormInput
              placeholder="Tax Cost"
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <FormInput
              placeholder="Total Cost"
            />
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Button
            Confirm Order
            buttonStyle={styles.confirmOrder}
            title="Confirm Order"
            rounded
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

///////////////////////////////////////////////////////////
//Syles
const styles = {
  addStyle: {
    backgroundColor: BUTTON_COLOR,
    width: 200
  },
  confirmOrder: {
    backgroundColor: BUTTON_COLOR,
    width: 250
  },
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 50
  }
};

export default InputCoffeeOrderScreen;
