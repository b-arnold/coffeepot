import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';


class CoffeePot extends Component {
    static navigationOptions = {
        title: 'Coffee Pot',
        //Changes the color of the header
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        //Changes the color of the text in the header
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        //Changes the color of the back button
        headerTintColor: SECONDARY_COLOR
    }

    render() {
        return (
            <View style={styles.container}>
                {/* This will display the time left in the coffee pot */}
                <Text style={styles.text}>
                    Time Left:
                </Text>

                {/* This will have the picture of the coffee shop */}
                <Avatar 
                    xlarge
                    title='Test'
                />

                {/* WIP: Figuring out how to add a row of coffee cups */}
                <View>
                    <Text>
                        Row of Coffee Cups
                    </Text>
                </View>

                {/* This will display the location of the coffee shop */}
                <Text style={styles.text} >
                    Location:
                </Text>

                {/* 
                Button looks life the text so need to make round.
                This button will lead to a place order screen
                */}
                <Button 
                    title='Join Coffee Pot'
                    buttonStyle={{
                        backgroundColor: BUTTON_COLOR
                    }}
                />
            </View>
        )
    }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = StyleSheet.create({
    container: {
        margin: 50,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        padding: 10,
        backgroundColor: BUTTON_COLOR,
        color: SECONDARY_COLOR
    }
});

export default CoffeePot;