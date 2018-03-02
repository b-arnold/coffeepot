import React, { Component } from 'react';
import { View, Text, Geolocation, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView, { Marker, Callout } from 'react-native-maps';

import * as actions from '../actions';
import * as urlBuilder from '../utility/url_builder';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class GPSMap extends Component {
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
                    name="location-on"
                    type="material"
                    size={30}
                    color="grey"
                />
            );
        }
    })

    //defining state
    //The 'region' state object will contain latitude and longitude of the user
    state = { region:{} };

    //////////////////////////////////////////////////////
    // Component
    componentWillMount() {
        // console.log(this.state.location);
        navigator.geolocation.getCurrentPosition((position) => {
            //console.log(position);
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
            });
            //console.log(this.state.region.latitude);
            //console.log(this.state.region.longitude);
            //The action 'fetchPlaces' will search for places with the label 'cafe' with respect to the 'region' state (user's current position)
            this.props.fetchPlaces(this.state.region);
        },
            (error) => console.log(new Date(), error),
            {enableHighAccuracy: false, timeout: 10000, maximumAge: 3000}
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            //console.log('received prop')
            this.setState({ places: nextProps.places });
        }
    }

    
    //////////////////////////////////////////////////////
    // Render Components
    renderMarkers() {
        //console.log(this.props.places);
        const { navigate } = this.props.navigation
        if(this.props.places !== null) {
            return this.props.places.map(places => {
                const { geometry, place_id, name, vicinity, photos, text } = places;
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
                        <Callout>
                            <TouchableOpacity
                                    key={place_id}
                                    
                                    onPress={() => {
                                            this.props.loadPlaceDetails(name, vicinity, place_id, photos);
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
                                        <Text style={{fontWeight: 'bold'}}>{name}</Text>
                                        <Text>{vicinity}</Text>
                                        <Text>{text}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity> 
                        </Callout>
                    </Marker>
                );
                }
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
                                            this.props.loadPlaceDetails(name, vicinity, place_id, photos);
                                            this.props.navigation.navigate('PickedLocation', {headerTitle: name});
                                        }
                                    }
                                >
                                <View style={styles.content}>
                                    <View style = {styles.description}>
                                        <Text style={{fontWeight: 'bold'}}>{name}</Text>
                                        <Text>{vicinity}</Text>
                                        <Text>{text}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity> 
                        </Callout>
                    </Marker>
                );
        })}
    }

    renderMap() {
        return (
            <View style = {styles.container}>
                <MapView
                    style={styles.map}
                    mapType='hybrid'
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

    render() {
        const { navigate } = this.props.navigation
        //console.log(this.state.region.latitude);
        if(this.state.region.latitude !== undefined)
        {
            return (
                <View style={styles.container}>{this.renderMap()}</View>
            );
        }
        return(
            <View style = {styles.container}>
                <ActivityIndicator
                    size='large'
                    color={PRIMARY_COLOR}
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
    }
};

function mapStateToProps({ places }) {
    if (places.placesResponse === null) {
        //console.log(places.placesResponse);
        return {
          places: null,
          searchRegion: null
        };
    }
    // console.log('/////////////////////////////////////////////////////////')
    // console.log(places.placesResponse.results);
    // console.log('/////////////////////////////////////////////////////////')
    // console.log(places.placesResponse.searchRegion);
    console.log(places.placesResponse);
    return {
        places: places.placesResponse.results,
        searchRegion: places.placesResponse.searchRegion
    };
}

export default connect(mapStateToProps, actions)(GPSMap);
