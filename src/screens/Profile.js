import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements';

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
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
                    <View style={{ marginTop: 10 }}>
                        <Image
                            source={require('../images/profile_icon.png')}
                            style={{ width: 200, height: 200 }} 
                        />
                    </View>

                    <View>
                        <Text style={{ fontSize: 40 }}>First Last</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                        <View style={styles.container}>
                            <Image
                                source={require('../images/ratings_example_icon.png')}
                                style={{ width: 100, height: 25 }} 
                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={{ fontSize: 20 }}>Deliveries: ##</Text>
                        </View>
                    </View>
                </View>
                
                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginRight: 20 }}>
                            <Image 
                                source={require('../images/profile_icon.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </View>
                        <View>
                            <View style={{ marginBottom: 5 }}>
                                <Image
                                    source={require('../images/ratings_example_icon.png')}
                                    style={{ width: 50, height: 10 }} 
                                />
                            </View>
                            <Text>Name: First Last </Text>
                            <Text>Comments: Blah blah blah blah...</Text>
                        </View>
                    </View>
                </Card>

                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginRight: 20 }}>
                            <Image 
                                source={require('../images/profile_icon.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </View>
                        <View>
                            <View style={{ marginBottom: 5 }}>
                                <Image
                                    source={require('../images/ratings_example_icon.png')}
                                    style={{ width: 50, height: 10 }} 
                                />
                            </View>
                            <Text>Name: First Last </Text>
                            <Text>Comments: Blah blah blah blah...</Text>
                        </View>
                    </View>
                </Card>

                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginRight: 20 }}>
                            <Image 
                                source={require('../images/profile_icon.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </View>
                        <View>
                            <View style={{ marginBottom: 5 }}>
                                <Image
                                    source={require('../images/ratings_example_icon.png')}
                                    style={{ width: 50, height: 10 }} 
                                />
                            </View>
                            <Text>Name: First Last </Text>
                            <Text>Comments: Blah blah blah blah...</Text>
                        </View>
                    </View>
                </Card>

                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginRight: 20 }}>
                            <Image 
                                source={require('../images/profile_icon.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </View>
                        <View>
                            <View style={{ marginBottom: 5 }}>
                                <Image
                                    source={require('../images/ratings_example_icon.png')}
                                    style={{ width: 50, height: 10 }} 
                                />
                            </View>
                            <Text>Name: First Last </Text>
                            <Text>Comments: Blah blah blah blah...</Text>
                        </View>
                    </View>
                </Card>

                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginRight: 20 }}>
                            <Image 
                                source={require('../images/profile_icon.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </View>
                        <View>
                            <View style={{ marginBottom: 5 }}>
                                <Image
                                    source={require('../images/ratings_example_icon.png')}
                                    style={{ width: 50, height: 10 }} 
                                />
                            </View>
                            <Text>Name: First Last </Text>
                            <Text>Comments: Blah blah blah blah...</Text>
                        </View>
                    </View>
                </Card>

                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginRight: 20 }}>
                            <Image 
                                source={require('../images/profile_icon.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </View>
                        <View>
                            <View style={{ marginBottom: 5 }}>
                                <Image
                                    source={require('../images/ratings_example_icon.png')}
                                    style={{ width: 50, height: 10 }} 
                                />
                            </View>
                            <Text>Name: First Last </Text>
                            <Text>Comments: Blah blah blah blah...</Text>
                        </View>
                    </View>
                </Card>

                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginRight: 20 }}>
                            <Image 
                                source={require('../images/profile_icon.png')}
                                style={{ width: 50, height: 50 }}
                            />
                        </View>
                        <View>
                            <View style={{ marginBottom: 5 }}>
                                <Image
                                    source={require('../images/ratings_example_icon.png')}
                                    style={{ width: 50, height: 10 }} 
                                />
                            </View>
                            <Text>Name: First Last </Text>
                            <Text>Comments: Blah blah blah blah...</Text>
                        </View>
                    </View>
                </Card>

                <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                    <Text>
                        No More Reviews
                    </Text>
                </View>

            </ScrollView>
        );
    }
}

export default Profile;

const styles = {
    container: {
        margin: 20
    }
};