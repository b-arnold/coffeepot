import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class ChooseDelivery extends Component {
    static navigationOptions = {
        title: 'Delivery',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{marginBottom: 10}}>
                    <Button 
                        buttonStyle={styles.bttn_style}
                        title='Existing Order'
                        rounded
                    />
                </View>
                <View style={{marginBottom: 100}}>
                    <Text>
                        Deliver an order that has been submitted!
                    </Text>
                </View>
                <View style={{marginBottom: 10}}>
                    <Button 
                        buttonStyle={styles.bttn_style}
                        title='Pick Location'
                        rounded
                    />
                </View>
                <View style={{marginBottom: 30}}>
                    <Text>
                        Choose a location to start a CoffeePot!
                    </Text>
                </View>
            </View>
        )
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

export default ChooseDelivery;
