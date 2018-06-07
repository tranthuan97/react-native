import { createTabNavigator } from 'react-navigation';

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    View,
    Text,
    FlatList,
    TextInput,
    RefreshControl,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import Screen01 from './Screens/Tab01'
import Screen02 from './Screens/Tab02'

var A = createTabNavigator({
    Screen01,
    Screen02
});

export default class abc extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>
                    abc
                </Text>
                <A/>
            </View>
        )
    }
}
