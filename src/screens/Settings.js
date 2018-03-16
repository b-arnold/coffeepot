import React, { Component } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

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
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#abb8c3'
                    }}
                >    
                    <Text style={{fontWeight: 'bold', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        Preferences
                    </Text>
                    {/* Edit Profile */}
                    <Button 
                        buttonStyle={{
                            margin: 1,
                            width: 330,
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
                            backgroundColor: BUTTON_COLOR
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
