import React, { Component } from 'react';
import { 
    View, 
    Text,
    TouchableOpacity, 
    ImageBackground, 
    Image
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import TimerCountdown from 'react-native-timer-countdown';
import { Spinner } from '../components/Spinner';
import * as actions from '../actions';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Coffee Pot',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
            paddingRight: 10,
            paddingLeft: 10
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR,
            fontFamily: 'brush-script-mt',
            fontSize: 30
        },
        headerTintColor: SECONDARY_COLOR,
        headerBackTitle: null,
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon 
                    type='material-community'
                    name='menu'
                    color='grey'
                />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('PlaceOrder')}>
                <Icon 
                    type='font-awesome'
                    name='coffee'
                    color='grey'
                />
            </TouchableOpacity>
        ),
        tabBarIcon: () => {
            return (
                <Icon
                    name="home" 
                    size={30} 
                    color="grey"
                /> 
            );
        },
    })

    ///////////////////////////////////////////////////////////
    //// State of current CoffeePot
    state = {
        time: 0,
        alreadyStarted: false
    }

    componentWillMount() {
        // Sets state to start Coffee Pot for 10 minutes
        if (this.state.alreadyStarted === false) {
            if (this.props.time === true) {
                this.setState({ time: 600000 });
            }
        }
    }

    onAddOrderPress = () => {
        const drinks = this.props.drinks + 1;
        this.props.addOrder(drinks);
        console.log(this.props.drinks);
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
                <ImageBackground 
                    style={{
                    width: '100%',
                    height: '100%',
                }}
                source={require('../images/background.jpg')}
                >
                    <View>
                        <View style={styles.background}>
                            <Image
                                source={require('../images/CoffeePot-Logo-White-02.png')}
                                style={{
                                    width: 250,
                                    height: 250,
                                }}
                            />
                            <TimerCountdown
                                initialSecondsRemaining={this.state.time}
                                //onTick={() => this.setState({ alreadyStarted: true })}
                                //onTimeElapsed={() => this.setState({ alreadyStarted: false })}
                                //allowFontScaling='true'
                                style={{ fontSize: 50, color: 'white' }}
                            />
                        </View>
                        <View>
                            <View style={{ marginTop: 25 }}>
                                <Button 
                                    icon={{
                                        name: 'ios-navigate',
                                        type: 'ionicon',
                                        size: 30
                                    }}
                                    title='Track Delivery'
                                    buttonStyle={styles.button_style}
                                    onPress={() => navigate('GPS')}
                                />
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Button 
                                    icon={{
                                        name: 'message',
                                        type: 'entypo',
                                        size: 30
                                    }}
                                    title='Message Deliverer'
                                    buttonStyle={styles.button_style}
                                    onPress={() => navigate('MessageScreen')}
                                />
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <Button 
                                    icon={{
                                        name: 'circle-with-plus',
                                        type: 'entypo',
                                        size: 30
                                    }}
                                    title='Add Another Drink'
                                    buttonStyle={styles.button_style}
                                    onPress={this.onAddOrderPress}
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                
        );
    }
}

/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ coffee }) {
    return {
        time: coffee.time,
        drinks: coffee.drinks
    };
}

export default connect(mapStateToProps, actions)(HomeScreen);

const styles = {
    background: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    button_style: {
        backgroundColor: BUTTON_COLOR,
        width: 345,
        height: 45,
        borderWidth: 0,
        borderRadius: 5
    }
};