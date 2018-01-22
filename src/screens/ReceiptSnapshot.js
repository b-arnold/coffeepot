import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

class ReceiptSnapshot extends Component {
    static navigationOptions = {
        title: 'Receipt Snapshot',
        headerStyle: {
            backgroundColor: '#16a085'
            
        },
        headerTitleStyle: {
            color: '#ecf0f1'
        },
        headerTintColor: 'white'
    }

    ///////////////////////////////////////////
    // THE FOLLOW CODE IS FROM EXPO
    //////////////////////////////////////////

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
      };
    
      async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }
    
      render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
          return <View />;
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
            <View style={{ flex: 1 }}>
              <Camera style={{ flex: 1 }} type={this.state.type}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back,
                      });
                    }}>
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {' '}Flip{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          );
        }
      }
}

export default ReceiptSnapshot;