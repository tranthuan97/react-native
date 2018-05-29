import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class extends React.Component {
    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{padding:10, backgroundColor:'gray'}}
                onPress={()=>this.props.navigation.navigate('AScreen')}>Screen 3</Text>
            </View>
        );
    }
}