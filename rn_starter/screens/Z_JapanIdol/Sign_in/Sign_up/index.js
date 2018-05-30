import React from 'react';
import MCI_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I_Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation';
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
        title: `Home`
    });
  
    A = () => {

        // this.props.navigation.navigate('Screen2',{name:'thuant', img:'http'});
        this.props.navigation.navigate('Signin')
        
    }

    render() {
        return (
            <ImageBackground
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            source={{uri: 'https://i.pinimg.com/236x/66/55/1c/66551c982dcf4c4ca324fa797af2d16c--iphone-backgrounds-phone-wallpapers.jpg'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 25}}>
                <Image source={{uri: 'http://www.downloadclipart.net/medium/73932-sakura-blossom-alice-images.png'}} style={{height: 30, width: 30}} />
                <Text style={{color: '#ff4d4d', fontSize: 20, marginLeft: 5}}>Japanese Idols</Text>            
            </View>
            <View>
                <View><Text style={{textAlign: 'center', fontSize: 25, color:'#c56cf0', marginBottom: 10}}>TẠO TÀI KHOẢN</Text></View>
                <TextInput
                    placeholderTextColor={'#ea8685'}
                    style={{width: 270, height: 50, marginBottom: 15, backgroundColor: 'white', textAlign:'center', color: '#ea8685'}}
                    underlineColorAndroid={'transparent'}
                    placeholder="Email:"
                />
                <TextInput
                    placeholderTextColor={'#ea8685'}
                    style={{width: 270, height: 50, marginBottom: 15, backgroundColor: 'white', textAlign:'center', color: '#ea8685'}}
                    underlineColorAndroid={'transparent'}
                    placeholder="Tên tài khoản:"
                />
                <TextInput
                    placeholderTextColor={'#ea8685'}
                    style={{width: 270, height: 50, marginBottom: 15, backgroundColor: 'white', textAlign:'center', color: '#ea8685'}}
                    underlineColorAndroid={'transparent'}
                    placeholder="Mật khẩu:"
                />
                <TextInput
                    keyboardType='phone-pad'
                    placeholderTextColor={'#ea8685'}
                    style={{width: 270, height: 50, marginBottom: 15, backgroundColor: 'white', textAlign:'center', color: '#ea8685'}}
                    underlineColorAndroid={'transparent'}
                    placeholder="Tuổi:"
                />

                <View>
                <TouchableHighlight
                    style={{ justifyContent: 'center', marginBottom: 10, alignItems: 'center', paddingVertical: 15, backgroundColor:'#546de5'}}
                >
                    <Text style={{color: 'white'}}>Đăng ký</Text>
                </TouchableHighlight>
                </View>
            </View>
            </ImageBackground>
        )
    }
}