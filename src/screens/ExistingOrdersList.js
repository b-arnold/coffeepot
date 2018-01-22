import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class ExistingOrdersList extends Component {
    static navigationOptions = {
        title: 'Existing Orders',
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
                            title='GPS View'
                            buttonStyle={{
                                backgroundColor: BUTTON_COLOR
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