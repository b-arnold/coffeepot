import React, { Component } from 'react';
import { 
    Alert,
    View, 
    Text, 
    TouchableOpacity,
    ImageBackground,
    Image 
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { AppLoading, Asset } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

///////////////////////////////////////////////////////////////////
//  Method taken from Expo documents
function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
}

class ChooseDelivery extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Delivery',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
            paddingRight: 10,
            paddingLeft: 10
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR,
        headerBackTitle: null,
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <Icon 
                    type='material-community'
                    name='menu'
                    color={ SECONDARY_COLOR }
                />
            </TouchableOpacity>
        )
    })

    ///////////////////////////////////////////////////////////////////
    //  Method taken from Expo documents
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('../images/background.jpg')
        ]);

        await Promise.all([...imageAssets]);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground 
                style={{
                width: '100%',
                height: '100%',
            }}
            source={require('../images/background.jpg')}
            >
                <View style={styles.mainContainer}>
                    <View style={{marginBottom: 10}}>
                        <Button 
                            buttonStyle={styles.bttn_style}
                            title='Existing Order'
                            rounded
                            onPress={() => navigate('ExistingOrdersList')}
                        />
                    </View>
                    <View style={{marginBottom: 50}}>
                        <Text style={styles.font_style}>
                            Deliver an order that has been submitted!
                        </Text>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <Button 
                            buttonStyle={styles.bttn_style}
                            title='Pick Location'
                            rounded
                            onPress={() => {
                                if (this.props.myCoffeePot === null) {
                                    navigate('PickLocationList')
                                } else {
                                    Alert.alert('You Already Have A Coffee Pot!')
                                }
                            }}
                        />
                    </View>
                    <View style={{marginBottom: 30}}>
                        <Text style={styles.font_style}>
                            Choose a location to start a CoffeePot!
                        </Text>
                    </View>
                </View>
        </ImageBackground>
        )
    }
}

const styles = {
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'transparent'
    },
    bttn_style: {
        backgroundColor: BUTTON_COLOR,
        width: 345,
        height: 45,
        borderWidth: 0,
        borderRadius: 5
    },
    font_style: {
        color: 'white',
        fontSize: 15
    }
}

/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ coffee }) {
    if(coffee.myCoffeePot === null) {
        return { myCoffeePot: null}
    }
    return {
        hasCoffeePot: coffee.hasCoffeePot,
        time: coffee.time,
        drinks: coffee.drinks,
        myCoffeePot: coffee.myCoffeePot
    };
}

export default connect(mapStateToProps, actions)(ChooseDelivery);
