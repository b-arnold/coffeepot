import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import MapView from 'react-native-maps';

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
        headerTintColor: 'white',
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
                >
                    <Button 
                        iconRight={{
                            name: 'plus-circle',
                            type: 'material-community',
                            size: 25
                        }}
                        title='List View'
                        buttonStyle={styles.button_style}
                        rounded
                        onPress = {() => navigate('CoffeePotList')}
                    />
                </MapView>
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