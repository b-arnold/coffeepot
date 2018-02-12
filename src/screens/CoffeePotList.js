import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, Icon, Avatar, Rating } from 'react-native-elements';
import FlipCard from 'react-native-flip-card';

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

    // renderCard() {
    //     return (
            
    //     )
    // }

    render() {
        const { navigate } = this.props.navigation;
        const COFFEE_CUP_IMAGE = require('../images/CoffeeCupTest.png');
        return (
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

                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <FlipCard
                        style={{
                            borderWidth: 0
                        }}
                        flipHorizontal={true}
                        alignHeight={true}
                    >
                        {/* Front side of the card */}
                        <View style={styles.face}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                        <Text style={styles.view_time}>5:34 Left</Text>
                                        <Button 
                                            title='Join'
                                            buttonStyle={styles.button_style}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>

                        {/* Back side of the card */}
                        <View style={styles.back}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                    </View>

                                    <View style={styles.view_text}>
                                        <Text> Location: Coffee Shop Name</Text>
                                        <Rating
                                            type='custom'
                                            ratingImage={COFFEE_CUP_IMAGE}
                                            ratingCount={5}
                                            ratingColor='#3498db'
                                            imageSize={30}
                                            readonly
                                            startingValue={0}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </FlipCard>
                    
                    {/* Flip Card will show two different info */}
                    <FlipCard
                        style={{
                            borderWidth: 0,
                        }}
                        flipHorizontal={true}
                        alignHeight={true}
                    >
                        {/* Front side of the card */}
                        <View style={styles.face}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                        <Text style={styles.view_time}>5:34 Left</Text>
                                        <Button 
                                            title='Join'
                                            buttonStyle={styles.button_style}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>

                        {/* Back side of the card */}
                        <View style={styles.back}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                    </View>

                                    <View style={styles.view_text}>
                                        <Text> Location: Coffee Shop Name</Text>
                                        <Rating
                                            type='custom'
                                            ratingImage={COFFEE_CUP_IMAGE}
                                            ratingCount={5}
                                            ratingColor='#3498db'
                                            imageSize={30}
                                            readonly
                                            startingValue={0}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </FlipCard>

                    <FlipCard
                        style={{
                            borderWidth: 0
                        }}
                        flipHorizontal={true}
                        alignHeight={true}
                    >
                        {/* Front side of the card */}
                        <View style={styles.face}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                        <Text style={styles.view_time}>5:34 Left</Text>
                                        <Button 
                                            title='Join'
                                            buttonStyle={styles.button_style}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>

                        {/* Back side of the card */}
                        <View style={styles.back}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                    </View>

                                    <View style={styles.view_text}>
                                        <Text> Location: Coffee Shop Name</Text>
                                        <Rating
                                            type='custom'
                                            ratingImage={COFFEE_CUP_IMAGE}
                                            ratingCount={5}
                                            ratingColor='#3498db'
                                            imageSize={30}
                                            readonly
                                            startingValue={0}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </FlipCard>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <FlipCard
                        style={{
                            borderWidth: 0
                        }}
                        flipHorizontal={true}
                        alignHeight={true}
                    >
                        {/* Front side of the card */}
                        <View style={styles.face}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                        <Text style={styles.view_time}>5:34 Left</Text>
                                        <Button 
                                            title='Join'
                                            buttonStyle={styles.button_style}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>

                        {/* Back side of the card */}
                        <View style={styles.back}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                    </View>

                                    <View style={styles.view_text}>
                                        <Text> Location: Coffee Shop Name</Text>
                                        <Rating
                                            type='custom'
                                            ratingImage={COFFEE_CUP_IMAGE}
                                            ratingCount={5}
                                            ratingColor='#3498db'
                                            imageSize={30}
                                            readonly
                                            startingValue={0}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </FlipCard>
                    
                    {/* Flip Card will show two different info */}
                    <FlipCard
                        style={{
                            borderWidth: 0,
                        }}
                        flipHorizontal={true}
                        alignHeight={true}
                    >
                        {/* Front side of the card */}
                        <View style={styles.face}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                        <Text style={styles.view_time}>5:34 Left</Text>
                                        <Button 
                                            title='Join'
                                            buttonStyle={styles.button_style}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>

                        {/* Back side of the card */}
                        <View style={styles.back}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                    </View>

                                    <View style={styles.view_text}>
                                        <Text> Location: Coffee Shop Name</Text>
                                        <Rating
                                            type='custom'
                                            ratingImage={COFFEE_CUP_IMAGE}
                                            ratingCount={5}
                                            ratingColor='#3498db'
                                            imageSize={30}
                                            readonly
                                            startingValue={0}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </FlipCard>

                    <FlipCard
                        style={{
                            borderWidth: 0
                        }}
                        flipHorizontal={true}
                        alignHeight={true}
                    >
                        {/* Front side of the card */}
                        <View style={styles.face}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                        <Text style={styles.view_time}>5:34 Left</Text>
                                        <Button 
                                            title='Join'
                                            buttonStyle={styles.button_style}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>

                        {/* Back side of the card */}
                        <View style={styles.back}>
                            <Card
                                containerStyle={{
                                    width: 180
                                }}
                            >
                                <View style={styles.view_card}>
                                    <View style={styles.view_avatar}>
                                        <Avatar
                                            source={require('../images/coffee_pot_symbol.png')}
                                            large
                                        />
                                    </View>

                                    <View style={styles.view_text}>
                                        <Text> Location: Coffee Shop Name</Text>
                                        <Rating
                                            type='custom'
                                            ratingImage={COFFEE_CUP_IMAGE}
                                            ratingCount={5}
                                            ratingColor='#3498db'
                                            imageSize={30}
                                            readonly
                                            startingValue={0}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </FlipCard>
                </View>
            </ScrollView>
        );
    }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = {
    view_bttn: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:10
    },
    view_card: {
        justifyContent: 'center'
    },
    view_avatar: {
        justifyContent: 'center'
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