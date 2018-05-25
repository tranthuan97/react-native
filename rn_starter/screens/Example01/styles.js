import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const common = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    }
});

const header = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerLeft: {
        flex: 1,
        justifyContent: 'center'
    },
    headerCenter: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerRight: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const body = StyleSheet.create({
    container: {
        flex: 9
    },
    
});

const item = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        // alignItems: 'center',
        paddingVertical: 4,
        borderRadius: 5
    },
    iconLeftContainer: {
        flex: 2,
        alignItems: 'center',
    },
    textContainer: {
        flex: 6,
        justifyContent: 'center'
        // alignItems: 'center'
    },
    iconRightContainer: {
        flex: 2
    },
    itemIcon: {
        color: '#b2bec3'
    },
    text: {
        fontSize: 18
    }
});

export default {
    common,
    header,
    body,
    item
}