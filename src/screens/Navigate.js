import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

//ONLY FOR SCREEN TESTING
class Navigate extends Component {
    static navigationOptions = {
        title: 'Navigation',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerBackTitle: null,
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#ecf0f1'
                }}
            >
                {/* Coffee Pot List Screen Button */}
                <Button 
                    buttonStyle={{
                        margin:10,
                        width: 200,
                        backgroundColor: BUTTON_COLOR
                    }}
                    title='Coffee Pot List'
                    onPress={() => 
                        navigate('CoffeePotList')
                    }
                />

                {/* Coffee Pot Screen Button */}
                <Button 
                    buttonStyle={{
                        margin:10,
                        width: 200,
                        backgroundColor: BUTTON_COLOR
                    }}
                    title='Coffee Pot'
                    onPress={() => 
                        navigate('CoffeePot')
                    }
                />

                {/* Existing Orders List */}
                <Button 
                    buttonStyle={{
                        margin:10,
                        width: 200,
                        backgroundColor: BUTTON_COLOR
                    }}
                    title='Existing Orders List'
                    onPress={() => 
                        navigate('ExistingOrdersList')
                    }
                />

                {/* Existing Order */}
                <Button 
                    buttonStyle={{
                        margin:10,
                        width: 200,
                        backgroundColor: BUTTON_COLOR
                    }}
                    title='Existing Order'
                    onPress={() => 
                        navigate('ExistingOrder')
                    }
                />
            </View>
        )
    }
}

export default Navigate;