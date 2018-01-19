import React, { Component } from 'react';
import {View, Text } from 'react-native';

class ExistingOrder extends Component {
    static navigationOptions = {
        title: 'Existing Order',
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
                <Text>
                    Existing Order
                </Text>
            </View>
        )
    }
}

export default ExistingOrder;