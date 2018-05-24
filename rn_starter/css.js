import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export class styles extends Component {
    render(){
        return(
            <View></View>
        )
    }

     styles = StyleSheet.create(
        {
            color1: {
                color: 'red'
            },
            container: {
                backgroundColor: '#1abc9c'
            },
            header: {
                fontSize: 25,
                alignItems: 'center',
                paddingLeft: 20,
                paddingTop: 20,
                textAlign: 'center',
                color: '#3c6382'
            }
        }
    )
}

// export default styles;


