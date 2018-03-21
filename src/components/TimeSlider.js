import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slider from 'react-native-slider';

import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class TimeSlider extends Component {
    state = {timeSelected: 5}

    updateTime(time) {
        this.setState(() => {
            return {
                timeSelected: parseFloat(time)
            };
        });
    }

    render() {
        const { timeSelected } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{String(timeSelected)} Minutes</Text>
                <Slider
                    step={5}
                    maximumValue={20}
                    minimumValue={5}
                    onValueChange={this.updateTime.bind(this)}
                    value={timeSelected}
                    thumbStyle={styles.thumb}
                    trackStyle={styles.track}
                    minimumTrackTintColor={BUTTON_COLOR}
                />
                <Text style={styles.selectedText}>Selected Timer: {this.state.timeSelected} Minutes</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
    },
    selectedText: {
        color: 'red',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    track: {
        height: 25,
        borderRadius: 1,
        backgroundColor: '#d5d8e8'
    },
    thumb: {
        height: 30,
        width: 20,
        borderRadius: 1,
        borderRadius: 1,
        backgroundColor: 'black'
    }
}

export default TimeSlider;
