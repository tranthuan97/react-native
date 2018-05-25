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

export default class TrainingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            text: '',
            toggleBackground: 0,
            data: ['Hello world 1']
        };
    }
    onPress(e) {
        this.setState({ visible: !this.state.visible });
    }

    onChangeText(text) {
        this.setState({ text: text });
    }

    changeBackground() {
        // this.state.toggleBackground == 0 ? console.log('false') : console.log('true');
        this.setState({ toggleBackground: this.state.toggleBackground == 0 ? 1 : 0 });
    }

    addMoreItem() {
        let newData = this.state.data;
        newData.push(`Hello world ${newData.length}`);
        this.setState({ data: newData });
    }

    // renderItem({ item, index }) {
    //     return (
    //         <View style={{ padding: 10 }}>
    //             <Text>{item}</Text>
    //         </View>
    //     )
    // }

    render() {
        return (
            <View style={[styleSheet.common.container, { justifyContent: 'center', alignItems: 'center' }]}>
                {/* DISPLAY COMPONENT WITH STATE */}
                <View style={{ flex: 1 }}>
                    <TouchableHighlight style={{ padding: 10, margin: 10 }} onPress={this.onPress.bind(this)}>
                        <Text>State: {`${this.state.visible}`}</Text>
                    </TouchableHighlight>
                    {
                        this.state.visible == true && <Text>Hello world</Text>
                    }
                </View>
                {/* CHANGE TEXT WITH INPUT ONCHANGETEXT EVENT */}
                <View style={{ flex: 1 }}>
                    <TextInput onChangeText={this.onChangeText.bind(this)} style={{ width: 300 }} />
                    <Text>{this.state.text}</Text>
                </View>

                {/* CHANGE COMPONENT STYLE WITH STATE */}
                <View style={{ flex: 1 }}>
                    <TouchableHighlight style={{ padding: 10, margin: 10 }} onPress={this.changeBackground.bind(this)}>
                        <Text>Change background</Text>
                    </TouchableHighlight>
                </View>

                <View style={{ flex: 1, width: 100, height: 100, backgroundColor: this.state.toggleBackground == 0 ? '#12CBC4' : '#FDA7DF' }}></View>

                {/* ADD MORE LIST ITEM WITH STATE */}
                <TouchableHighlight style={{ padding: 10, margin: 10 }} onPress={this.addMoreItem.bind(this)}>
                    <Text>Add more</Text>
                </TouchableHighlight>

                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    // renderItem={this.renderItem.bind(this)}
                    enderItem={({item}) => <View style={{ padding: 10 }}><Text>{item}</Text></View>} 
                    refreshControl={<RefreshControl refreshing={false} />}
                    refreshing={true}
                />

            </View>
        )
    }
}