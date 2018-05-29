import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Hello world`
    });
  
    A = () => {

        // this.props.navigation.navigate('Screen2',{name:'thuant', img:'http'});
        this.props.navigation.navigate('Stack2')
        
    }

   

    render(){
      var  email = this.props.navigation.getParam('email', 'lampn');
      var  password = this.props.navigation.getParam('password', 'lampn');
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text
                style={{padding:10, backgroundColor:'gray'}}
                onPress={this.A.bind(this)}
                >Screen 1</Text>
                <Text>{email}</Text>
                <Text>{password}</Text>
            </View>
        );
    }
}