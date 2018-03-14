import React, { Component } from 'react';
import { View, Text, Geolocation, ActivityIndicator, TouchableOpacity, Animated } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

import * as actions from '../actions';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class OrderGPSMap extends Component {
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
    state = { region:{} };

    componentWillMount() {
        this.index = 0;                                     // Better marker indexing than random chars
        this.animation = new Animated.Value(0);
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
////////////////////////////////////HELP -read console after you click on a location
//////// prints to console but does not update. Can't figure out to update it in mapstatetoprops
/////without it crashing... 
/////so write a name, choose a location and press place order...

    onButtonPress(places){
        const { navigate } = this.props.navigation;
        //this.props.location = markerID;
        console.log(places.place_id);
        console.log(places.name);
        this.props.orderUpdate(places.vicinity, places.place_id);
        navigate('PlaceOrder');
    }

    renderMarkers() {
        //console.log(this.props.places);
        if(this.props.places !== null) {
            return this.props.places.map(places => {
                const { geometry, place_id, name, vicinity, photos } = places;
                return (
                    <MapView.Marker
                        key={place_id}
                        coordinate={{
                            latitude: geometry.location.lat,
                            longitude: geometry.location.lng
                        }}
                        title={name}
                        description={vicinity}
                        onPress={() => this.onButtonPress(places)}
                    >
                        <Animated.View >
                            <Animated.View style={[styles.ring]}/>
                            <View style={styles.Marker}/>
                        </Animated.View>
                    </MapView.Marker>

                );
                console.log(places.placeid);
        })}
    }

    renderMap() {
        return (
            <View style = {styles.container}>
                <MapView
                    style={styles.map}
                    mapType='standard'
                    initialRegion={{
                        latitude: this.state.region.latitude,
                        longitude: this.state.region.longitude,
                        latitudeDelta: 0.0122,
                        longitudeDelta: 0.0021,
                    }}
                    showsUserLocation={true}
                    showsPointsOfInterest={false}
                    showsMyLocationButton={true}
                >
                   {this.renderMarkers()}
                </MapView>
            </View>
        );
    }

    render() {
        const { navigate } = this.props.navigation
        console.log(this.state.region.latitude);
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
    markerWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(130,4,150,0.9',
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(130,4,150,0.3)',
        position: 'absolute',
        borderWidth: 1,
        borderColor: 'rgba(130,4,150,0.5)',
    }
};

function mapStateToProps({ places }) {
    if (places.placesResponse === null) {
        //console.log(places.placesResponse);
        return {
          places: null,
          searchRegion: null,
        };
    }
    //  console.log('/////////////////////////////////////////////////////////')
    //  console.log(places.placesResponse.results);
    //  console.log('/////////////////////////////////////////////////////////')
    //  //console.log(places.placesResponse.searchRegion);

    return {
        places: places.placesResponse.results,
        searchRegion: places.placesResponse.searchRegion
    };
}

export default connect(mapStateToProps, actions)(OrderGPSMap);
