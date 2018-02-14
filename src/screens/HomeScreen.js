import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, Card, Icon, Avatar, Rating } from 'react-native-elements';
import { Asset } from 'expo';
import { Spinner } from '../components/Spinner';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Coffee Pot',
        headerStyle: {
            backgroundColor: 'black',
            paddingRight: 10,
            paddingLeft: 10
        },
        headerTitleStyle: {
            color: 'white',
            fontFamily: 'brush-script-mt',
            fontSize: 30
        },
        headerTintColor: SECONDARY_COLOR,
        headerBackTitle: null,
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
                    name="home" 
                    size={30} 
                    color="grey"
                /> 
            );
        },
    })

    // async componentWillMount() {
    //     await Asset.loadAsync([require('../images/background.jpg')]);
    // }

    render() {
        // if (this.state.showLoading) {
        //     return <Spinner size="large" message="Authenticating..." />;
        // }
        return (
                <Image 
                    style={{
                    flex: 1,
                    resizeMode,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center'
                }}
                source={require('../images/background.jpg')}
                >
                    {/* <Text>Words Above Image</Text> */}
                </Image>
                
        );
    }
}

export default HomeScreen;

const resizeMode = 'center';

const styles = {
    backgroundImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    }
};