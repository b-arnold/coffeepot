import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';

class ExistingOrdersList extends Component {
    static navigationOptions = {
        title: 'Existing Orders',
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
                            title='GPS View'
                            buttonStyle={{
                                backgroundColor: '#1abc9c'
                            }}
                        />
                    </View>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Existing Order Card 
                        </Text>
                    </Card>
                    <Text
                        style={{
                            margin: 10,
                            justifyContent: 'center'
                        }}
                    >
                        No More Existing Orders
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

export default ExistingOrdersList;