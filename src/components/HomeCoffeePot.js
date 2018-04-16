import { AppLoading, Asset } from 'expo';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon, Rating } from 'react-native-elements';
import TimerCountdown from 'react-native-timer-countdown';
import axios from 'axios';
import * as firebase from 'firebase';

import { Spinner } from '../components/Spinner';
import CountDown from '../components/CountDown';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

const cup_image = require('../images/coffee_cup_symbol.png');
const cups = [{cup_image},{cup_image},{cup_image},{cup_image},{cup_image}]

///////////////////////////////////////////////////////////////////
//  Method taken from Expo documents
function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
}

class HomeCoffeePot extends Component {
    ///////////////////////////////////////////////////////////
    //// State of current CoffeePot
    state = {
        isReady: false,
        drinks: null,
        firstScreen: true,
        secondScreen: false,
        thirdScreen: false,
    }

    ///////////////////////////////////////////////////////////////////
    //  Method taken from Expo documents
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('../images/CoffeePot-Logo-White-02.png'),
            require('../images/coffee_cup_symbol.png'),
            require('../images/store_icon.png')
        ]);

        await Promise.all([...imageAssets]);
    }

    componentWillMount() {
        // Sets state to start Coffee Pot for 10 minutes
        const { currentUser } = firebase.auth();
        this.props.fetchMyCoffeePot(currentUser.uid);
        this.setState({ drinks: this.props.drinks })
    }

    async startTimer() {
        // Test
        const { timer } = this.props.myCoffeePot;
        const { currentUser } = firebase.auth();
        
        await axios.post('https://us-central1-coffeepot-e0cb9.cloudfunctions.net/startCloudTimer', {
            data: {
                timer: timer,
             }
        }).then(function(response) {
            console.log('timer started')
        })
    }


    renderNoCoffeePot() {
        return (
            <View style={styles.background}>
                    <View style={{alignItems: 'center' }}>
                        <Image
                            source={require('../images/CoffeePot-Logo-White-02.png')}
                            style={{
                                width: 250,
                                height: 250,
                            }}
                        />
                        <Text style={styles.text_style}>No Coffee Pot</Text>
                    </View>
            </View>
        );
    }
    
    renderCoffeePotTimer() {
        const { timer } = this.props.myCoffeePot;
        console.log(this.props.startTimer);
        if(this.props.startTimer === false) {
            return (
                <View style={styles.background}>
                    <TouchableOpacity onPress={this.onFirstPress}> 
                        <Image
                            source={require('../images/CoffeePot-Logo-White-02.png')}
                            style={{
                                width: 250,
                                height: 250,
                            }}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <Text style = {{ color: 'white', fontSize: 20 }}>{timer}:00 (On Hold)</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        } else {
            this.startTimer()
            return (
                <View style={styles.background}>
                    <TouchableOpacity onPress={this.onFirstPress}> 
                        <Image
                            source={require('../images/CoffeePot-Logo-White-02.png')}
                            style={{
                                width: 250,
                                height: 250,
                            }}
                        />
                        <View style={{ alignItems: 'center'}}>
                            <TimerCountdown
                                initialSecondsRemaining={ timer * 60000 }
                                style={{ fontSize: 20, color: 'white' }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    renderNumberOfDrinks() {
        const { deliverer } = this.props.myCoffeePot;
        var cups = [] 
        for (var i = 0; i < this.props.drinks; i++ ) {
            cups.push(<Image key={i} source={require('../images/coffee_cup_symbol.png')}
                style={{
                    width: 50,
                    height: 100,
                    margin: 5
                }}
            />)
        }

        return (
            <View style={styles.background}>
                <TouchableOpacity onPress={this.onSecondPress}>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.bold}>Deliverer: </Text>
                            <Text style={styles.text_style}>{deliverer.name.firstName} {deliverer.name.lastName}</Text>
                        </View>
                        <View
                            style={{ 
                                flexDirection:'row',
                                marginTop: 10,
                                marginBottom: 20
                            }}>
                            {cups.map(function(img,i){
                                return img;
                            })}
                        </View>
                        <Text style={styles.text_style}>
                            Number of Drinks: {this.props.drinks}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    // Renders the shop information details
    renderShopInformation() {
        const { locDetails } = this.props.myCoffeePot;
        return (
            <View style={styles.background}>
                <TouchableOpacity onPress={this.onThirdPress}>
                    <View style={{alignItems: 'center'}}>
                        <Image
                            source={{uri: locDetails.photoUrl}}
                            style={styles.image_style}
                        />
                        <Text style={styles.bold}>{locDetails.name}</Text>
                        <Text style={styles.text_style}>{locDetails.address}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    onFirstPress = () => {
        this.setState({ firstScreen: false })
        this.setState({ secondScreen: true })
    }

    onSecondPress = () => {
        this.setState({ secondScreen: false })
        this.setState({ thirdScreen: true })
    }

    onThirdPress = () => {
        this.setState({ thirdScreen: false })
        this.setState({ firstScreen: true })
    }

    renderScreenView = () => {
        if (this.state.secondScreen)
            return ( this.renderNumberOfDrinks() );
        else if (this.state.thirdScreen)
            return ( this.renderShopInformation() );
        
        return ( this.renderCoffeePotTimer() );
    }

    render() {
        ///////////////////////////////////////////////////////////////////
        //  Method taken from Expo documents
        if( this.state.isReady != true) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <AppLoading 
                        startAsync={this._loadAssetsAsync}
                        onFinish={() => this.setState({ isReady: true })}
                        onError={console.warn}
                    />
                    <Spinner size="large"/> 
                </View>
            );
        }
        else if( this.props.myCoffeePot != null ) {
            return (
                <View style={styles.container}>
                    {this.renderScreenView()}
                </View>
            );
        }
        return (
            <View>
                {this.renderNoCoffeePot()}
            </View>
        );
    }
}

const styles = {
    background: {
        flex: 1,
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
    },
    container: {
        flexDirection: 'row'
    },
    text_style: {
        color: 'white',
        fontSize: 20
    },
    image_style: {
        width: 400,
        height: 200,
        borderWidth: 5,
        borderColor: 'white',
        margin: 10
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
};

/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ coffee }) {
    if(coffee.myCoffeePot === null) {
        return { myCoffeePot: null}
    }
    return {
        hasCoffeePot: coffee.hasCoffeePot,
        drinks: coffee.drinks,
        myCoffeePot: coffee.myCoffeePot
    };
}

export default connect(mapStateToProps, actions)(HomeCoffeePot);