import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { AppLoading, Asset } from 'expo';

import * as actions from '../actions';
import * as urlBuilder from '../utility/url_builder';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

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

class PickLocationList extends Component {
    ///////////////////////////////////////////////////////////////////////////////
    // Customizes the stacknavigation header
    static navigationOptions = ({navigation}) => ({
        title: 'Pick Location',
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
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('GPSMap')}>
                <Icon
                    name="map-marker"
                    type="font-awesome"
                    color='grey'
                />
            </TouchableOpacity>
        ),
    })

    ///////////////////////////////////////////////////////////////////
    //  Method taken from Expo documents
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('../images/background.jpg')
        ]);

        await Promise.all([...imageAssets]);
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Defining The State
    //The 'region' state object will contain latitude and longitude of the user
    state = { region:{}, refreshing: false };

    ///////////////////////////////////////////////////////////////////////////////
    // Before anything is loaded, this will set the region to the user's current position
    // Then it will fetch the places that is nearby the user's location.  (nearby is determined by the radius set in "url_builder.js")
    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            // Changes the state of region to user's current location
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            });
            //The action 'fetchPlaces' will search for places with the label 'cafe' with respect to the 'region' state (user's current position)
            this.props.fetchPlaces(this.state.region);
        },
            (error) => console.log(new Date(), error),
            {enableHighAccuracy: false, timeout: 10000, maximumAge: 3000}
        );
    }

    ///////////////////////////////////////////////////////////////////////////////
    // This method renders cards depending on the information it was able to successfully receive
    renderCards() {
        if(this.props.places !== null) {
            // Maps the array of objects to get the specified fields
            return this.props.places.map(places  => {
                const { geometry, place_id, name, vicinity, photos, distance, duration } = places;
                if(photos !== undefined) {
                    const photoUrl = urlBuilder.buildPlacesPhotoUrl(photos[0].photo_reference);
                    return (
                        <TouchableOpacity
                            key={place_id}
                            onPress={() => {
                                this.props.loadPlaceDetails(name, vicinity, place_id, photos, distance, geometry);
                                this.props.navigation.navigate('PickedLocation', {headerTitle: name})}
                            }
                        >
                            <Card image={{uri: photoUrl}}>
                                <View style={styles.description}>
                                    <Text style={styles.bold}>{name}</Text>
                                    <View style = {styles.view_text}>
                                        <Text>{vicinity}</Text>
                                        <Text>{distance.text}   {duration.text} Drive</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    );
                }
                // This will return if there is no photo reference given
                return (
                    <TouchableOpacity
                        key={place_id}
                        onPress={() => {
                            this.props.loadPlaceDetails(name, vicinity, place_id, photos, distance, geometry);
                            this.props.navigation.navigate('PickedLocation', {headerTitle: name})
                        }}
                    >
                        <Card title='No Photo For This Location'>
                            <View style={styles.description}>
                                <Text style={styles.bold}>{name}</Text>
                                <View style = {styles.view_text}>
                                    <Text>{vicinity}</Text>
                                    <Text>{distance.text} away</Text>
                                    <Text>{duration.text} drive</Text>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                );
            })
        }
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Main render method
    render() {
        if(this.state.region.latitude !== undefined  && this.props.places !== null) {
            return (
              <ImageBackground 
                    style={{
                    width: '100%',
                    height: '100%',
                }}
                source={require('../images/background.jpg')}
                >
                  <ScrollView>
                      {this.renderCards()}
                  </ScrollView>
                </ImageBackground>
            );
        }
        return(
          <ImageBackground 
                    style={{
                    width: '100%',
                    height: '100%',
                }}
                source={require('../images/background.jpg')}
                >
                <View style = {styles.loadingStyle}>
                    <ActivityIndicator
                        size='large'
                        color='white'
                    />
                </View>
          </ImageBackground>
        );
    }
}

///////////////////////////////////////////////////////////////////////////////
// Styles Object
const styles = {
    description: {
        alignContent: 'center'
    },
    view_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bold: {
        fontWeight: 'bold'
    },
    image_style: {
        width: 50, 
        height: 50
    },
    button_style: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    loadingStyle: {
        flex: 1,
        justifyContent: 'center'
    }
}

///////////////////////////////////////////////////////////////////////////////
// MapStateToProps
// places the data that we received from our action and reducers into a variable
function mapStateToProps({ places }) {
    if (places.placesResponse === null ) {
        return {
          places: null,
          searchRegion: null,
        };
    }
    if(places.placesResponse !== null) {
        return {
            places: places.placesResponse.results,
            searchRegion: places.placesResponse.searchRegion,
        };
    }
}

export default connect(mapStateToProps, actions)(PickLocationList);
