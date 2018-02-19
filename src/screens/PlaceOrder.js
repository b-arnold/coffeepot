import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Button, Card } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

const window_width =Dimensions.get('window').width;

export default class PlaceOrder extends Component {
    static navigationOptions = {
        title: 'Place Order',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
            
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR,
        tabBarVisible: false
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ScrollView>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>FirstName LastName</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Location: Starbucks, Azusa</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style ={styles.title_style}>Order:{"\n"}</Text>
                            <Text>Grande, Iced, Vanilla {"\n"} Caffe Latte{"\n"}</Text>

                            <View style={styles.button_container}>
                                <Text style ={{fontWeight: 'bold'}}>Remove from Order{"\n"}{"\n"}{"\n"}</Text>
                                <Button 
                                buttonStyle={styles.AddBttn_style}
                                title='Add Order +'
                                rounded
                                />
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={styles.button_container}>
                        <Button 
                            buttonStyle={styles.bttn_style}
                            title='Place Order'
                            rounded
                            onPress={() => navigate('PaymentScreen')}
                            />
                        </View>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}
const styles = {
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    addBttn_style: {
        margin: 0,
        width: 100,
        backgroundColor: BUTTON_COLOR
    },
    bttn_style: {
        margin: 0,
        width: window_width-75,
        backgroundColor: BUTTON_COLOR
    },
    title_style: {
        fontSize:20,
        fontWeight: 'bold'
    },
    button_container:{
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}
