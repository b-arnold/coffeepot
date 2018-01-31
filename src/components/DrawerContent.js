import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, Avatar, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class DrawerContent extends Component {
    render() {
        const { navigate } = this.props.navigation
        return(
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Avatar 
                    title='Test'
                    xlarge
                    rounded
                />
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text>First Name</Text>
                    <Text> Last Name </Text>
                </View>
                <View>
                    <Button
                        title='Home'
                        onPress={() => navigate('CoffeePotList')}
                    />
                </View>
            </View>
        )
    }
}

export default DrawerContent;