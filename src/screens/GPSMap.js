import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';


import * as actions from '../actions';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class GPSMap extends Component {
    static navigationOptions = {
        title: 'GPS Map',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
        headerTintColor: 'white'
    }

    //defining state
    state = { location: 'Azusa, CA' };
    
    componentWillMount() {
        // console.log(this.state.location);
        this.props.fetchPlaces(this.state.location);
    }    
       
    render() {
        const { navigate } = this.props.navigation;
        if(this.props.places !== null) {
            // console.log('/////////////////////////////////////////////////////////')
            // console.log(this.props.places[0].geometry.location.lat);
            return ( 
                this.props.places.map(place => {
                const { geometry } = place;
                console.log('places is not null');
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 34.130075,
                            longitude: -117.888359,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                    >
                        <Marker
                            coordinate={{
                                latitude: geometry.location.lat,
                                longitude: geometry.location.lng
                            }}
                        />
                    </MapView>
                </View>
            })
        );
        } else {
            return (
                <Text>Loading</Text>
            );
        }
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

    return {
        places: places.placesResponse.results,
        searchRegion: places.placesResponse.searchRegion
    };
}

export default connect(mapStateToProps, actions)(GPSMap);