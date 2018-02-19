import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MapView from 'react-native-maps';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class GPSMap extends Component {
    static navigationOptions = {
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
        },
    }
       
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: 34.1336186,
                    longitude: -117.9075627,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />
                {/* </MapView> */}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
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

export default GPSMap;