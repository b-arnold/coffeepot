import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card, Avatar } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class PaymentScreen extends Component {
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
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ScrollView>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Avatar
                                    source={require('../images/profile_icon.png')}
                                    large
                                />
                            </View>
                            <View>
                                <Text>FirstName</Text>
                                <Text>LastName</Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: 'column' }}>
                            <Text>Card Number: xxxx-xxxx-xxxx-0000{"\n"}</Text>
                            <Text>Expiration Date: 01/ 2020{"\n"}</Text>
                            <View style={styles.button_container}>
                                <Button 
                                    buttonStyle={styles.AddBttn_style}
                                    title='Apply New Card +'
                                    rounded
                                />
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.button_container}>
                            <Button 
                            buttonStyle={styles.bttn_style}
                            title='Confirm Payment'
                            rounded
                            onPress = {() => navigate('PaymentConfirmationScreen')}
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
        margin: 0,
        backgroundColor: BUTTON_COLOR
    },
    addBttn_style: {
        margin: 0,
        width: 100,
        backgroundColor: BUTTON_COLOR
    },
    button_container:{
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}

export default PaymentScreen;
