import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ChooseDelivery extends Component {
    static navigationOptions = {
        title: 'Delivery',
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
            <View style={styles.mainContainer}>
                <View style={{marginBottom: 10}}>
                    <Button 
                        buttonStyle={{
                            margin: 10,
                            width: 300,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Existing Order'
                    />
                </View>
                <View style={{marginBottom: 100}}>
                    <Text>
                        Deliver an order that has been submitted!
                    </Text>
                </View>
                <View style={{marginBottom: 10}}>
                    <Button 
                        buttonStyle={{
                            margin: 10,
                            width: 300,
                            backgroundColor: '#1abc9c'
                        }}
                        title='Pick Location'
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

export default ChooseDelivery;

const styles = {
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
}