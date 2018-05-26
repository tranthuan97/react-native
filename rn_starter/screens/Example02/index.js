import React from 'react';
import MCI_Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I_Icon from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    FlatList,
    TextInput,
    RefreshControl,
    TouchableHighlight
} from 'react-native';

import styleSheet from './styles';

export default class ExampleScreen02 extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            numb: 0
        }
    }

    onChangePlusNumb = () => {
        this.setState({
            numb: this.state.numb + 1
        })
    }
    onChangeMinusNumb = () => {
        this.setState({
            numb: this.state.numb - 1
        })
    }

    render() {
        return (
            <View  style={styleSheet.common.container}>
                   <View style={[styleSheet.Header.container]}>
                        <View style={styleSheet.Header.HeaderItem}><I_Icon size={55} name="ios-cafe-outline"/></View>
                        <View style={styleSheet.Header.HeaderItem}><I_Icon size={55} name="ios-finger-print-outline"/></View>
                        <View style={styleSheet.Header.HeaderItem}><I_Icon size={55} name="ios-chatbubbles-outline"/></View>
                        <View style={styleSheet.Header.HeaderItem}><I_Icon size={55} name="ios-calendar-outline"/></View>
                   </View>

                    <View style={[styleSheet.Body.container]}>
                        <View style={styleSheet.Body.containerInside}>
                            <View style={styleSheet.Body.BodyTop}><Text style={styleSheet.Body.Text}>Beds</Text></View>
                            <View style={styleSheet.Body.BodyItem}>
                                <TouchableHighlight onPress={this.onChangeMinusNumb.bind(this)} style={styleSheet.Body.Items}>
                                    <MCI_Icon name="minus" size={20} color="#ff7979"/>
                                </TouchableHighlight>
                                <View  style={styleSheet.Body.Items}><Text style={styleSheet.Body.Number}> {this.state.numb} </Text></View>
                                <TouchableHighlight onPress={this.onChangePlusNumb.bind(this)}  style={styleSheet.Body.Items}>
                                    <MCI_Icon name="plus" size={20} color="#ff7979"/>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styleSheet.Body.containerInside}>
                            <View style={styleSheet.Body.BodyTop}><Text style={styleSheet.Body.Text}>Bedrooms</Text></View>
                            <View style={styleSheet.Body.BodyItem}>
                                <TouchableHighlight style={styleSheet.Body.Items}>
                                    <MCI_Icon name="minus" size={20} color="#ff7979"/>
                                </TouchableHighlight>
                                <View  style={styleSheet.Body.Items}><Text style={styleSheet.Body.Number}> 2 </Text></View>
                                <TouchableHighlight  style={styleSheet.Body.Items}>
                                    <MCI_Icon name="plus" size={20} color="#ff7979"/>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styleSheet.Body.containerInside}>
                            <View style={styleSheet.Body.BodyTop}><Text style={styleSheet.Body.Text}>Bathrooms</Text></View>
                            <View style={styleSheet.Body.BodyItem}>
                                <TouchableHighlight style={styleSheet.Body.Items}>
                                    <MCI_Icon name="minus" size={20} color="#ff7979"/>
                                </TouchableHighlight>
                                <View  style={styleSheet.Body.Items}><Text style={styleSheet.Body.Number}> Any </Text></View>
                                <TouchableHighlight style={styleSheet.Body.Items}>
                                    <MCI_Icon name="plus" size={20} color="#ff7979"/>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                    <View style={[styleSheet.Footer.container]}>
                        <Text style={styleSheet.Footer.Text}>Save Filters</Text>
                    </View>
            </View>
        )
    }
}