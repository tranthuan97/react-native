import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationActions } from 'react-navigation';
import {
    View,
    Text,
    FlatList,
    TextInput,
    RefreshControl,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import styleSheet from './styles';

export default class ExampleScreen01 extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header:null
    });
   
    render() {
        return (
            <ScrollView style={[styleSheet.common.container, {backgroundColor: '#dfe6e9'}]}>
                <View style={[styleSheet.header.container]}>
                    <View style={styleSheet.header.headerLeft}><Icon  onPress={()=>this.props.navigation.navigate('Signin')} name="close" size={40} /></View>
                    <View style={styleSheet.header.headerCenter}>
                        <Text style ={styleSheet.header.text}>Account</Text>
                    </View>
                    <View style={[styleSheet.header.headerRight]}></View>
                </View>

                <View style={[styleSheet.body.container]}>

                    <View style={[styleSheet.item.container, {marginVertical:20}]}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="restore" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Tình trạng hiện tại</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>

                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="account-circle" size={40} /></View>
                        <View on style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Thông tin người dùng</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="credit-card" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text onPress={()=>this.props.navigation.navigate('Idols')} style={styleSheet.item.text} >Danh sách Idols</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="gift" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Trò chuyện</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="currency-usd" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >VIPs</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>

                    <View style={[styleSheet.item.container, {marginVertical:20}]}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="heart-outline" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Phim trực tuyến</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>

                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="help-circle" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Đặt câu hỏi?</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="contact-mail" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Liên hệ</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="information-outline" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Giới thiệu</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                </View>
                
                
            </ScrollView>
        )
    }
}