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
    RefreshControl,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';

// import e4 from '../../Example04';
// import ExampleScreen04 from 'rn_starter/screens/Example04';
import styleSheet from './styles';
import ExampleScreen04 from '../../Example04';

export default class Discord extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }

        this.data = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(text){
        this.data.email = text;
    }
    onChangePassword(text){
        this.data.password = text;
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
                        onChangeText={this.onChangeEmail.bind(this)}
                        style={{paddingVertical: 10, marginBottom: 15, color: 'white'}}
                        placeholderTextColor={'white'}
                        underlineColorAndroid={'transparent'}
                        borderColor={'white'} borderBottomWidth={2}
                        placeholder={"Email"} />
                    </View>
                    <View><TextInput
                        onChangeText={this.onChangePassword.bind(this)}
                        style={{paddingVertical: 10, marginBottom: 5, color: 'white'}}
                        placeholderTextColor={'white'}
                        underlineColorAndroid={'transparent'}
                        borderColor={'white'} borderBottomWidth={2}
                        placeholder={"Password"} />
                    </View>
                    <View><Text style={{color:'white'}}>Forgot your password?</Text></View>
                    <View style={{marginVertical: 30}}>
                        <TouchableHighlight
                        onPress={()=>this.props.navigation.navigate('AScreen',{email: this.data.email, password: this.data.password})}
                        style={{backgroundColor: '#706fd3', padding: 20, alignItems: 'center'}}>
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
                        <TouchableHighlight
                         style={{backgroundColor: 'gray', flex: 5, paddingVertical:5, alignItems:'center'}}>
                            <Text style={{color: 'white'}}>Register</Text>
                        </TouchableHighlight>
                        <View style={{flex: 2.5}}></View>
                    </View>
               </View>
            </ImageBackground>
        )
    }
}