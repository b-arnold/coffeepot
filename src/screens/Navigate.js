import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

//ONLY FOR SCREEN TESTING
class Navigate extends Component {
    static navigationOptions = {
        title: 'Navigation',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
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
                <Button 
                    buttonStyle={{
                        margin:10,
                        width: 200,
                        backgroundColor: '#1abc9c'
                    }}
                    title='Coffee Pot List'
                    onPress={() => 
                        navigate('CoffeePotList')
                    }
                />
                <Button 
                    buttonStyle={{
                        margin:10,
                        width: 200,
                        backgroundColor: '#1abc9c'
                    }}
                    title='Existing Orders List'
                    onPress={() => 
                        navigate('ExistingOrdersList')
                    }
                />
            </View>
        )
    }
}

export default Navigate;