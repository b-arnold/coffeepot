import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class CoffeePotList extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Coffee Pots',
        //Changes the color of the header
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
            paddingRight: 10,
            paddingLeft: 10
        },
        //Changes the color of the Header Title
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        //Changes the color of the back button
        headerTintColor: SECONDARY_COLOR,
        headerBackTitle: null,
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon 
                    type='material-community'
                    name='menu'
                    color={ SECONDARY_COLOR }
                />
            </TouchableOpacity>
        ),
    })
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                {/* This file is here for scaffolding, but will be replaced */}
                <ScrollView>
                    <View style={styles.view_bttn}>
                        <Button 
                            iconRight={{
                                name: 'plus-circle',
                                type: 'material-community',
                                size: 25
                            }}
                            title='Place Order'
                            buttonStyle={styles.button_style}
                            rounded
                        />
                        <Button 
                            iconRight={{
                                name: 'map-marker',
                                type: 'font-awesome',
                                size: 25
                            }}
                            title='GPS View'
                            buttonStyle={styles.button_style}
                            rounded
<<<<<<< HEAD
                            onPress = {() => navigate('GPS')}
=======
                            onPress={() => navigate('GPSMap')}
>>>>>>> 682de508c22accd14a23a72ec55554030a7ed7ba
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginLeft: 10, marginRight: 20 }}>
                                    <Image 
                                        source={require('../images/coffee_pot_icon.png')}
                                        style={{ width: 50, height: 50 }}
                                    />
                                    <Text style={{ fontWeight: 'bold' }}>5 min</Text>
                                </View>
                                <View style={{ margin: 5 }}>
                                    <View style={{ marginBottom: 5 }}>
                                        <Text>Location: Coffee Shop Name </Text>
                                    </View>
                                    <View style={{ marginBottom: 5 }}>
                                        <Text>Delivery Time: 10 min</Text>
                                    </View>
                                    <View>
                                        <Text>Cups of Coffee: 3/5</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 20 }}>
                                <Image 
                                    source={require('../images/coffee_pot_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Text style={{ fontWeight: 'bold' }}>5 min</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Location: Coffee Shop Name </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Delivery Time: 10 min</Text>
                                </View>
                                <View>
                                    <Text>Cups of Coffee: 3/5</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 20 }}>
                                <Image 
                                    source={require('../images/coffee_pot_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Text style={{ fontWeight: 'bold' }}>5 min</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Location: Coffee Shop Name </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Delivery Time: 10 min</Text>
                                </View>
                                <View>
                                    <Text>Cups of Coffee: 3/5</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 20 }}>
                                <Image 
                                    source={require('../images/coffee_pot_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Text style={{ fontWeight: 'bold' }}>5 min</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Location: Coffee Shop Name </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Delivery Time: 10 min</Text>
                                </View>
                                <View>
                                    <Text>Cups of Coffee: 3/5</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 20 }}>
                                <Image 
                                    source={require('../images/coffee_pot_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Text style={{ fontWeight: 'bold' }}>5 min</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Location: Coffee Shop Name </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Delivery Time: 10 min</Text>
                                </View>
                                <View>
                                    <Text>Cups of Coffee: 3/5</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 20 }}>
                                <Image 
                                    source={require('../images/coffee_pot_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Text style={{ fontWeight: 'bold' }}>5 min</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Location: Coffee Shop Name </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Delivery Time: 10 min</Text>
                                </View>
                                <View>
                                    <Text>Cups of Coffee: 3/5</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 20 }}>
                                <Image 
                                    source={require('../images/coffee_pot_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Text style={{ fontWeight: 'bold' }}>5 min</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Location: Coffee Shop Name </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Delivery Time: 10 min</Text>
                                </View>
                                <View>
                                    <Text>Cups of Coffee: 3/5</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 10, marginRight: 20 }}>
                                <Image 
                                    source={require('../images/coffee_pot_icon.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Text style={{ fontWeight: 'bold' }}>5 min</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Location: Coffee Shop Name </Text>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <Text>Delivery Time: 10 min</Text>
                                </View>
                                <View>
                                    <Text>Cups of Coffee: 3/5</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Text style={styles.end_text}>
                        No More Coffee Pots
                    </Text>
                </ScrollView>
            </View>
        );
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

export default CoffeePotList;