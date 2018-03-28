import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button, Card, Avatar } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class PaymentScreen extends Component {
    static navigationOptions = {
        title: 'Order Payment',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR,
        tabBarVisible: false
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
                            <Text>Card Number:</Text>
                            <TextInput
                                style={{flex:1}}
                                label="CardNumber"
                                placeholder="0000-0000-0000-0000"
                                //value={this.props.card}
                                //onChangeText={value => this.props.orderUpdate({prop: 'name', value})}
                            />
                            <Text>{"\n"}</Text>
                            <Text>Expiration Date:</Text>
                            <TextInput
                                style={{flex:1}}
                                label="ExpDate"
                                placeholder="01/20"
                                //value={this.props.card}
                                //onChangeText={value => this.props.orderUpdate({prop: 'name', value})}
                            />
                            <Text>{"\n"}</Text>
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
