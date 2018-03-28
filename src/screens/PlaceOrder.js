import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, FormInput } from 'react-native-elements';
import * as actions from '../actions';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

const window_width = Dimensions.get('window').width;

export class PlaceOrder extends Component {
    static navigationOptions = {
        title: 'Place Order',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR

        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR,
        tabBarVisible: false
    }


    // Add order render method to display when no order has been added
    renderAddOrder() {
      return (
        <View style={styles.button_container}>


          <Button
              buttonStyle={styles.addBttn_style}
              title='Add Additional Order'
              rounded
          />
        </View>
      );
    }

    // Actions to be called place order button is pressed
    placeOrderPress() {
      const { navigate } = this.props.navigation;

      navigate('PaymentScreen');
    }

    // Update Order
    onOrderChange = text => {
      this.props.orderChange(text);
    }

    //Render Order Card
    renderCard() {
      return (
        <View>
          <Card>
              <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.title_style}>Order:</Text>
                    <View>
                      <FormInput
                        placeholder="Drink Name"
                        inputStyle={{ color: 'black', marginTop: 7 }}
                        containerStyle={{
                          backgroundColor: 'white',
                          height: 50,
                          borderRadius: 7,
                          width: 300
                        }}
                        value={this.props.order}
                        onChangeText={this.props.onOrderChange}
                      />

    onButtonPress(){
        const { navigate } = this.props.navigation;
        const {name, location, drink} = this.props;
        //this.props.orderCreate({name: name || 'name', location: location || 'Starbucks, Azusa', drink: drink || 'drink'});
        navigate('PaymentScreen');
    }

    renderLocation() {
        const { navigate } = this.props.navigation;
        if (this.props.places !== null) {
            return (
                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            flex={1}
                            onPress={() => navigate('OrderGPSMap')}
                        >
                            Location:
                        </Text>
                        {/*<Text>{this.props.places.vicinity}</Text>*/}

                    </View>
              </View>
          </Card>

          <View style={styles.button_container}>
            <Button
                buttonStyle={styles.bttn_style}
                title='Place Order'
                rounded
                onPress={() => this.placeOrderPress()}
            />
          </View>
        </View>
      );
    }

    // Render
    render() {
        return (
          <ImageBackground
                  style={{
                  width: '100%',
                  height: '100%',
              }}
              source={require('../images/background.jpg')}
          >
            <ScrollView>
                {this.renderCard()}
                {this.renderAddOrder()}
            </ScrollView>
          </ImageBackground>
        );
    }
}
const styles = {
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    addBttn_style: {
        margin: 0,
        width: 200,
        height: 40,
        backgroundColor: BUTTON_COLOR
    },
    bttn_style: {
        margin: 0,
        width: window_width-75,
        backgroundColor: BUTTON_COLOR
    },
    title_style: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button_container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
};

function mapStateToProps({ order }) {
    return {
        name: order.name,
        location: order.location,
        order: order.drink
    };
}

export default connect(mapStateToProps, actions)(PlaceOrder);
