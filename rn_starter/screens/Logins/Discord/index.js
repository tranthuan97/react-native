import React from 'react';
import MCI_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I_Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    RefreshControl,
    TouchableHighlight,
    ImageBackground,
} from 'react-native';


import styleSheet from './styles';

export default class Discord extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        console.log(this.state.images)
        return (
            
            <ImageBackground source={{uri: 'http://www.gsfdcy.com/data/img/94/2242586-warcraft-wallpaper.jpg'}}
            style={[{padding: 20},styleSheet.common.container]}>
               <View style={{alignItems: 'center',justifyContent:'center', flex: 1}}>
                    <Image source={{uri:'https://cdn-images-1.medium.com/max/800/1*TTOJz35-lJmjWGj59786GA.png'}}
                    style={{height:100, width: 300, tintColor:'white'}} />
               </View>
               <View style={{flex: 1}}>
                    <View><TextInput
                        style={{paddingVertical: 10, marginBottom: 15}}
                        placeholderTextColor={'white'}
                        underlineColorAndroid={'transparent'}
                        borderColor={'white'} borderBottomWidth={2}
                        placeholder={"Email"} />
                    </View>
                    <View><TextInput
                        style={{paddingVertical: 10, marginBottom: 5}}
                        placeholderTextColor={'white'}
                        underlineColorAndroid={'transparent'}
                        borderColor={'white'} borderBottomWidth={2}
                        placeholder={"Password"} />
                    </View>
                    <View><Text style={{color:'white'}}>Forgot your password?</Text></View>
                    <View style={{marginVertical: 30}}>
                        <TouchableHighlight style={{backgroundColor: '#706fd3', padding: 20, alignItems: 'center'}}>
                            <Text style={{color:'white'}}>Login</Text>
                        </TouchableHighlight>
                    </View>
               </View>
               <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{color: '#706fd3'}}>Need an account?</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{flex: 2.5}}></View>
                        <TouchableHighlight style={{backgroundColor: 'gray', flex: 5, paddingVertical:5, alignItems:'center'}}>
                            <Text style={{color: 'white'}}>Register</Text>
                        </TouchableHighlight>
                        <View style={{flex: 2.5}}></View>
                    </View>
               </View>
            </ImageBackground>
        )
    }
}