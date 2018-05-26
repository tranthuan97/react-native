import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const common = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfe4ea'
    }
});

const Header = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    HeaderItem: {
        flex: 1,
        alignItems: 'center'
    }
});

const Body = StyleSheet.create({
    container: {
        flex: 7,
        padding: 20
    },
    containerInside: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    BodyTop: {
        flex:3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    BodyItem: {
        flex: 6,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    Items: {
        flex: 1,
        alignItems: 'center'
    },
    Text: {
        fontSize: 17
    },
    Number: {
        fontSize: 20,
        color:'#ff7979'
    }
});

const Footer = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff7979',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 17,
        color: 'white'
    }
})

export default {
    common,
    Header,
    Body,
    Footer
}