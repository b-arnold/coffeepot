import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class CoffeePotList extends Component {
    static navigationOptions = {
        title: 'Coffee Pots',
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
            <View>
                <ScrollView>
                    <View
                        style={{
                            flex:1,
                            flexDirection:'row',
                            justifyContent: 'center',
                            margin:10
                        }}
                    >
                        <Button 
                            title='Place Order'
                            buttonStyle={{
                                backgroundColor: BUTTON_COLOR
                            }}
                        />
                        <Button 
                            title='GPS View'
                            buttonStyle={{
                                backgroundColor: BUTTON_COLOR
                            }}
                        />
                    </View>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Coffee Pot Card 
                        </Text>
                    </Card>
                    <Text
                        style={{
                            margin: 10,
                            justifyContent: 'center'
                        }}
                    >
                        No More Coffee Pots
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

export default CoffeePotList;