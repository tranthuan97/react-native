import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class extends React.Component {
    render(){
        var name = this.props.navigation.getParam('name', 'lampn');
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{padding:10, backgroundColor:'gray'}}
                onPress={()=>this.props.navigation.navigate('Screen3')}>Screen 2</Text>
                <Text>{name}</Text>
            </View>
        );
    }
}