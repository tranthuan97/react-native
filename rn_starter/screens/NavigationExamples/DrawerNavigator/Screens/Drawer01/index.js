import React from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Hello world`
    });
  
    A = () => {

        // this.props.navigation.navigate('Screen2',{name:'thuant', img:'http'});
        this.props.navigation.navigate('Screen02')
    }

    constructor(props){
        super(props);
        this.state={
            isLoading: true
        }
    }

   componentDidMount(){
       setTimeout(function(self){
            self.setState({
                isLoading: false
            })
       },3000,this)
   }

    render(){
    //   var  email = this.props.navigation.getParam('email', 'lampn');
    //   var  password = this.props.navigation.getParam('password', 'lampn');

        if(this.state.isLoading == true)
        {
            return(
            <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={40} />
            </View>)
        }

        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text
                style={{padding:10, backgroundColor:'gray'}}
                onPress={this.A.bind(this)}
                >Screen 1</Text>
                {/* <Text>{email}</Text>
                <Text>{password}</Text> */}
            </View>
        );
    }
}