import React, { Component } from 'react';
import { Alert, View, Text } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CountDown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: this.props.countDown,
            start: false
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        if ( this.state.start !== nextState.start )
            return true;

        return false;
    }

    componentWillMount() {
        if (this.props.time === true) {
            count = 60000
            this.props.updateCountDown(count)
            console.log(this.props.countDown)
            //this.setState({ time: this.props.countDown });
            console.log(this.state.time)
            this.setState({ start: true });
        }
    }

    onFinish = () => {
        this.props.startTime(false)
        Alert.alert('Your Coffee Pot is finished!')
    }

    onUpdatingTime = () => {
        const count = this.props.countDown - 1000;
        this.props.updateCountDown(count)
    }

    render() {
        return (
            <TimerCountdown
                initialSecondsRemaining={this.state.time}
                onTick={() => this.onUpdatingTime()}
                onTimeElapsed={() => this.onFinish()}
                //allowFontScaling='true'
                style={{ fontSize: 50, color: 'white' }}
            />
        );
    }
}

function mapStateToProps({ coffee }) {
    return {
        time: coffee.time,
        countDown: coffee.countDown
    };
}

export default connect(mapStateToProps, actions)(CountDown);