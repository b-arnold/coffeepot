import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class ChooseDelivery extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Delivery',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
            paddingRight: 10,
            paddingLeft: 10
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR,
        headerBackTitle: null,
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon 
                    type='material-community'
                    name='menu'
                    color={ SECONDARY_COLOR }
                />
            </TouchableOpacity>
        )
    })

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <View style={{marginBottom: 10}}>
                    <Button 
                        buttonStyle={styles.bttn_style}
                        title='Existing Order'
                        rounded
                        onPress={() => navigate('ExistingOrdersList')}
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
                        onPress={() => navigate('PickLocationList')}
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
