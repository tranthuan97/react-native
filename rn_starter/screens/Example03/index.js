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
} from 'react-native';

const DATA = [
    {id: 1, source: require('./imgs/1.jpg'), name: 'trần thuận', status:'Follow'},
    {id: 2, source: require('./imgs/2.jpg'), name: 'trần thuận', status:'Follow'},
    {id: 3, source: require('./imgs/3.jpg'), name: 'trần thuận', status:'Follow'},
    {id: 4, source: require('./imgs/4.jpg'), name: 'trần thuận', status:'Follow'},
    {id: 5, source: require('./imgs/5.jpg'), name: 'trần thuận', status:'Follow'},
    {id: 6, source: require('./imgs/6.jpg'), name: 'trần thuận', status:'Follow'},
    {id: 7, source: require('./imgs/7.jpg'), name: 'trần thuận', status:'Follow'},
    {id: 8, source: require('./imgs/8.jpg'), name: 'trần thuận', status:'Follow'},
    {id: 9, source: require('./imgs/8.jpg'), name: 'trần thuận'},
    {id: 10, source: require('./imgs/8.jpg'), name: 'trần thuận'},
    {id: 11, source: require('./imgs/8.jpg'), name: 'trần thuận'},
    {id: 12, source: require('./imgs/8.jpg'), name: 'trần thuận'},
]

import styleSheet from './styles';

export default class ExampleScreen03 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            images:DATA
        }
    }

    render() {
        console.log(this.state.images)
        return (
            
            <View  style={[styleSheet.common.container]}>
                <View style={styleSheet.title.container}>
                <View style={{flex: 2}}></View>
                    <View style={styleSheet.title.containerImg}>
                     <Image style={styleSheet.title.img}
                         source={{uri:'https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/32836144_1380255388787487_7305553750599401472_n.jpg?_nc_cat=0&_nc_eui2=AeGGoqw6UBUALW-1lHHbgrExy09uKlXJOAdOHLXz3W_4IYTYLBgx6qg0FVM88ovQYrE33P-W5uVjanfD2LCDACgsyBQTeBb4gtGQEFnTuzK9ng&oh=73222f974659edc7a730e4af0aca4f84&oe=5BBFF0A0'}}/>
                    </View>
                    <View style={styleSheet.title.containerIcon}>
                        <View style={styleSheet.title.icon}>
                            <MCI_Icon name="magnify" color="white" size={40}/>
                        </View>
                    </View>
                    
                </View>

                <View  style={styleSheet.header.container}>
                    <Text style={styleSheet.header.text1}>Tap your</Text>
                    <Text style={styleSheet.header.text1}>favorites</Text>
                    <Text style={styleSheet.header.text2}>
                        Tap whaterver moves you, you can always edit later.
                    </Text>
                </View>

                <View style={styleSheet.body.container}>
                    <FlatList 
                        data={this.state.images}
                        extraData={this.state.images}
                        renderItem={({item}) => (<View style={styleSheet.body.containerInside}>
                        <Image source={item.source} style={styleSheet.body.imgs}/>
                        <Text>{item.name}</Text>
                        <Text>{item.status}</Text></View>)
                        }
                        keyExtractor={(item, index) => index.toString()}
                        numColumns = {4}
                    />
                </View>

                <View style={styleSheet.footer.container}>
                    <TextInput style={{flex: 9}} placeholder="Pick at least 3" />
                    <TouchableHighlight style={{flex: 1}}>
                        <Text>Done</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}