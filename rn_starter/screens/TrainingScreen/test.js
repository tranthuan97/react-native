import React from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    RefreshControl,
    TouchableHighlight
} from 'react-native';

import styleSheet from './styles';

export default class tester extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            press : false,
            // press : 0,
            // data: ['Hello world'],
            item: ['Zero'],
            texts: '',
            images: 1,
        };
    }


    Click = () => {
        // this.setState({press: this.state.press = 1} )
        this.setState({press: !this.state.press} )
    }

    addMoreItem() {
        let newData = this.state.data;
        newData.push(`Hello world ${newData.length}`);
        this.setState({ data: newData });
    }

    addNewItem(){
        let newItem = this.state.item;
        newItem.push(`Number ${newItem.length}`);
        this.setState({item: newItem});
    }

    onChangeTexts(giatrithamchieu){
        this.setState({
            texts:giatrithamchieu
        })
    }

    onChangImage = () => {
        this.setState({images:this.state.images == 1 ? 2 : 1});
    }

    
/* ------------- RENDER ------------ */
    render(){
        return(
            // Display component with state
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 50, padding: 10 }}>
                <View style={{flex: 1}}>
                    <TouchableHighlight onPress={this.Click.bind(this)}>
                    <Text> Click here </Text>
                
                    </TouchableHighlight>
                    {
                            this.state.press == true && <Text>hello world</Text>
                    }
                </View>

            
             <View style={{flex: 1}}>
             <TouchableHighlight style={{height:30}} onPress={this.addNewItem.bind(this)}>
                    <Text>Add new</Text>
                </TouchableHighlight>
                <View style={{flex: 1}}>
                <FlatList
                        data={this.state.item} 
                        extraData={this.state}
                        keyExtractor ={(item, index) => index.toString()}
                        renderItem={({item}) => <View><Text>{item}</Text></View>}
                    />

                </View>
             </View>
            <View style = {{flex: 1}}>
                <TextInput
                    onChangeText={this.onChangeTexts.bind(this)}
                    style={{flex: 1,width: 300}}
                    placeholder={"Nhap vao day: "}
                />
                <Text style={{flex:1}}>{this.state.texts}</Text>

            </View>
               
                <View style={{flex: 1}}>
                    <TouchableHighlight onPress={this.onChangImage.bind(this)} >
                        <Text>Nhan vao day de doi anh</Text>
                    </TouchableHighlight>

                    <View>
                        {this.state.images == 1 &&
                            <Image source={{uri: 'https://media.laodong.vn/Storage/NewsPortal/2017/12/5/579811/May-Bay-Nga.Jpg2.jpg?w=888&h=592&crop=auto&scale=both'}} style={{height:50, width: 50}} />
                        }

                        {this.state.images == 2 &&
                            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOb05XCS24Q6IoSa28o-gxqyi2b6q0pKvawC2qtWcpLt1_ELMS'}} style={{height:50, width: 50}} />
                        }
                    </View>
                </View>
            </View>
        );
    }
}