import React from 'react';
import { View, Text } from 'react-native';

///////////////////////////////////////////////////////////////////
// Make Component: CoffeePot has "startTime" & "endTime" properties
//   to define countdown timer; "orderNum" defines number of drinks in
//   CoffeePot; "coffeeShop" holds coffee shop for CoffeePot; "order" 
//   holds information for individual orders
///////////////////////////////////////////////////////////////////
const CoffeePot = ({ startTime, endTime, orderNum, coffeeShop, orders }) => {
    <View>
         <Image 
            source={require('../images/CoffeePot-Logo-White-02.png')}
            style={{
                width: 250,
                height: 250,
            }}
        />
        <TimerCountdown
            initialSecondsRemaining={endTime-startTime}
            //onTick={() => this.setState({ alreadyStarted: true })}
            //onTimeElapsed={() => this.setState({ alreadyStarted: false })}
            //allowFontScaling='true'
            style={{ fontSize: 50, color: 'white' }}
        />
    </View>
}

export default { CoffeePot };
