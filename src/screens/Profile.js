import React, { Component } from 'react';
import firebase from 'firebase';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Card, Icon, Avatar, Rating } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/style';

/////////////////////////////////////////////////////////
////  The following code is for the Profile Screen   ////
/////////////////////////////////////////////////////////

class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
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
                    color={SECONDARY_COLOR}
                />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('PlaceOrder')}>
                <Icon
                    type='font-awesome'
                    name='coffee'
                    color='grey'
                />
            </TouchableOpacity>
        ),
        tabBarIcon: () => {
            return (
                <Icon
                    name="user"
                    type="font-awesome"
                    size={30}
                    color="grey"
                />
            );
        },
    })

    componentWillMount() {
      const { currentUser } = firebase.auth();

      // Load first name into properties
      firebase.database().ref(`users/${currentUser.uid}/name_field/firstName`)
      .on('value', snapshot => {
        this.props.profileFirstNameChange(snapshot.val());
      });

      // Load last name into properties
      firebase.database().ref(`users/${currentUser.uid}/name_field/lastName`)
      .on('value', snapshot => {
        this.props.profileLastNameChange(snapshot.val());
      });
    }

    render() {
        return (
            <ScrollView>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                    <View style={{ marginTop: 10 }}>
                        <Avatar
                            source={require('../images/Profile_Pic.jpg')}
                            xlarge
                        />
                    </View>

                    <View>
                        <Text style={{ fontSize: 40, marginTop: 15 }}>
                          {this.props.firstName} {this.props.lastName}
                        </Text>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        margin: 10
                      }}
                    >
                        <View style={styles.container}>
                            <Rating
                                imageSize={30}
                                readonly
                                //starting value will equal all ratings together out of five
                                startingValue={4.5}
                            />
                        </View>
                        <View style={styles.container}>
                            <Text style={{ fontSize: 20 }}>Deliveries: {}</Text>
                        </View>
                    </View>
                </View>
                
                <Card>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, marginRight: 20 }}>
                            <Avatar
                                source={require('../images/Profile_Pic.jpg')}
                                medium
                            />
                        </View>
                        <View>
                            <View style={{ marginBottom: 5 }}>
                                <Rating
                                imageSize={30}
                                readonly
                                startingValue={4.5}
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

const styles = {
    container: {
        margin: 10
    }
};

/////////////////////////////////////////////////////////
// Map redux reducers to component mapStateToProps
function mapStateToProps({ prof }) {
  return {
    firstName: prof.firstName,
    lastName: prof.lastName
  };
}

export default connect(mapStateToProps, actions)(Profile);
