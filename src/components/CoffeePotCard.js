import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { Button, Card, Rating } from 'react-native-elements';
import { AppLoading, Asset } from 'expo';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../actions';
//NPM Packages
import FlipCard from 'react-native-flip-card';
import TimerCountdown from 'react-native-timer-countdown';

import { BUTTON_COLOR } from '../constants/style';

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

class CoffeePotCard extends Component {
    constructor(props) {
        super(props);

        state = {
            drinks: null,
            isReady: false
        }
    }

    componentWillMount() {
        this.setState({ drinks: 3 });

        //Load All Coffee Pots
      //  this.props.coffeePotFetch();
    }

    ///////////////////////////////////////////////////////////////////
    //  Method taken from Expo documents
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('../images/CoffeePot-Logo-Black-02.png'),
            require('../images/coffee_cup_symbol.png'),
            require('../images/store_icon.png')
        ]);

        await Promise.all([...imageAssets]);
    }

    renderCard = () => {

        var cups = []
        for (var i = 0; i < this.state.drinks; i++ )
        {
            cups.push(<Image key={i} source={require('../images/coffee_cup_symbol.png')}
                style={{
                    width: 25,
                    height: 50,
                    margin: 5
                }}
            />)
        }


        return (
            <FlipCard
                style={{borderWidth: 0}}
                flipHorizontal={true}
                flipVertical={false}
                alignHeight={true}
            >
                {/* Front side of the card */}
                <View style={styles.face}>
                     <Card>
                        <View style={styles.view_card}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        source={require('../images/CoffeePot-Logo-Black-02.png')}
                                        style={styles.image_style}
                                    />
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <TimerCountdown
                                        initialSecondsRemaining={300000}
                                        allowFontScaling={true}
                                        style={styles.view_time}
                                    />
                                </View>
                            </View>
                            <Button
                                title='Join'
                                buttonStyle={styles.button_style}
                            />
                        </View>
                    </Card>
                </View>

                {/* Back side of the card */}
                <View style={styles.back}>
                    <Card>
                        <View style={styles.view_card}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ alignItems: 'center', marginRight: 5 }}>
                                    <Image
                                        source={require('../images/store_icon.png')}
                                        style={{ width: 100, height: 100 }}
                                    />
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <View style={{ padding: 5 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                            Coffee Shop Name
                                        </Text>
                                    </View>
                                    <View style={{ padding: 5 }}>
                                        <Text style={{ fontSize: 15 }}>
                                            Distance: ...
                                        </Text>
                                    </View>
                                    <View style={{ marginTop: 5, marginLeft: 5 }}>
                                        <Rating
                                            imageSize={15}
                                            readonly
                                            //starting value will equal all ratings together out of five
                                            startingValue={3}
                                            ratingBackgroundColor='transparent'
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginRight: 5, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                        Cups Joined:
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                }}>
                                    {cups.map(function(img,i){
                                    return img;
                                    })}
                                </View>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Button
                                    title='Join'
                                    buttonStyle={styles.button_style}
                                />
                            </View>
                        </View>
                    </Card>
                </View>
            </FlipCard>
        );
    }

    render() {
        ///////////////////////////////////////////////////////////////////
        //  Method taken from Expo documents
        if( !this.state.isReady ) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <AppLoading
                        startAsync={this._loadAssetsAsync}
                        onFinish={() => this.setState({ isReady: true })}
                        onError={console.warn}
                    />
                    {/* <Spinner size="large"/>  */}
                </View>
            );
        }

        return (this.renderCard());
    }
}

//////////////////////////////////////////////////////////////////////////////
// Style object
const styles = {
    view_card: {
        justifyContent: 'center'
    },
    view_time: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        fontSize: 40
    },
    button_style: {
        backgroundColor: BUTTON_COLOR,
        borderWidth: 0,
        borderRadius: 5
    },
    image_style: {
        height: 165,
        width: 165
    }
};
function mapStateToProps({ list }) {
  return {
    coffeePot: list.coffeePot
  };
}

export default connect(mapStateToProps, actions)(CoffeePotCard);
