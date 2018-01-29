import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

export default class PaymentScreen extends Component {
    static navigationOptions = {
        title: 'Order Payment',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
        headerTintColor: 'white'
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image
                                    source={require('../images/profile_icon.png')}
                                    style={{ width: 50, height: 50 }} 
                                />
                            </View>
                            <View>
                                <Text>FirstName</Text>
                                <Text>LastName</Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Card Number</Text>
                            <Text>Expiration Date</Text>
                            <Text>01  2017</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Apply New Card</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Button 
                            buttonStyle={styles.bttn_style}
                            title='Confirm Payment'
                            rounded
                            />
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    bttn_style: {
        margin: 10,
        width: 300,
        backgroundColor: BUTTON_COLOR
    }
}
