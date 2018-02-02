import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

//ONLY FOR SCREEN TESTING
class Navigate extends Component {
    static navigationOptions = {
        title: 'Navigation',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerBackTitle: null,
    }

    render() {
        const { navigate } = this.props.navigation;
        return (

            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#ecf0f1'
                    }}
                >
                    {/* Coffee Pot List Screen Button */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Coffee Pot List'
                        onPress={() =>
                            navigate('CoffeePotList')
                        }
                    />

                    {/* Coffee Pot Screen Button */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Coffee Pot'
                        onPress={() =>
                            navigate('CoffeePot')
                        }
                    />

                    {/* Existing Orders List */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Existing Orders List'
                        onPress={() =>
                            navigate('ExistingOrdersList')
                        }
                    />

                    {/* Existing Order */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Existing Order'
                        onPress={() =>
                            navigate('ExistingOrder')
                        }
                    />

                    {/* ChooseDelivery */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Choose Delivery'
                        onPress={() =>
                            navigate('ChooseDelivery')
                        }
                    />

                    {/* PickLocationList */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Pick Location List'
                        onPress={() =>
                            navigate('PickLocationList')
                        }
                    />

                    {/* PickedLocation */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Picked Location'
                        onPress={() =>
                            navigate('PickedLocation')
                        }
                    />

                    {/* Profile */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Profile'
                        onPress={() =>
                            navigate('Profile')
                        }
                    />

                    {/* Receipt Snapshot */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Receipt Snapshot'
                        onPress={() =>
                            navigate('ReceiptSnapshot')
                        }
                    />

                    {/* GPS Map */}
                    <Button
                        buttonStyle={{
                            margin: 10,
                            width: 200,
                            backgroundColor: '#1abc9c'
                        }}
                        title='GPS Map'
                        onPress={() =>
                            navigate('GPSMap')
                        }
                    />


                {/* Login Screen */}
                <Button
                  buttonStyle={styles.bttn_style}
                  title='Login Screen'
                  rounded
                  onPress={() =>
                    navigate('LoginScreen')
                  }
                />

                {/* Create Account Screen */}
                <Button
                  buttonStyle={styles.bttn_style}
                  title='Create Account Screen'
                  rounded
                  onPress={() =>
                    navigate('CreateAccountScreen')
                  }
                />

                {/* Payment Confirmation Screen */}
                <Button
                  buttonStyle={styles.bttn_style}
                  title='Payment Confirmation'
                  rounded
                  onPress={() =>
                      navigate('PaymentConfirmationScreen')
                  }
                />

                {/* Receipt Screen */}
                <Button
                  buttonStyle={styles.bttn_style}
                  title='Receipt'
                  rounded
                  onPress={() =>
                      navigate('ReceiptScreen')
                  }
                />

                {/* Place Order */}
                <Button
                    buttonStyle={styles.bttn_style}
                    title='Place Order'
                    rounded
                    onPress={() =>
                        navigate('PlaceOrder')
                    }
                />

                {/* Payment Screen */}
                <Button
                    buttonStyle={styles.bttn_style}
                    title='Order Payment'
                    rounded
                    onPress={() =>
                        navigate('PaymentScreen')
                    }
                />

                {/* Input Coffee Order Screen */}
                <Button
                    buttonStyle={styles.bttn_style}
                    title='Input Coffee Order'
                    rounded
                    onPress={() =>
                        navigate('InputCoffeeOrderScreen')
                    }
                />

                {/* Receive Payment Screen */}
                <Button
                    buttonStyle={styles.bttn_style}
                    title='Receive Payment'
                    rounded
                    onPress={() =>
                        navigate('ReceivePaymentScreen')
                    }
                />

               </View>
            </ScrollView>
        );
    }
}

const styles = {
    view_style: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bttn_style: {
        margin: 10,
        width: 230,
        backgroundColor: BUTTON_COLOR
    }
};

export default Navigate;
