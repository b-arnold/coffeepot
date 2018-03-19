import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as urlBuilder from '../utility/url_builder';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';


class PickLocationList extends Component {
    ///////////////////////////////////////////////////////////////////////////////
    // Customizes the stacknavigation header
    static navigationOptions = {
        title: 'Pick Location',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Defining The State
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
    // This method will render the GPS View Button (Probably will be removed soon)
    renderBttn() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={styles.button_style}
            >
                <Button 
                    iconRight={{
                        name: 'map-marker',
                        type: 'font-awesome',
                        size: 25
                    }}
                    title='GPS View'
                    buttonStyle={{ backgroundColor: BUTTON_COLOR }}
                    rounded
                    onPress={() => navigate('GPSMap')}
                />
            </View>  
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
                                this.props.loadPlaceDetails(name, vicinity, place_id, photos, distance.text);
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
                            this.props.loadPlaceDetails(name, vicinity, place_id, photos, distance.text);
                            this.props.navigation.navigate('PickedLocation', {headerTitle: name})
                        }}
                    >
                        <Card title='No Photo For This Location'>
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
            })
        }
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Main render method
    render() {
        if(this.state.region.latitude !== undefined  && this.props.places !== null) {
            return (
                <ScrollView>
                    {this.renderBttn()}
                    {this.renderCards()}
                </ScrollView>
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
