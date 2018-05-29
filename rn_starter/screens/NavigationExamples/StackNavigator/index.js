import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {
    createStackNavigator
} from 'react-navigation';

//SCREENS
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';

import Login from '../../Logins/Discord';

export default createStackNavigator({
    Login,
    AScreen: Screen1,
    Screen2,
    Screen3
}, {
    // initialRouteName :'Screen3',
    navigationOptions:({navigation})=>({
        title:'HELLO WORLD'
    })
});