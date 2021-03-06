import React, { Component } from 'react';
import { Image, View, Text, ActivityIndicator } from 'react-native';
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
    state = {
        drinks: null,
        isReady: false,
        region: {
          latitude: '',
          longitude: ''
        },
        index: 0
    }

    componentWillMount() {
        this.setState({ drinks: 3 });
        navigator.geolocation.getCurrentPosition((position) => {
            // Changes the state of region to user's current location
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            });
            //The action 'fetchPlaces' will search for places with the label 'cafe' with respect to the 'region' state (user's current position)
            this.props.fetchCoffeePots(this.state.region);
        },
            (error) => console.log(new Date(), error),
            { enableHighAccuracy: false, timeout: 10000, maximumAge: 3000 }
        );
    }

    // containsOrders(coffeePots) {
    //     for(const i = 0; i < coffeePots.length; i++) {
    //         if(coffeePots[i].orders != undefined) {
    //             this.props.startTimer(timer.length)
    //         }
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     // console.log('-----this.props.coffeePots-----')
    //     // console.log(this.props.coffeePots);
    //     // console.log('-----nextProps.coffeePots-----')
    //     // console.log(nextProps.coffeePots);
    //     if(JSON.stringify(this.props.coffeePots) === JSON.stringify(nextProps.coffeePots)) {
    //         console.log(true);
    //     } else {
    //         console.log(false)
    //     }
    // }

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

    standardJoinPress = (deliverer) => {
      this.props.orderIDChange(deliverer.uid);
      this.props.navigate('OrderSelectionScreen');
    }
    

    renderCard() {
        const cups = [];

        for (var i = 0; i < this.state.drinks; i++) {
            cups.push(<Image key={i} source={require('../images/coffee_cup_symbol.png')}
                style={{
                    width: 25,
                    height: 50,
                    margin: 5
                }}
            />)
        }
        if (this.props.coffeePots !== null) {
          return this.props.coffeePots.map((coffeePots) => {
            const { deliverer, locDetails, text, timer, orders } = coffeePots;
            if (locDetails.photoUrl !== undefined) {
              return (
                <FlipCard
                    style={{ borderWidth: 0 }}
                    flipHorizontal={true}
                    flipVertical={false}
                    alignHeight={true}
                    alignWidth={true}
                    perspective={1000}
                    key={deliverer.uid}
                >
                    {/* Front side of the card */}
                    <View style={styles.face}>
                         <Card>
                            <View style={styles.view_card}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image
                                            source={{ url: locDetails.photoUrl }}
                                            style={styles.image_style}
                                        />
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <View style={styles.content}>
                                            <Text style={styles.bold}>Deliverer: </Text>
                                            <Text>{deliverer.name.firstName} {deliverer.name.lastName}</Text>
                                        </View>
                                        <Text style={styles.view_time}>{timer.length}:00 (On Hold)</Text>
                                        <Text>Tap Card To View More</Text>
                                    </View>
                                </View>
                                <Button
                                    title='Join'
                                    buttonStyle={styles.button_style}
                                    onPress={() => this.standardJoinPress(deliverer)}
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
                                            source={{ url: locDetails.photoUrl }}
                                            style={{ width: 100, height: 100 }}
                                        />
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                        <View style={{ padding: 5 }}>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                                {locDetails.name}
                                            </Text>
                                        </View>
                                        <View style={{ padding: 5 }}>
                                            <Text style={{ fontSize: 15 }}>
                                                Distance: {text}
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
                                        onPress={() => this.standardJoinPress(deliverer)}
                                    />
                                </View>
                            </View>
                        </Card>
                    </View>
                </FlipCard>
              );
            } else {
                return (
                    <FlipCard
                        style={{ borderWidth: 0 }}
                        flipHorizontal={true}
                        flipVertical={false}
                        alignHeight={true}
                        alignWidth={true}
                        perspective={1000}
                        key={deliverer.uid}
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
                                            <View style={styles.content}>
                                                <Text style={styles.bold}>Deliverer: </Text>
                                                <Text>{deliverer.name.firstName} {deliverer.name.lastName}</Text>
                                            </View>
                                            <TimerCountdown
                                                initialSecondsRemaining={300000}
                                                allowFontScaling={true}
                                                style={styles.view_time}
                                            />
                                            <Text>Tap Card To View More</Text>
                                        </View>
                                    </View>
                                    <Button
                                        title='Join'
                                        buttonStyle={styles.button_style}
                                        onPress={() => this.standardJoinPress(deliverer)}
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
                                            <Text> No Image Available</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center' }}>
                                            <View style={{ padding: 5 }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                                    {locDetails.name}
                                                </Text>
                                            </View>
                                            <View style={{ padding: 5 }}>
                                                <Text style={{ fontSize: 15 }}>
                                                    Distance: {text}
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
                                            onPress={() => this.standardJoinPress(deliverer)}
                                        />
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </FlipCard>
                  );
            }
          });
        }
    }

    render() {
        ///////////////////////////////////////////////////////////////////
        //  Method taken from Expo documents
        if (!this.state.isReady) {
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
        else if (this.state.region.latitude !== undefined && this.props.coffeePots !== null) {
            return (this.renderCard());
        }
        return (
          <View>
              <ActivityIndicator
                  size='large'
                  color={BUTTON_COLOR}
              />
          </View>
        );
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
        fontSize: 23
    },
    button_style: {
        backgroundColor: BUTTON_COLOR,
        borderWidth: 0,
        borderRadius: 5
    },
    image_style: {
        height: 150,
        width: 150,
        margin: 10
    },
    bold: {
        fontWeight: 'bold'
    },
    content: {
        flexDirection: 'row'
    },
};
function mapStateToProps({ coffee, order }) {
  if (coffee.coffeePots === null) {
    return { coffeePots: null, orderID: order.orderID };
  }
  return {
    coffeePots: coffee.coffeePots.results,
    orderID: order.orderID
  };
}

export default connect(mapStateToProps, actions)(CoffeePotCard);
