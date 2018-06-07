import React from 'react';
import MCI_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I_Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
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

    static navigationOptions = ({ navigation }) => ({
        header:null
    });

    render() {
        return (
            <ImageBackground
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            source={{uri: 'https://i.pinimg.com/236x/66/55/1c/66551c982dcf4c4ca324fa797af2d16c--iphone-backgrounds-phone-wallpapers.jpg'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('./imgs/la-co.png')} style={{height: 30, width: 30}} />
                <Text style={{color: '#ff4d4d', fontSize: 20, marginLeft: 5}}>Thần tượng âm nhạc Việt Nam</Text>            
            </View>
            <View style={{marginVertical: 50}}>
                <Image
                    style={{width: 250, height:200}}
                    source={require('./imgs/music.png')}                
                />
            </View>
            <View>
                <TextInput
                    placeholderTextColor={'#ea8685'}
                    style={{width: 270, height: 50, marginBottom: 15, backgroundColor: 'white', textAlign:'center', color: '#ea8685'}}
                    underlineColorAndroid={'transparent'}
                    placeholder="Tài khoản:"
                />
                <TextInput
                    placeholderTextColor={'#ea8685'}
                    style={{width: 270, height: 50, marginBottom: 15, backgroundColor: 'white', textAlign:'center', color: '#ea8685'}}
                    underlineColorAndroid={'transparent'}
                    placeholder="Mật khẩu:"
                />

                <View>
                <TouchableHighlight
                    onPress={()=>this.props.navigation.navigate('Account')}
                    style={{ justifyContent: 'center', marginBottom: 10, alignItems: 'center', paddingVertical: 15, backgroundColor:'#546de5'}}
                >
                    <Text style={{color: 'white'}}>Đăng nhập</Text>
                </TouchableHighlight>
                </View>
                <View onPress={()=>this.props.navigation.navigate('Signup')}
                 style={{alignItems: 'flex-end'}}><Text style={{color: '#7efff5'}}>Chưa có tài khoản?</Text></View>
            </View>
            </ImageBackground>
        )
    }
}