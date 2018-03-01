import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, TextInput } from 'react-native';
import { Button, Card } from 'react-native-elements';
import {orderUpdate, orderCreate} from '../actions';
import { connect } from 'react-redux';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

const window_width = Dimensions.get('window').width;

export class PlaceOrder extends Component {
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

    onButtonPress(){
        const {name, location, drink} = this.props;
        this.props.orderCreate({name: name || 'name', location: location || 'Starbucks, Azusa', drink: drink || 'drink'});
        //navigate('PaymentScreen');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ScrollView>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={{flex:1}}
                                label="Name"
                                placeholder="John Doe"
                                value={this.props.name}
                                onChangeText={value => this.props.orderUpdate({prop: 'name', value})}
                            />
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                flex={1}
                                onPress={() => navigate('GPSMap')}
                            >
                                Location: 
                            </Text>
                            <Text>{this.props.location}</Text>
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
                            onPress={this.onButtonPress.bind(this)}
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

/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ order }) {
    return {
        name: order.name,
        location: order.location,
        drink: order.drink
    };
}

export default connect(mapStateToProps, {orderUpdate, orderCreate} )(PlaceOrder);
