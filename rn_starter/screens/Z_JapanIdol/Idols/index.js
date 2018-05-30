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
} from 'react-native';

const DATA1 = [
    {id: 1, source: require('./imgs/1.jpg'), name: 'Megu Fujiura', status:'Design'},
    {id: 2, source: require('./imgs/2.jpg'), name: 'Rola Takizawa', status:'Tech'},
    {id: 3, source: require('./imgs/3.jpg'), name: 'Maria Ozawa', status:'Tech'},
    {id: 4, source: require('./imgs/4.jpg'), name: 'Ria Sakurai', status:'Tech'},
    {id: 5, source: require('./imgs/5.jpg'), name: 'Shion Utsunomiya', status:'Tech'},
    {id: 6, source: require('./imgs/6.jpg'), name: 'Emiri Suzuhara ', status:'Design'},
    {id: 7, source: require('./imgs/7.jpg'), name: 'Saori Hara ', status:'Design'},
    {id: 8, source: require('./imgs/8.jpg'), name: 'Ameri Ichinose', status:'Design'},
    {id: 9, source: require('./imgs/9.jpg'), name: 'Akiho Yoshizawa', status:'Tech'},
    {id: 10, source: require('./imgs/10.jpg'), name: 'Tsubasa Amami', status:'Design'},
    {id: 11, source: require('./imgs/11.jpg'), name: 'Risa Tachibana', status:'Tech'},
    {id: 12, source: require('./imgs/12.jpg'), name: 'Tina Yuzuki ', status:'Design'},
]

import styleSheet from './styles';

export default class ExampleScreen04 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            info:DATA1
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `Account`
    });

    render() {
        console.log(this.state.info)
        return (
            <View style={styleSheet.common.container}>
                <View style={styleSheet.header.container}>
                    <View style={styleSheet.header.menu}>
                        <I_Icon name="md-apps" size={35} />
                    </View>
                    <View style={{flex: 6}}></View>
                    <View style={styleSheet.header.menuItem}>
                        <I_Icon style={styleSheet.header.icon}  name="ios-search-outline" size={30} />
                        <Text style={styleSheet.header.text}>Search</Text>
                        <Text style={{flex: 0.5}}></Text>
                    </View>
                </View>
               <View  style={{flex: 9}}>
                    
                    {/* <View  style={{flex: 8}}>
                        <FlatList
                                data={this.state.info}
                                extraData={this.state}
                                renderItem={({item}) => <View><Image source={item.source} style={{height: 300, width: '100%'}} /><Text>{item.name}</Text></View>}
                                keyExtractor={(item, index) => index.toString()}
                            />
                    </View> */}

                    <ScrollView>
                    <View style={{flex: 2}}>
                        <FlatList
                                data={this.state.info}
                                extraData={this.state}
                                renderItem={({item}) => <View><Image resizeMode={'stretch'} source={item.source} style={{height: 100, width: 100}} /><Text>{item.name}</Text></View>}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                    </View>
                    <View style={{flex: 8, marginTop: 30}}>
                        <View style={{flexDirection: 'row', marginBottom: 10}}>
                            <Text style={{flex: 5, textAlign: 'center'}}>Professional actors</Text>
                            <View style={{flex: 3}}></View>
                            <Text style={{flex: 2,  textAlign: 'center'}}>See all</Text>
                        </View>
                        {this.state.info.map((item,index) =>
                        <View key={index} style={{flexDirection: 'row'}}>
                            <View style={{flex: 3}}>
                                <Image source={item.source}
                                style={{height: 80, width:80, borderRadius: 80, margin: 10}} />
                            </View>
                            <View style={{flex: 7}}>
                                <Text>{item.name}</Text>
                                <Text>{item.status}</Text>
                            </View>
                        </View>
                         )}
                    </View>

                    </ScrollView>
               </View>
            </View>
        )
    }
}