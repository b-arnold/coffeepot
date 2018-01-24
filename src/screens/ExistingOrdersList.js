import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card, Avatar, Icon } from 'react-native-elements';

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
                {/* This file is here for scaffolding, but will be replaced */}
                <ScrollView>
                    <View style={styles.view_bttn}>
                        <Button 
                            iconRight={{
                                name: 'map-marker',
                                type: 'font-awesome',
                                size: 25
                            }}
                            title='GPS View'
                            buttonStyle={styles.button_style}
                            rounded
                        />
                    </View>

                    <Card>
                        <View style={styles.view_card}>
                            <View style={styles.view_avatar}>
                                <Avatar
                                    title='Test'
                                    large
                                />
                            </View>

                            <View style={styles.view_text}>
                                <Text> Location: </Text>
                                <Text> Order: </Text>
                                <Text> Time Left: </Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.view_card}>
                            <View style={styles.view_avatar}>
                                <Avatar
                                    title='Test'
                                    large
                                />
                            </View>

                            <View style={styles.view_text}>
                                <Text> Location: </Text>
                                <Text> Order: </Text>
                                <Text> Time Left: </Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.view_card}>
                            <View style={styles.view_avatar}>
                                <Avatar
                                    title='Test'
                                    large
                                />
                            </View>

                            <View style={styles.view_text}>
                                <Text> Location: </Text>
                                <Text> Order: </Text>
                                <Text> Time Left: </Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.view_card}>
                            <View style={styles.view_avatar}>
                                <Avatar
                                    title='Test'
                                    large
                                />
                            </View>

                            <View style={styles.view_text}>
                                <Text> Location: </Text>
                                <Text> Order: </Text>
                                <Text> Time Left: </Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.view_card}>
                            <View style={styles.view_avatar}>
                                <Avatar
                                    title='Test'
                                    large
                                />
                            </View>

                            <View style={styles.view_text}>
                                <Text> Location: </Text>
                                <Text> Order: </Text>
                                <Text> Time Left: </Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.view_card}>
                            <View style={styles.view_avatar}>
                                <Avatar
                                    title='Test'
                                    large
                                />
                            </View>

                            <View style={styles.view_text}>
                                <Text> Location: </Text>
                                <Text> Order: </Text>
                                <Text> Time Left: </Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.view_card}>
                            <View style={styles.view_avatar}>
                                <Avatar
                                    title='Test'
                                    large
                                />
                            </View>

                            <View style={styles.view_text}>
                                <Text> Location: </Text>
                                <Text> Order: </Text>
                                <Text> Time Left: </Text>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.view_card}>
                            <View style={styles.view_avatar}>
                                <Avatar
                                    title='Test'
                                    large
                                />
                            </View>

                            <View style={styles.view_text}>
                                <Text> Location: </Text>
                                <Text> Order: </Text>
                                <Text> Time Left: </Text>
                            </View>
                        </View>
                    </Card>

                    <Text style={styles.end_text}>
                        No More Coffee Pots
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = {
    view_bttn: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        marginTop:10
    },
    view_card: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    view_avatar: {
        flexDirection: 'row'
    },
    view_text: {
        justifyContent: 'space-between'
    },
    end_text: {
        margin: 10,
        textAlign: 'center'
    },
    button_style: {
        backgroundColor: BUTTON_COLOR
    }
}

export default ExistingOrdersList;