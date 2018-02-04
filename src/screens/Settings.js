import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
        headerTintColor: 'white'
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#ecf0f1'
                }}
            >
                {/* Setting 1 */}
                <Button 
                    buttonStyle={{
                        margin: 10,
                        width: 200,
                        backgroundColor: '#1abc9c'
                    }}
                    title='Setting 1'
                    onPress={() => 
                        navigate('Settings')
                    }
                />

                {/* Setting 2 */}
                <Button 
                    buttonStyle={{
                        margin: 10,
                        width: 200,
                        backgroundColor: '#1abc9c'
                    }}
                    title='Setting 2'
                    onPress={() => 
                        navigate('Settings')
                    }
                />

                {/* Setting 3 */}
                <Button 
                    buttonStyle={{
                        margin: 10,
                        width: 200,
                        backgroundColor: '#1abc9c'
                    }}
                    title='Setting 3'
                    onPress={() => 
                        navigate('Settings')
                    }
                />

                {/* Setting 4 */}
                <Button 
                    buttonStyle={{
                        margin: 10,
                        width: 200,
                        backgroundColor: '#1abc9c'
                    }}
                    title='Setting 4'
                    onPress={() => 
                        navigate('Settings')
                    }
                />

                {/* Setting 5 */}
                <Button 
                    buttonStyle={{
                        margin: 10,
                        width: 200,
                        backgroundColor: '#1abc9c'
                    }}
                    title='Setting 5'
                    onPress={() => 
                        navigate('Settings')
                    }
                />
            </View>
        );
    }
}
