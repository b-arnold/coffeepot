import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

export default class Settings extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Settings',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
            paddingRight: 0,
            paddingLeft: 0
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
                    color={SECONDARY_COLOR}
                />
            </TouchableOpacity>
        )
    })

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        backgroundColor: '#ecf0f2'
                    }}
                >    
                    <Text style={{fontWeight: 'bold'}}>
                        Preferences
                    </Text>
                    {/* Edit Profile */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Edit Profile'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />

                    {/* Cards */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Cards'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />

                    {/* Privacy */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Privacy'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />

                    {/* Blocke Users */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Blocke Users'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />

                    {/* Notifications */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Notifications'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />

                    {/* Social Networks */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Social Networks'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />

                    <Text style={{fontWeight: 'bold'}}>
                        Security
                    </Text>

                    {/* TouchID & Pin*/}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='TouchID & Pin'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />
                    {/* Change Password */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Change Password'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />
                    {/* Remember Devices */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Remember Devices'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />

                    <Text style={{fontWeight: 'bold'}}>
                        Information
                    </Text>

                    {/* Legal */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Legal'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />
                    {/* Helpful Information */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Helpful Information'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />
                    {/* Send Feedback */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Send Feedback'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />
                    {/* Rate CoffeePot */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Rate CoffeePot'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />
                    {/* Sign Out of CoffeePot */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: '#B3B3B3'
                        }}
                        title='Sign Out of CoffeePot'
                        onPress={() => 
                            navigate('Settings')
                        }
                    />
                </View>
            </ScrollView>
            
        );
    }
}
