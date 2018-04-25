import React, { Component } from 'react';
import { View, Text, Geolocation, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView, { Marker, Callout } from 'react-native-maps';

import * as actions from '../actions';
import * as urlBuilder from '../utility/url_builder';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class GPSMap extends Component {
    ///////////////////////////////////////////////////////////////////////////////
    // Customizes the stacknavigation header
    static navigationOptions = ({navigation}) => ({
        title: 'GPS Map',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
            paddingRight: 10,
            paddingLeft: 10
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR,
        tabBarVisible: false
    })

    ///////////////////////////////////////////////////////////////////////////////
    //defining state
    //The 'region' state object will contain latitude and longitude of the user
    state = { region:{} };

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
    // This render method will place a marker on each location that si received from "fetchPlaces()"
    renderMarkers() {
        //console.log(this.props.places);
        const { navigate } = this.props.navigation
        if(this.props.places !== null) {
            return this.props.places.map(places => {
                const { geometry, place_id, name, vicinity, photos, distance, duration } = places;
                if(photos !== undefined) {
                    const photoUrl = urlBuilder.buildPlacesPhotoUrl(photos[0].photo_reference)
                    return (
                    <Marker
                        key={place_id}
                        coordinate={{
                            latitude: geometry.location.lat,
                            longitude: geometry.location.lng
                        }}
                        pinColor='red'
                    >
                        {/* Callout customizes the information that is shown when a marker is selected */}
                        <Callout>
                            <TouchableOpacity
                                    key={place_id}
                                    onPress={() => {
                                            this.props.loadPlaceDetails(name, vicinity, place_id, photos, distance, geometry);
                                            this.props.navigation.navigate('PickedLocation', {headerTitle: name});
                                        }
                                    }
                                >
                                <View style={styles.content}>
                                    <Image
                                        source={{uri: photoUrl}}
                                        style = {styles.image_style}
                                    />
                                    <View style = {styles.description}>
                                        <Text style={styles.bold}>{name}</Text>
                                        <Text>{vicinity}</Text>
                                        <Text>{distance.text}   {duration.text} Drive</Text>
                                    </View>
                                </View>
                            </TouchableOpacity> 
                        </Callout>
                    </Marker>
                );
                }
                // If there is no valid photo reference, it will render a marker with no photo (Weh)
                return (
                    <Marker
                        key={place_id}
                        coordinate={{
                            latitude: geometry.location.lat,
                            longitude: geometry.location.lng
                        }}
                        pinColor='red'
                    >
                        <Callout>
                            <TouchableOpacity
                                    key={place_id}
                                    onPress={() => {
                                            this.props.loadPlaceDetails(name, vicinity, place_id, photos, distance, geometry);
                                            this.props.navigation.navigate('PickedLocation', {headerTitle: name});
                                        }
                                    }
                                >
                                <View style={styles.content}>
                                    <View style = {styles.description}>
                                        <Text style={styles.bold}>{name}</Text>
                                        <Text>{vicinity}</Text>
                                        <Text>{distance.text}   {duration.text} Drive</Text>
                                    </View>
                                </View>
                            </TouchableOpacity> 
                        </Callout>
                    </Marker>
                );
        })}
    }
    ///////////////////////////////////////////////////////////////////////////////
    // Renders the map with specific settings and calls the render marker method
    renderMap() {
        return (
            <View style = {styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: this.state.region.latitude,
                        longitude: this.state.region.longitude,
                        latitudeDelta: 0.0122,
                        longitudeDelta: 0.0021,
                    }}
                    showsUserLocation={true}
                    showsPointsOfInterest={false}
                    showsMyLocationButton={true}
                    rotateEnabled={false}
                >
                   {this.renderMarkers()}
                </MapView>
            </View>
        );
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Main Render Method
    render() {
        const { navigate } = this.props.navigation
        //console.log(this.state.region.latitude);
        if(this.state.region.latitude !== undefined  && this.props.places !== null)
        {
            return (
                <View style={styles.container}>{this.renderMap()}</View>
            );
        }
        return(
            <View style = {styles.loadingStyle}>
                <ActivityIndicator
                    size='large'
                    color={BUTTON_COLOR}
                />
            </View>
        );
    }
}

//////////////////////////////////////////////////////
//Styles Object
const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },
    button_style: {
        width: 130,
        backgroundColor: BUTTON_COLOR
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    },
    image_style: {
        margin: 5, 
        width: 80, 
        height: 70
    },
    description: {
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    bold: {
        fontWeight: 'bold'
    },
    loadingStyle: {
        flex: 1,
        justifyContent: 'center'
    }
};

///////////////////////////////////////////////////////////////////////////////
// MapStateToProps
// places the data that we received from our action and reducers into a variable
function mapStateToProps({ places }) {
    if (places.placesResponse === null) {
        return { places: null, searchRegion: null };
    }
    return {
        places: places.placesResponse.results,
        searchRegion: places.placesResponse.searchRegion
    };
}

export default connect(mapStateToProps, actions)(GPSMap);