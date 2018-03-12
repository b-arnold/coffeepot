import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class TrackDelivery extends Component {
    static navigationOptions = {
        title: 'Track Delivery',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR 
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR,
        tabBarVisible: false
    }

    state = {
        delivery: 0
    }

    taskCompleted = (complete) => {
        if (complete)
            return (
                <Icon 
                    type='toggle'
                    name='check-box'
                    color={BUTTON_COLOR}
                    size={70}
                />
            );
        
        return (
            <Icon 
                type='toggle'
                name='check-box-outline-blank'
                color='white'
                size={70}
            />
        );
    }

    OrdersReceived = () => {
        complete = false;
        
        if (this.state.delivery >= 1)
            complete = true;

        return (
            <View style={styles.icon}>
                    <View>
                        {this.taskCompleted(complete)}
                    </View>
                    <View style={{ 
                            marginLeft: 10,
                            marginRight: 20,
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}>
                        <Icon 
                            type='font-awesome'
                            name='coffee'
                            color='white'
                            size={40}
                        />
                    </View>
                    <View style={styles.background}>
                        <Text style={{ color: 'white', fontSize: 25 }}>
                            Orders Received
                        </Text>
                    </View>
                </View>
        );
    }

    DrinksOrdered = () => {
        complete = false;
        
        if (this.state.delivery >= 2)
            complete = true;

        return (
            <View style={styles.icon}>
                <View>
                    {this.taskCompleted(complete)}
                    </View>
                    <View style={{ 
                            marginLeft: 10,
                            marginRight: 20,
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}>
                        <Icon 
                            type='action'
                            name='receipt'
                            color='white'
                            size={40}
                        />
                    </View>
                    <View style={styles.background}>
                        <Text style={{ color: 'white', fontSize: 25 }}>
                            Drinks Ordered
                        </Text>
                    </View>
                </View>
        );
    }

    DrinksOnRoute = () => {
        complete = false;
        
        if (this.state.delivery >= 3)
            complete = true;

        return (
            <View style={styles.icon}>
                <View>
                    {this.taskCompleted(complete)}
                    </View>
                    <View style={{ 
                            marginLeft: 10,
                            marginRight: 20,
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}>
                        <Icon 
                            type='maps'
                            name='directions-car'
                            color='white'
                            size={40}
                        />
                    </View>
                    <View style={styles.background}>
                        <Text style={{ color: 'white', fontSize: 25 }}>
                            Drinks on Route
                        </Text>
                    </View>
                </View>
        );
    }

    PickupAtDestination = () => {
        complete = false;
        
        if (this.state.delivery >= 4)
            complete = true;

        return (
            <View style={styles.icon}>
                <View>
                    {this.taskCompleted(complete)}
                    </View>
                    <View style={{ 
                            marginLeft: 10,
                            marginRight: 20,
                            justifyContent: 'center', 
                            alignItems: 'center' 
                        }}>
                        <Icon 
                            type='communication'
                            name='location-on'
                            color='white'
                            size={40}
                        />
                    </View>
                    <View style={styles.background}>
                        <Text style={{ color: 'white', fontSize: 25 }}>
                            At Destination
                        </Text>
                    </View>
                </View>
        );
    }

    onUpdatePress = () => {
        const completed = this.state.delivery + 1;

        this.setState({ delivery: completed })
    }

    buttonStatus = () => {
        if (this.state.delivery >= 4)
            return (
                <Button 
                    icon={{
                        type: 'action',
                        name: 'thumb-up',
                        size: 30,
                    }}
                    title="Rate and Review!"
                    buttonStyle={styles.button_style}
                />
            );
        
        return (
            <Button 
                onPress={this.onUpdatePress}
                icon={{
                    type: 'action',
                    name: 'update',
                    size: 30,
                }}
                buttonStyle={styles.button_style}
            />
        );
    }

    render() {
        return (
            <ImageBackground 
                style={{
                width: '100%',
                height: '100%',
                }}
                source={require('../images/background.jpg')}
            >
                    
                {this.OrdersReceived()}

                {this.DrinksOrdered()}

                {this.DrinksOnRoute()}

                {this.PickupAtDestination()}

                {this.buttonStatus()}

            </ImageBackground>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    icon: {
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 30,
        flexDirection: 'row'
    },
    button_style: {
        backgroundColor: BUTTON_COLOR,
        width: 345,
        height: 45,
        borderWidth: 0,
        borderRadius: 5
    }
}

export default TrackDelivery;
