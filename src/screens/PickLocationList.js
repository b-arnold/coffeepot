import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';

class PickLocationList extends Component {
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
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Image 
                                    source={require('../images/store_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text>Location: ..store name..</Text>
                                <Text>Drive: ..drive time..</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Image 
                                    source={require('../images/store_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text>Location: ..store name..</Text>
                                <Text>Drive: ..drive time..</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Image 
                                    source={require('../images/store_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text>Location: ..store name..</Text>
                                <Text>Drive: ..drive time..</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Image 
                                    source={require('../images/store_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text>Location: ..store name..</Text>
                                <Text>Drive: ..drive time..</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Image 
                                    source={require('../images/store_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text>Location: ..store name..</Text>
                                <Text>Drive: ..drive time..</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Image 
                                    source={require('../images/store_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text>Location: ..store name..</Text>
                                <Text>Drive: ..drive time..</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Image 
                                    source={require('../images/store_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text>Location: ..store name..</Text>
                                <Text>Drive: ..drive time..</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 10 }}>
                                <Image 
                                    source={require('../images/store_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>
                            <View>
                                <Text>Location: ..store name..</Text>
                                <Text>Drive: ..drive time..</Text>
                            </View>
                        </View>
                    </Card>
                    <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                        <Text>
                            No More Locations
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default PickLocationList;
