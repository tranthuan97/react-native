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
    ImageBackground
} from 'react-native';

export default class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: false
        };
    }
click = () => {
    this.setState({name: !this.state.name})
}
    render(){
        return(
            <View style={[this.styles.container,{flex:1,}]}>
            <ImageBackground style={{flex: 1, alignItems: 'center'}} source={{uri: 'http://hinhnenpowerpointdep.com/uploads/images/tuyen-tap-nhung-hinh-nen-powerpoint-chu-de-tinh-yeu-dep-nhat-1484940495-1.jpg'}}>
                <Image source = {{uri: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/32836144_1380255388787487_7305553750599401472_n.jpg?_nc_cat=0&oh=4b34210c7007ff4a56f9eebd516acd3d&oe=5BBFF0A0'}}
                style={{height:100, width: 100, marginTop: 20, marginBottom:10}}/>
                <Text style ={{fontSize:25,color: '#badc58', marginBottom: 20}}>Trần Thuận</Text>
                <Text style={{fontSize: 18}}>Cách để cưa đổ Thuận {`<`}3</Text>
                <View style={{flex: 9, alignItems: 'center'}}>
                <TextInput
                        style={{height: 40, width:300, marginTop: 50, color:'#0a3d62'}}
                    placeholder="Nhập tài khoản:"
                    placeholderTextColor = '#ffbe76'
                    underlineColorAndroid = '#ffbe76'
                    />
                    <TextInput
                        style={{height: 40, width:300,marginBottom:20, color:'#0a3d62'}}
                    placeholder="Nhập mật khẩu:"
                    placeholderTextColor= '#ffbe76'
                    underlineColorAndroid = '#ffbe76'
                    />
                    <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:30, backgroundColor:'#ff7979'}}
                    onPress={this.click}
                    >
                        <Text style={{fontSize:15}}>
                            Đăng Nhập
                        </Text>
                    </TouchableOpacity>
                </View>

                {
                    this.state.name == true &&
                    <Text>Thuận đẹp trai</Text>
                }
                    <ImageBackground source={{uri: 'http://anhdepbonphuong.com/wp-content/uploads/2016/02/top-10-khung-hinh-trang-dep-nhat-9.png'}}  style={{flex: 1 ,width: 300, height: 30}}>
                    <Text style={{color: '#686de0', fontSize: 20, textAlign: 'center', paddingVertical: 5}}>Ngưng thả thính !!</Text>
                    </ImageBackground>
                    <Text style={{flex: 1}}>Copyright @TT</Text>
            </ImageBackground>
                
            
            </View>

        )
    }

    styles = StyleSheet.create(
        {
            container: {
            // backgroundColor: '#2f3542'
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