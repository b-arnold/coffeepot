import React, { Component } from 'react';
import {View, Text } from 'react-native';

class CoffeePot extends Component {
    static navigationOptions = {
        title: 'Coffee Pot',
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
                    Coffee Pot
                </Text>
            </View>
        )
    }
}

export default CoffeePot;