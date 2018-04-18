import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Slider from 'react-native-slider';

import * as actions from '../actions';
import { PRIMARY_COLOR, SECONDARY_COLOR, BUTTON_COLOR } from '../constants/style';

class TimeSlider extends Component {
    state = {timeSelected: 5}

    componentWillMount() {
        this.props.setTimer(this.state.timeSelected);
    }

    updateTime(time) {
        const result = parseFloat(time);
        this.setState(() => {
            this.props.setTimer(result);
            return {
                timeSelected: result
            };
        });
    }

    render() {
        const { timeSelected } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{String(timeSelected)} Minutes</Text>
                <Slider
                    step={1}
                    maximumValue={20}
                    minimumValue={1}
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
        height: 45,
        width: 30,
        borderRadius: 1,
        borderRadius: 1,
        backgroundColor: 'black'
    }
}

export default connect(null, actions)(TimeSlider);