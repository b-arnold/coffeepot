import React, { Component } from 'react';
import { ImageBackground, View, Text, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import { AppLoading, Asset } from 'expo';
import { Button, Card, Icon, Avatar, Rating } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
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

    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
        keyId: '',
        region: {
          latitude: '',
          longitude: ''
        },
        refreshing: false
      };
      this.getPlaceId = this.getPlaceId.bind(this);
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
          this.props.fetchCoffeePots(this.state.region);
      },
          (error) => console.log(new Date(), error),
          { enableHighAccuracy: false, timeout: 10000, maximumAge: 3000 }
      );
    }

    onRefresh() {
        this.setState({ refreshing: true });
        this.props.fetchCoffeePots(this.state.region).then(() => {
            this.setState({refreshing: false});
        })

    }

    getPlaceId(placeID) {
      this.setState({
        keyId: placeID
      });
    }

    render() {
        ///////////////////////////////////////////////////////////////////
        //  Method taken from Expo documents
        if (this.props.coffeePots !== null) {
          const { navigate } = this.props.navigation;
          return (
              <ImageBackground
                      style={{
                      width: '100%',
                      height: '100%',
                  }}
                  source={require('../images/background.jpg')}
              >
                  <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                            title='Refresh List'
                            titleColor='white'
                            tintColor='white'
                        />
                    }
                  >
                    <CoffeePotCard
                        key={this.state.keyId}
                        getPlaceId={this.getPlaceId}
                        navigate={navigate}
                    />
                  </ScrollView>
              </ImageBackground>
          );
        }
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
}

function mapStateToProps({ coffee }) {
  if (coffee.coffeePots === null) {
    return { coffeePots: null };
  }
  return { coffeePots: coffee.coffeePots.results };
}


export default connect(mapStateToProps, actions)(CoffeePotList);
