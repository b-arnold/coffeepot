import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DeliveryLegal extends Component {
    static navigationOptions = {
        title: 'Delivery Legal',
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
                This service delivery agreement is a legally binding contract between
                CoffePot and Client for the services listed below.
                </Text>

                <Text>
                The Delivery of tasty Coffee
                </Text>

            </View>
        );
    }
}

export default DeliveryLegal;