import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
import * as urlBuilder from '../utility/url_builder';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class PickedLocation extends Component {
    static navigationOptions = ({ navigation}) => ({
        title: navigation.state.params.headerTitle,
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR
    });

    render() {
        if(this.props.places!== null) {
            // console.log('//////this.props.places//////');
            // console.log(this.props.places);
            const { location, name, photos, place_id } = this.props.places;
            console.log(photos[0].photo_reference);
            if(photos !== undefined) {
                const photoUrl = urlBuilder.buildPlacesPhotoUrl(photos[0].photo_reference)
                return (
                    <View style={styles.container}>
                        <View>
                            <Image
                                uri={photoUrl}
                            />
                        </View>

                        <View>
                            <Text style={{fontWeight: 'bold'}} >{name}</Text>
                            <Text>{location}</Text>
                        </View>
                    </View>
                );
            }
        }
        return(
            <Text>Error Getting Details</Text>
        );
    }
}

const styles = {
    container: {
        justifyContent: 'center'
    }
};


function mapStateToProps({ places }) {
    // console.log('//////////places.selectedPlace///////////');
    // console.log(places.selectedPlace);
    return {
        places: places.selectedPlace
    };
}

export default connect(mapStateToProps, actions)(PickedLocation);

