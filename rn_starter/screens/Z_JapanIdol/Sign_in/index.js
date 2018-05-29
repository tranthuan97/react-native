import React from 'react';
import MCI_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I_Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    ScrollView,
    RefreshControl,
    TouchableHighlight,
    ImageBackground
} from 'react-native';

import styleSheet from './styles';

export default class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        return (
            <ImageBackground
            style={{flex: 1}}
            source={{uri: 'https://i.pinimg.com/236x/66/55/1c/66551c982dcf4c4ca324fa797af2d16c--iphone-backgrounds-phone-wallpapers.jpg'}}
            >
                <Text>Xin chào các đồng dâm</Text>
            </ImageBackground>
        )
    }
}