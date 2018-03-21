import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';
import { BUTTON_COLOR } from '../constants/style';

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
                    trackStyle={styles.sliderTrack}
                    thunbStyle={styles.sliderThumb}
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
    sliderTrack: {
        height: 18,
        borderRadius: 1,
        backgroundColor: BUTTON_COLOR
    },
    sliderThumb: {
        width: 0,
        height: 30,
        borderRadius: 1,
        backgroundColor: 'black'
    }
}

export default TimeSlider;
