import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

export default class Settings extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Settings',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
            paddingRight: 10,
            paddingLeft: 10
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
                    color={ SECONDARY_COLOR }
                />
            </TouchableOpacity>
        )
    })

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
