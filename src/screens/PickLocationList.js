import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as urlBuilder from '../utility/url_builder';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';


class PickLocationList extends Component {
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

    //defining state
    //The 'region' state object will contain latitude and longitude of the user
    state = { region:{} };

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
            //The action 'fetchPlaces' will search for places with the label 'cafe' with respect to the 'region' state (user's current position)
            this.props.fetchPlaces(this.state.region);

            if(this.props.places !== null) {
                this.props.places.map(places => {
                    const { geometry } = places;
                    this.props.fetchDistance(this.state.region, geometry.location)
                })
            }
        },
            (error) => console.log(new Date(), error),
            {enableHighAccuracy: false, timeout: 10000, maximumAge: 3000}
        );
    }

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

    renderCards() {
        //const { navigate } = this.props.navigation;
        if(this.props.places !== null) {
            console.log(this.props.places);
            return this.props.places.map(places  => {
                const { geometry, place_id, name, vicinity, photos, text } = places;
                // const { text } = places.dist;
                if(photos !== undefined) {
                    const photoUrl = urlBuilder.buildPlacesPhotoUrl(photos[0].photo_reference);
                    return (
                        <TouchableOpacity
                            key={place_id}
                            onPress={() => {
                                this.props.loadPlaceDetails(name, vicinity, place_id, photos);
                                this.props.navigation.navigate('PickedLocation', {headerTitle: name})}
                            }
                        >
                            <Card image={{uri: photoUrl}}>
                                <View style={styles.description}>
                                    <Text style={{fontWeight: 'bold'}}>{name}</Text>
                                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text>{vicinity}</Text>
                                        <Text>{text}</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    );
                }
                return (
                    <TouchableOpacity
                        key={place_id}
                        onPress={() => this.props.navigation.navigate('PickedLocation', {headerTitle: name})}
                    >
                        <Card>
                            <View style={styles.description}>
                                <Text style={{fontWeight: 'bold'}}>{name}</Text>
                                <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text>{vicinity}</Text>
                                    <Text>{text}</Text>
                                </View>
                            </View>
                        </Card>
                    </TouchableOpacity>
                );
            })
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderBttn()}
                {this.renderCards()}
            </ScrollView>
        );
    }
}

const styles = {
    description: {
        alignContent: 'center'
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
    }
}

function mapStateToProps({ places }) {
    if (places.placesResponse === null ) {
        return {
          places: null,
          searchRegion: null,
        };
    }
    if(places.placesResponse !== null) {
        console.log(places.placesResponse);
        return {
            places: places.placesResponse.results,
            searchRegion: places.placesResponse.searchRegion,
        };
    }
}

export default connect(mapStateToProps, actions)(PickLocationList);
