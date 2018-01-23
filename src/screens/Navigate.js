import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

//ONLY FOR SCREEN TESTING
class Navigate extends Component {
    static navigationOptions = {
        title: 'Navigation',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerBackTitle: null,
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={styles.view_style}>
                {/* Coffee Pot List Screen Button */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Coffee Pot List'
                    onPress={() => 
                        navigate('CoffeePotList')
                    }
                />

                {/* Coffee Pot Screen Button */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Coffee Pot'
                    onPress={() => 
                        navigate('CoffeePot')
                    }
                />

                {/* Existing Orders List */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Existing Orders List'
                    onPress={() => 
                        navigate('ExistingOrdersList')
                    }
                />

                {/* Existing Order */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Existing Order'
                    onPress={() => 
                        navigate('ExistingOrder')
                    }
                />

                {/* ChooseDelivery */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Choose Delivery'
                    onPress={() => 
                        navigate('ChooseDelivery')
                    }
                />

                {/* PickLocationList */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Pick Location List'
                    onPress={() => 
                        navigate('PickLocationList')
                    }
                />

                {/* PickedLocation */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Picked Location'
                    onPress={() => 
                        navigate('PickedLocation')
                    }
                />

                {/* Profile */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Profile'
                    onPress={() => 
                        navigate('Profile')
                    }
                />

                {/* Receipt Snapshot */}
                <Button 
                    buttonStyle={style=styles.bttn_style}
                    title='Receipt Snapshot'
                    onPress={() => 
                        navigate('ReceiptSnapshot')
                    }
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    view_style: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bttn_style: {
        margin: 10,
        width: 200,
        backgroundColor: BUTTON_COLOR
    }
})

export default Navigate;