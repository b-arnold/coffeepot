import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

//ONLY FOR SCREEN TESTING
class Navigate extends Component {
    static navigationOptions = {
        title: 'Navigation',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
        headerBackTitle: null,
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
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

            </View>
        );
    }
}

export default Navigate;