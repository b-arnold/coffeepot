import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, Icon, Avatar, Rating } from 'react-native-elements';

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

    renderCard() {
        return (
            <TouchableOpacity
                onPress={() => navigate('CoffeePot')}
            >
                <Card>
                    <View style={styles.view_card}>
                        <View style={styles.view_avatar}>
                            <Avatar
                                source={require('../images/coffee_pot_symbol.png')}
                                large
                            />
                            <Text style={styles.view_time}>5 min</Text>
                        </View>

                        <View style={styles.view_text}>
                            <Text> Location: Coffee Shop Name</Text>
                            <Text> Delivery Time: 10 min</Text>
                            <Rating
                                type='custom'
                                ratingImage={COFFEE_CUP_IMAGE}
                                ratingCount={5}
                                ratingColor='#3498db'
                                imageSize={50}
                                readonly
                                startingValue={0}
                            />
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const COFFEE_CUP_IMAGE = require('../images/CoffeeCupTest.png');
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
                            onPress={() => navigate('GPSMap')}
                        />
                    </View>

                    <TouchableOpacity
                         onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={styles.view_card}>
                                <View style={styles.view_avatar}>
                                    <Avatar
                                        source={require('../images/coffee_pot_symbol.png')}
                                        large
                                    />
                                    <Text style={styles.view_time}>5 min</Text>
                                </View>

                                <View style={styles.view_text}>
                                    <Text> Location: Coffee Shop Name</Text>
                                    <Text> Delivery Time: 10 min</Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={COFFEE_CUP_IMAGE}
                                        ratingCount={5}
                                        ratingColor='#3498db'
                                        imageSize={50}
                                        readonly
                                        startingValue={0}
                                    />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={styles.view_card}>
                                <View style={styles.view_avatar}>
                                    <Avatar
                                        source={require('../images/coffee_pot_symbol.png')}
                                        large
                                    />
                                    <Text style={styles.view_time}>5 min</Text>
                                </View>

                                <View style={styles.view_text}>
                                    <Text> Location: Coffee Shop Name</Text>
                                    <Text> Delivery Time: 10 min</Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={COFFEE_CUP_IMAGE}
                                        ratingCount={5}
                                        ratingColor='#3498db'
                                        imageSize={50}
                                        readonly
                                        startingValue={0}
                                    />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={styles.view_card}>
                                <View style={styles.view_avatar}>
                                    <Avatar
                                        source={require('../images/coffee_pot_symbol.png')}
                                        large
                                    />
                                    <Text style={styles.view_time}>5 min</Text>
                                </View>

                                <View style={styles.view_text}>
                                    <Text> Location: Coffee Shop Name</Text>
                                    <Text> Delivery Time: 10 min</Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={COFFEE_CUP_IMAGE}
                                        ratingCount={5}
                                        ratingColor='#3498db'
                                        imageSize={50}
                                        readonly
                                        startingValue={0}
                                    />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={styles.view_card}>
                                <View style={styles.view_avatar}>
                                    <Avatar
                                        source={require('../images/coffee_pot_symbol.png')}
                                        large
                                    />
                                    <Text style={styles.view_time}>5 min</Text>
                                </View>

                                <View style={styles.view_text}>
                                    <Text> Location: Coffee Shop Name</Text>
                                    <Text> Delivery Time: 10 min</Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={COFFEE_CUP_IMAGE}
                                        ratingCount={5}
                                        ratingColor='#3498db'
                                        imageSize={50}
                                        readonly
                                        startingValue={0}
                                    />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={styles.view_card}>
                                <View style={styles.view_avatar}>
                                    <Avatar
                                        source={require('../images/coffee_pot_symbol.png')}
                                        large
                                    />
                                    <Text style={styles.view_time}>5 min</Text>
                                </View>

                                <View style={styles.view_text}>
                                    <Text> Location: Coffee Shop Name</Text>
                                    <Text> Delivery Time: 10 min</Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={COFFEE_CUP_IMAGE}
                                        ratingCount={5}
                                        ratingColor='#3498db'
                                        imageSize={50}
                                        readonly
                                        startingValue={0}
                                    />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={styles.view_card}>
                                <View style={styles.view_avatar}>
                                    <Avatar
                                        source={require('../images/coffee_pot_symbol.png')}
                                        large
                                    />
                                    <Text style={styles.view_time}>5 min</Text>
                                </View>

                                <View style={styles.view_text}>
                                    <Text> Location: Coffee Shop Name</Text>
                                    <Text> Delivery Time: 10 min</Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={COFFEE_CUP_IMAGE}
                                        ratingCount={5}
                                        ratingColor='#3498db'
                                        imageSize={50}
                                        readonly
                                        startingValue={0}
                                    />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={styles.view_card}>
                                <View style={styles.view_avatar}>
                                    <Avatar
                                        source={require('../images/coffee_pot_symbol.png')}
                                        large
                                    />
                                    <Text style={styles.view_time}>5 min</Text>
                                </View>

                                <View style={styles.view_text}>
                                    <Text> Location: Coffee Shop Name</Text>
                                    <Text> Delivery Time: 10 min</Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={COFFEE_CUP_IMAGE}
                                        ratingCount={5}
                                        ratingColor='#3498db'
                                        imageSize={50}
                                        readonly
                                        startingValue={0}
                                    />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigate('CoffeePot')}
                    >
                        <Card>
                            <View style={styles.view_card}>
                                <View style={styles.view_avatar}>
                                    <Avatar
                                        source={require('../images/coffee_pot_symbol.png')}
                                        large
                                    />
                                    <Text style={styles.view_time}>5 min</Text>
                                </View>

                                <View style={styles.view_text}>
                                    <Text> Location: Coffee Shop Name</Text>
                                    <Text> Delivery Time: 10 min</Text>
                                    <Rating
                                        type='custom'
                                        ratingImage={COFFEE_CUP_IMAGE}
                                        ratingCount={5}
                                        ratingColor='#3498db'
                                        imageSize={50}
                                        readonly
                                        startingValue={0}
                                    />
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>

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
        flexDirection: 'column',
    },
    view_time: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5
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