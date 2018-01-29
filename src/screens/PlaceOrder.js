import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

export default class PlaceOrder extends Component {
    static navigationOptions = {
        title: 'Place Order',
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
                        <View style={{ flexDirection: 'row' }}>
                            <Text style ={styles.title_style}>Order:</Text>
                            <Text>Grande, Iced, Vanilla /n Caffe Latte</Text>
                            <Text style ={{fontWeight: 'bold'}}>Remove Order</Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Button 
                            buttonStyle={styles.AddBttn_style}
                            title='Add to Order +'
                            rounded
                            />
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                        <Button 
                            buttonStyle={styles.bttn_style}
                            title='Place Order'
                            rounded
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
        margin: 10,
        width: 100,
        backgroundColor: BUTTON_COLOR
    },
    bttn_style: {
        margin: 10,
        width: 300,
        backgroundColor: BUTTON_COLOR
    },
    title_style: {
        fontSize:20,
        fontWeight: 'bold'
    }
}
