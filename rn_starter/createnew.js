import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    FlatList,
    textAlign,
    alignItems,
    TextInput,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

export default class news extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loading: false,
            column:1,
            row:1,
            texts:[]
        };
    }

    //lấy dữ liệu và xử lý
    newimg = async () => {
        var images = [];
        let res = await fetch('https://picsum.photos/list');
        let data = await res.json();
        data = data.slice(0, 10);
        data.forEach((item, index)=>{
            images.push(`https://picsum.photos/600/600/?image=${item.id}`);
        });
        this.setState({images:images, loading: false})
    }

    click = () =>{
        // let texts = this.state.texts;
        // texts.push(`Hello world ${this.state.texts.length}`);
        // this.setState({texts});
        this.setState({
            loading:!this.state.loading
        });
    }

    onpress = () => {
        this.setState({column:this.state.column == 1 ? 2 : 1});
    }

  //Load dữ liệu trước khi hiện screen
    componentWillMount(){
        this.newimg();
    }

    render(){
        return(
                
                <View>
                    <TouchableOpacity onPress={this.click.bind(this
                    
                    
                    
                    
                    
                    )} style={this.styles.button}>
                    <Text style={{textAlign: 'center'}}>Click Here</Text>
                    </TouchableOpacity>

                {
                    this.state.loading == false&&
                    <ActivityIndicator/> 
                }
                {
                    this.state.loading == true &&
                    <FlatList
                        //in xử lý ra màn hình
                        key={this.state.column}
                        data={this.state.images}
                        renderItem={({item}) => <Image source={{uri:item}} style={{height:300, width:this.state.column == 2 ? '50%' : null}}/>}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={this.state.column}
                    />

                    

                }

                {/* <FlatList
                    data={this.state.texts}
                    extraData={this.state.texts}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({item})=>{
                        console.log(item);
                        return (<View style={{height:30, backgroundColor:'red'}}><Text>{item}</Text></View>)
                    }}
                /> */}

            </View>
        )
    }
     styles = StyleSheet.create(
        {
            button: {
                backgroundColor: 'red',
                padding: 20,
            },
            top: {
                alignItems: 'center'
            }
        }
    )
    
}