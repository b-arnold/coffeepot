import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar, Button, Rating } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';


class CoffeePot extends Component {
    static navigationOptions = {
        title: 'Coffee Pot',
        //Changes the color of the header
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        //Changes the color of the text in the header
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        //Changes the color of the back button
        headerTintColor: SECONDARY_COLOR
    }

    render() {
        const { navigate } = this.props.navigation;
        const COFFEE_CUP_IMAGE = require('../images/CoffeeCupTest.png');
        return (
            <View style={styles.container}>
                {/* This will display the time left in the coffee pot */}
                <View style={{ flexDirection: 'row' }}>
                    <Image 
                        source={require('../images/Hourglass_icon.png')}
                        style={{ width: 60, height: 60 }}
                    />
                    <Text style={{ fontSize: 45 }}>5 min</Text>
                </View>

                {/* This will have the picture of the coffee shop */}
                <Image 
                    source={require('../images/coffee_pot_symbol.png')}
                    style={{ width: 200, height: 200 }}
                />

                {/* WIP: Figuring out how to add a row of coffee cups */}
                <View>
                    <Rating
                        type='custom'
                        ratingImage={COFFEE_CUP_IMAGE}
                        ratingCount={5}
                        ratingColor='#3498db'
                        ratingBackgroundColor='transparent'
                        imageSize={70}
                        readonly
                    />
                </View>

                {/* This will display the location of the coffee shop */}
                <Text style={styles.text}>Location:</Text>

                {/* 
                Button looks life the text so need to make round.
                This button will lead to a place order screen
                */}
                <Button 
                    title='Join Coffee Pot'
                    buttonStyle={styles.button_style}
                    rounded
                    onPress = {() => navigate('PlaceOrder')}
                />
            </View>
        );
    }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = {
    container: {
        margin: 30,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        padding: 10,
        backgroundColor: BUTTON_COLOR,
        color: SECONDARY_COLOR
    },
    button_style: {
        backgroundColor: BUTTON_COLOR
    }
};

export default CoffeePot;