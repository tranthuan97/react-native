import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    View,
    Text,
    FlatList,
    TextInput,
    RefreshControl,
    TouchableHighlight
} from 'react-native';

import styleSheet from './styles';

export default class ExampleScreen01 extends React.Component {
   
    render() {
        return (
            <View style={[styleSheet.common.container, {backgroundColor: '#dfe6e9'}]}>
                <View style={[styleSheet.header.container]}>
                    <View style={styleSheet.header.headerLeft}><Icon name="close" size={40} /></View>
                    <View style={styleSheet.header.headerCenter}>
                        <Text style ={styleSheet.header.text}>Account</Text>
                    </View>
                    <View style={[styleSheet.header.headerRight]}></View>
                </View>

                <View style={[styleSheet.body.container]}>

                    <View style={[styleSheet.item.container, {marginVertical:20}]}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="restore" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Tình trạng hôn nhân</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>

                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="account-circle" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Thông tin của Thuận</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="credit-card" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Thuê người yêu</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="gift" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Miễn phí trò chuyện</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>
                    <View style={styleSheet.item.container}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="currency-usd" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Yêu thử</Text></View>
                        <View style={[styleSheet.item.iconRightContainer]}></View>
                    </View>

                    <View style={[styleSheet.item.container, {marginVertical:20}]}>
                        <View style={styleSheet.item.iconLeftContainer}><Icon style={styleSheet.item.itemIcon} name="heart-outline" size={40} /></View>
                        <View style={[styleSheet.item.textContainer]}><Text style={styleSheet.item.text} >Trở thành bồ</Text></View>
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
                
                
            </View>
        )
    }
}