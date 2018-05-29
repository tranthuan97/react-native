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
class Screen extends React.Component {
    render = () => (
        <View><Text>STACK 2 SCREEN</Text></View>
    );
}

export default createStackNavigator({
    Screen
}, {
    // initialRouteName :'Screen3',
    navigationOptions:({navigation})=>({
        title:'STACK 2'
    })
});