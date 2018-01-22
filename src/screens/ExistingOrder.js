import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class ExistingOrder extends Component {
    static navigationOptions = {
        title: 'Existing Order',
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
            <View style={styles.container}>
                <Text style={styles.text}>
                    Time Left:
                </Text>

                <Avatar 
                    xlarge
                    title='Test'
                />

                <View>
                    <Text>
                        Row of Coffee Cups
                    </Text>
                </View>

                <Text style={styles.text} >
                    Location:
                </Text>

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

export default ExistingOrder;