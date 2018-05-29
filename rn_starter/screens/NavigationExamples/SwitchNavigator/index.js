import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    createSwitchNavigator
} from 'react-navigation';

import Stack1 from '../StackNavigator';
import Stack2 from '../Stack2';

export default createSwitchNavigator({
    Stack1,
    Stack2
});