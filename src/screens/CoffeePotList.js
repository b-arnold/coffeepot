import React, { Component } from 'react';
import { ImageBackground, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AppLoading, Asset } from 'expo';
import { Button, Card, Icon, Avatar, Rating } from 'react-native-elements';
import { Spinner } from '../components/Spinner';

import CoffeePotCard from '../components/CoffeePotCard';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

///////////////////////////////////////////////////////////////////
//  Method taken from Expo documents
function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return image.prefetch(image);
      }
        return Asset.fromModule(image).downloadAsync();
    });
}

class CoffeePotList extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Coffee Pots',
        //Changes the color of the header
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
            paddingRight: 10,
            paddingLeft: 10
        },
        //Changes the color of the Header Title
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        //Changes the color of the back button
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
                    name="grid"
                    type="entypo"
                    size={30}
                    color="grey"
                />
            );
        },
    })

    state = {
        isReady: false
    }

    ///////////////////////////////////////////////////////////////////
    //  Method taken from Expo documents
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('../images/CoffeePot-Logo-White-02.png'),
            require('../images/background.jpg')
        ]);

        await Promise.all([...imageAssets]);
    }

    render() {
        ///////////////////////////////////////////////////////////////////
        //  Method taken from Expo documents
        if (!this.state.isReady) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <AppLoading
                        startAsync={this._loadAssetsAsync}
                        onFinish={() => this.setState({ isReady: true })}
                        onError={console.warn}
                    />
                    <Spinner size="large" />
                </View>
            );
        }
        return (
            <ImageBackground
                    style={{
                    width: '100%',
                    height: '100%',
                }}
                source={require('../images/background.jpg')}
            >
                <ScrollView>
                  <View>
                    <CoffeePotCard
                      keyProp='cardKey'
                    />
                  </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}


export default CoffeePotList;
