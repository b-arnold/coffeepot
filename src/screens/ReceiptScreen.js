/*
  Receipt Screen
  Developers: Brenden Miller, Richard Navarro,
    Brian Cajulis, Brett Arnold, Daniel Davis
*/
import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

///////////////////////////////////////////////////////////
// Receipt Screen
// Shows Receipt of coffee and allows user to rate transaction
///////////////////////////////////////////////////////////
class ReceiptScreen extends Component {
  static navigationOptions = {
    title: 'Receipt',
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
