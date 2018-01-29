import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';

export default class PlaceOrder extends Component {
    static navigationOptions = {
        title: 'Pick Location',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
        headerTintColor: 'white'
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            margin: 10
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
                        <View style={{ flexDirection: 'row' }}>
                            <Text>FirstName LastName</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Location: Starbucks, Azusa</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Order:</Text>
                            <Text>Grande, Iced, Vanilla /n Caffe Latte</Text>
                            <Text>Remove Order</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Add Order +</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Place Order</Text>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

