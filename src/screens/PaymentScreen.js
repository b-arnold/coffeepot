import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Switch, KeyboardAvoidingView  } from 'react-native';
import { Button, Card, Avatar } from 'react-native-elements';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { connect } from 'react-redux';

import {orderUpdate} from '../actions';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

export class PaymentScreen extends Component {
    static navigationOptions = {
        title: 'Order Payment',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR
        },
        headerTitleStyle: {
            color: SECONDARY_COLOR
        },
        headerTintColor: SECONDARY_COLOR,
        tabBarVisible: false
    }

    state = { useLiteCreditCardInput: false };

    //{value => this.props.orderUpdate({ prop: 'size', {value})}

    //_onChange = (formData) => this.props.orderUpdate({prop: 'card', formData});
    _onChange = (formData) => {
        var formInput = JSON.stringify(formData, null, " ");
        this.props.orderUpdate({prop: 'card', formInput});
    } 



    _onFocus = (field) => console.log("focusing", field);
    _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

    onButtonPress(){
        const { navigate } = this.props.navigation;
        //const form = JSON.stringify(formData, null, " ");
        //this.props.orderUpdate({ prop: 'card', form});
        navigate('PaymentConfirmationScreen');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
                <View>
                    <ScrollView>
                        <KeyboardAvoidingView behavior="height"  style={{ paddingBottom: 50, flex: 1, justifyContent: 'center'}}>
                        
                        {/* <Card>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Avatar
                                        source={require('../images/profile_icon.png')}
                                        large
                                    />
                                </View>
                                <View>
                                    <Text>FirstName</Text>
                                    <Text>LastName</Text>
                                </View>
                            </View>
                        </Card>

                        <Card>
                            <View style={{ flexDirection: 'column' }}>
                                <Text>Card Number:</Text>
                                <TextInput
                                    style={{flex:1}}
                                    label="CardNumber"
                                    placeholder="0000-0000-0000-0000"
                                    //value={this.props.card}
                                    //onChangeText={value => this.props.orderUpdate({prop: 'name', value})}
                                />
                                <Text>{"\n"}</Text>
                                <Text>Expiration Date:</Text>
                                <TextInput
                                    style={{flex:1}}
                                    label="ExpDate"
                                    placeholder="01/20"
                                    //value={this.props.card}
                                    //onChangeText={value => this.props.orderUpdate({prop: 'name', value})}
                                />
                                <Text>{"\n"}</Text>
                                <View style={styles.button_container}>
                                    <Button 
                                        buttonStyle={styles.AddBttn_style}
                                        title='Apply New Card +'
                                        rounded
                                    />
                                </View>
                            </View>
                        </Card>

                        <Card>
                            <View style={styles.button_container}>
                                <Button 
                                buttonStyle={styles.bttn_style}
                                title='Confirm Payment'
                                rounded
                                onPress = {() => navigate('PaymentConfirmationScreen')}
                                />
                            </View>
                        </Card> */}

                        <View style={s.container}>
                            <Switch
                            style={s.switch}
                            onValueChange={this._setUseLiteCreditCardInput}
                            value={this.state.useLiteCreditCardInput} />

                            { this.state.useLiteCreditCardInput ?
                            (
                                <LiteCreditCardInput
                                autoFocus
                                inputStyle={s.input}

                                validColor={"black"}
                                invalidColor={"red"}
                                placeholderColor={"darkgray"}

                                onFocus={this._onFocus}
                                onChange={this._onChange} />
                            ) : (
                                <CreditCardInput
                                autoFocus

                                requiresName
                                requiresCVC
                                requiresPostalCode

                                labelStyle={s.label}
                                inputStyle={s.input}
                                validColor={"black"}
                                invalidColor={"red"}
                                placeholderColor={"darkgray"}

                                onFocus={this._onFocus}
                                onChange={this._onChange} />
                            )
                            }
                        </View>
                        <Card>
                            <View style={styles.button_container}>
                                <Button 
                                buttonStyle={styles.bttn_style}
                                title='Confirm Payment'
                                rounded
                                onPress={this.onButtonPress.bind(this)}
                                />
                            </View>
                        </Card>
                        <Text style={{fontSize:20}}> {'\n\n\n'} </Text>
                    </KeyboardAvoidingView>
                        
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
    bttn_style: {
        margin: 0,
        backgroundColor: BUTTON_COLOR
    },
    addBttn_style: {
        margin: 0,
        width: 100,
        backgroundColor: BUTTON_COLOR
    },
    button_container:{
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}

const s = StyleSheet.create({
    switch: {
      alignSelf: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    container: {
      backgroundColor: "#F5F5F5",
      marginTop: 60,
    },
    label: {
      color: "black",
      fontSize: 12,
    },
    input: {
      fontSize: 16,
      color: "black",
    },
  });

  function mapStateToProps({ order }) {
    return {
        card: order.card,
    };
}

export default connect(mapStateToProps, {orderUpdate} )(PaymentScreen);

