import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import Modal from "react-native-modal";

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
        headerTintColor: SECONDARY_COLOR,
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
    });

    state = { modalVisible: false };

    toggleModalVisible = () => {
        this.setState({modalVisible: !this.state.modalVisible});
        console.log(this.state.modalVisible)
    }

    renderModal() {
        return (
            <Modal
                isVisible={this.state.modalVisible}
                onBackButtonPress={() => {this.toggleModalVisible()}}
                onBackdropPress={() => {this.toggleModalVisible()}}
                animationIn='slideInUp'
                animationOut='slideOutDown'
                style = {{ flex: 1, flexDirection: 'column' }}
            >
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white'}}>
                    <Text>Create Coffee Pot At This Location?</Text>
                    <Button
                        title='Confirm'
                    />
                </View>
            </Modal>
        );
    }
    

    render() {
        const { location, name, photos, place_id } = this.props.places;
        if(this.props.places!== null) {
            if(photos !== undefined) {
                const photoUrl = urlBuilder.buildPlacesPhotoUrl(photos[0].photo_reference)
                return (
                    <View style={styles.container}>
                        <Image
                            source={{uri: photoUrl}}
                            style = {styles.image_style}
                        />
                        <Text style={{fontWeight: 'bold'}} >{name}</Text>
                        
                        <Text>{location}</Text>

                        <Button 
                            iconLeft={{
                                name: 'plus-circle',
                                type: 'material-community',
                                size: 25
                            }}
                            title='Confirm Location'
                            buttonStyle={styles.button_style}
                        />
                        {this.renderModal()}
                    </View>
                );
            }
        }
        return(
            <View style={styles.container}>
                <Text>No Photo For This Location</Text>
                <Text style={{fontWeight: 'bold'}} >{name}</Text>
                
                <Text>{location}</Text>

                <Button 
                    iconLeft={{
                        name: 'plus-circle',
                        type: 'material-community',
                        size: 25
                    }}
                    title='Create Coffee Pot'
                    buttonStyle={styles.button_style}
                    onPress={() => {this.toggleModalVisible()}}
                />
                {this.renderModal()}
            </View>
        );
    }
}

const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    button_style: {
        backgroundColor: BUTTON_COLOR,
        margin: 10
    },
    image_style: {
        margin: 10, 
        width: 350, 
        height: 250
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

