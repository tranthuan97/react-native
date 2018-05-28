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

const title = StyleSheet.create({
    container: {
        flex: 1,
    flexDirection: 'row',
    },
    containerImg: {
        flex: 6,
        alignItems: 'center',
    },
    img: {
        width: 70,
        height:70
    },

    containerIcon: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: 'gray',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
    }
})

const header = StyleSheet.create({
    container: {
        flex: 3,
        marginLeft: 20
    },
    text1: {
        fontSize: 40
    },
    text2: {
        width: '70%',
        fontSize: 18
    }
})

const body = StyleSheet.create({
    container : {
        flex: 5,
    },
    containerInside: {
        flex:1,
        margin: 5,
        alignItems: 'center'
    },
    imgs: {
        height: 50,
        width: 50,
        borderRadius:25
    }
})

const footer = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    }
})
export default {
    common,
    title,
    body,
    header,
    footer
}