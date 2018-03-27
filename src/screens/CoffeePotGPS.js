import React, { Component } from 'react';
import { View, Text, Geolocation, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView, { Marker, Callout } from 'react-native-maps';
import firebase from 'firebase';

import * as actions from '../actions';
import * as urlBuilder from '../utility/url_builder';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class CoffeePotGPS extends Component {
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
            //The action 'fetchCoffeePots' will get coffee pots from the database and the distance limit is currently 2 miles
            this.props.fetchCoffeePots(this.state.region);
        },
            (error) => console.log(new Date(), error),
            {enableHighAccuracy: false, timeout: 10000, maximumAge: 3000}
        );
    }
    
    ///////////////////////////////////////////////////////////////////////////////
    // This render method will place a marker on each location that si received from "fetchPlaces()"
    renderMarkers() {
        const { currentUser } = firebase.auth();
        //console.log(this.props.places);
        const { navigate } = this.props.navigation
        if(this.props.coffeePots !== null) {
            return this.props.coffeePots.map(coffeePots => {
                // 'text' is the distance that location is from the current user
                const { deliverer, locDetails, text } = coffeePots;
                if(locDetails.photoUrl !== undefined) {
                    if(currentUser.uid === deliverer.uid){
                        return (
                            <Marker
                                key={locDetails.place_id}
                                coordinate={{
                                    latitude: locDetails.geometry.location.lat,
                                    longitude: locDetails.geometry.location.lng
                                }}
                                image={require('../images/CoffeePot_MarkerWithCircle_Red.png')}
                            >
                                {/* Callout customizes the information that is shown when a marker is selected */}
                                <Callout>
                                    <View style={styles.content}>
                                        <Image
                                            source={{uri: locDetails.photoUrl}}
                                            style = {styles.image_style}
                                        />
                                        <View style={styles.description}>
                                            <View style={styles.content}>
                                                <Text style={styles.bold}>Deliverer: </Text>
                                                <Text>{deliverer.name.firstName} {deliverer.name.lastName} (You)</Text>
                                            </View>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <Text style={styles.bold}>{locDetails.name}</Text>
                                                <Text>{text} away</Text>
                                            </View>
                                            <Text>{locDetails.address}</Text>
                                        </View>
                                    </View>
                                </Callout>
                            </Marker>
                        );
                    }
                    return (
                        <Marker
                            key={locDetails.place_id}
                            coordinate={{
                                latitude: locDetails.geometry.location.lat,
                                longitude: locDetails.geometry.location.lng
                            }}
                            image={require('../images/CoffeePot_MarkerWithCircle_Green.png')}
                        >
                            {/* Callout customizes the information that is shown when a marker is selected */}
                            <Callout>
                                <View style={styles.content}>
                                    <Image
                                        source={{uri: locDetails.photoUrl}}
                                        style = {styles.image_style}
                                    />
                                    <View style={styles.description}>
                                        <View style={styles.content}>
                                            <Text style={styles.bold}>Deliverer: </Text>
                                            <Text>{deliverer.name.firstName} {deliverer.name.lastName}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={styles.bold}>{locDetails.name}</Text>
                                            <Text>{text} away</Text>
                                        </View>
                                        <Text>{locDetails.address}</Text>
                                    </View>
                                </View>
                            </Callout>
                        </Marker>
                    );
                }
                // If there is no valid photo reference, it will render a marker with no photo (Weh)
                return (
                    <Marker
                        key={locDetails.place_id}
                        coordinate={{
                            latitude: locDetails.geometry.location.lat,
                            longitude: locDetails.geometry.location.lng
                        }}
                        image={require('../images/CoffeePot_MarkerWithCircle_Green.png')}
                    >
                        <Callout>
                                <View style={styles.content}>
                                    <View style={styles.description}>
                                        <View style={styles.content}>
                                            <Text style={styles.bold}>Deliverer: </Text>
                                            <Text>{deliverer.name.firstName} {deliverer.name.lastName}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={styles.bold}>{locDetails.name}</Text>
                                            <Text>{text} away</Text>
                                        </View>
                                        <Text>{locDetails.address}</Text>
                                    </View>
                                </View>
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

    ///////////////////////////////////////////////////////////////////////////////
    // Main Render Method
    render() {
        const { navigate } = this.props.navigation
        //console.log(this.state.region.latitude);
        if(this.state.region.latitude !== undefined  && this.props.coffeePots !== null)
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
        flexDirection: 'row'
    },
    image_style: {
        width: 85, 
        height: 80
    },
    description: {
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
function mapStateToProps({ coffee }) {
    if (coffee.coffeePots === null) {
        return { coffeePots: null };
    }
    return { coffeePots: coffee.coffeePots.results };
}

export default connect(mapStateToProps, actions)(CoffeePotGPS);