import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

export default class StandardLegal extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Legal',
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
        return (
            <View>

                <Text>
                This service agreement is a legally binding contract between
                CoffePot and Client for the services listed below.
                </Text>

                <Text>
                The Delivery of tasty Coffee
                </Text>

            </View>
        );
    }
}
