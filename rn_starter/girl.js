import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    FlatList,
    TextInput,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

export default class nav extends Component {
    render(){
        return(
            <View style={[this.styles.container,{flex:1}]}>
            
                <Text style={this.styles.header}>Chào mừng các bạn đến với Ngắm Gái Xinh</Text>
                <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                    <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEeq45Gfa1YDBaTHrYXhxhiu1G2Pljb2lN7R1RuiiXvVIsx9FIQ'}} style={{width:150, height:200}}/>
                    <TextInput
                        style={{height: 40, width:300, marginTop: 50, color:'#0a3d62'}}
                    placeholder="Nhập tài khoản:"
                    placeholderTextColor = 'white'
                    underlineColorAndroid = 'white'
                    />
                    <TextInput
                        style={{height: 40, width:300,marginBottom:20, color:'#0a3d62'}}
                    placeholder="Nhập mật khẩu:"
                    placeholderTextColor= 'white'
                    underlineColorAndroid = 'white'
                    />
                    <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:30, backgroundColor:'#686de0'}}>
                        <Text style={{fontSize:15}}>
                            Đăng Nhập
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    styles = StyleSheet.create(
        {
            container: {
            backgroundColor: '#1abc9c'
            },
            header:{
                fontSize:25,
                alignItems: 'center',
                paddingLeft:20,
                paddingTop: 20,
                textAlign: 'center',
                color: '#3c6382'
            }
        }
    )
          
}