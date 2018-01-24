import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';


class PickedLocation extends Component {
    static navigationOptions = {
        title: 'Location Pick',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
        headerTintColor: 'white'
    }

    render() {
        return (
            <ScrollView>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={styles.container}>
                        <Image
                            source={require('../images/store_icon.png')}
                            style={{ width: 250, height: 250 }} 
                        />
                    </View>

                    <View style={styles.container}>
                        <Text>Location: ..store name..</Text>
                    </View>

                    <View style={styles.container}>
                        <Text>Drive: ..drive time..</Text>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 10 }}> 
                        <Button 
                            buttonStyle={{
                                margin: 10,
                                width: 300,
                                backgroundColor: '#1abc9c'
                            }}
                            title='Confirm Location'
                        />
                    </View>

                    <View style={styles.container}>
                        <Text>Confirm location and start CoffeePot!</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default PickedLocation;

const styles = {
    container: {
        marginBottom: 10
    }
};