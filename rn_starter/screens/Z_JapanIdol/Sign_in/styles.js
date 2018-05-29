import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

const common = StyleSheet.create({
    container: {
        flex: 1
    }
});

const header= StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: 'row',
       padding: 5
   },
   menu: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
   },   
   menuItem: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
   },
   text:{
       fontSize: 20
   },
   icon: {
        flex: 1
    },
    search: {
        flex: 8.5
    }
})
export default {
    common,
    header
}