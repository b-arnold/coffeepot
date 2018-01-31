import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class About extends Component {
    static navigationOptions = {
        title: 'About',
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
                <Text>
                CoffeePot is an applictaion based coffee Delivery service that has set out
                to facilatate excellent coffee delivery
                </Text>
                </ScrollView>
            </View>
        );
    }
}

export default About;