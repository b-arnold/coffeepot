import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';

class CoffeePotList extends Component {
    static navigationOptions = {
        title: 'Coffee Pots',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
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
                                backgroundColor: '#1abc9c'
                            }}
                        />
                        <Button 
                            title='GPS View'
                            buttonStyle={{
                                backgroundColor: '#1abc9c'
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