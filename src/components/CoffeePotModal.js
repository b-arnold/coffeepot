import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Modal, TouchableWithoutFeedback} from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import * as actions from '../actions';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class CoffeePotModal extends Component {
    standardJoinPress = (deliverer) => {
        this.props.orderIDChange(deliverer.uid);
        this.props.navigate('OrderSelectionScreen');
      }
    renderCard() {
        const { deliverer, locDetails, distance } = this.props.selectedCoffeePot;
        if(locDetails.photoUrl !== undefined && locDetails.photoUrl !== null) {
            return (
                <Card
                    image={{uri: locDetails.photoUrl}}
                    containerStyle={{height: 240}}
                >
                    <View style={styles.content}>
                        <View style={styles.description}>
                            <View style={styles.content}>
                                <Text style={styles.bold}>Deliverer: </Text>
                                <Text>{deliverer.name.firstName} {deliverer.name.lastName}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.bold}>{locDetails.name}</Text>
                                <Text>{distance} away</Text>
                            </View>
                            <Text>{locDetails.address}</Text>
                        </View>
                    </View>
                </Card>
            );
        }
        return(
            <Card
                title='No Photo For This Location'
                containerStyle={{height: 140}}
            >
                <View style={styles.content}>
                    <View style={styles.description}>
                        <View style={styles.content}>
                            <Text style={styles.bold}>Deliverer: </Text>
                            <Text>{deliverer.name.firstName} {deliverer.name.lastName}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.bold}>{locDetails.name}</Text>
                            <Text>{distance} away</Text>
                        </View>
                        <Text>{locDetails.address}</Text>
                    </View>
                </View>
            </Card>
        );
    }

    renderBttn() {
        const { deliverer } = this.props.selectedCoffeePot;
        return(
            <View style={styles.bttn_view_style}>
                <Button
                    title='Join Coffee Pot'
                    buttonStyle={styles.button_style}
                    raised
                    onPress={() => {
                        this.standardJoinPress(deliverer)
                        this.props.setModalVisible(false);
                    }}
                />
                <Button
                    title='Go Back'
                    buttonStyle={styles.button_style}
                    raised
                    onPress={() => {this.props.setModalVisible(false)}}
                />
            </View>
        );
    }
    render() {
        if(this.props.selectedCoffeePot != null) {
            const { deliverer, locDetails, distance } = this.props.selectedCoffeePot;
            // If there is a photo, render modal with a photo, else don't
            if(locDetails.photoUrl !== undefined && locDetails.photoUrl !== null) {
                return (
                    <Modal
                        visible={this.props.modalVisible}
                        animationType='fade'
                        transparent={true}
                        presentationStyle={'overFullScreen'}
                    >
                        <TouchableWithoutFeedback onPress={() => this.props.setModalVisible(false)}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    backgroundColor:'rgba(64,64,64,.7)'
                                }}
                            >
                                <View style={{backgroundColor:'white', padding: 10}}>
                                    {this.renderCard()}
                                    {this.renderBttn()}
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                );
            }
            //-------------------------------------------------------------------------
            //--------------------If no photo is available-----------------------------
            return (
                <Modal
                    visible={this.state.modalVisible}
                    animationType='fade'
                    transparent={true}
                    presentationStyle={'overFullScreen'}
                >
                    <TouchableWithoutFeedback onPress={() => this.props.setModalVisible(false)}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                backgroundColor:'rgba(64,64,64,.7)'
                            }}
                        >
                            <View style={{backgroundColor:'white', padding: 10}}>
                                {this.renderCard()}
                                {this.renderBttn()}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            );
        }
        return (
            <View>
                <Text />
            </View>
        )
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
        width: 160,
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
    },
    bttn_view_style: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
};

///////////////////////////////////////////////////////////////////////////////
// MapStateToProps
function mapStateToProps({ coffee }) {
    if (coffee.selectedCoffeePot === null) {
        return { selectedCoffeePot: null };
    }
    return { selectedCoffeePot: coffee.selectedCoffeePot };
}

export default connect(mapStateToProps, actions)(CoffeePotModal);