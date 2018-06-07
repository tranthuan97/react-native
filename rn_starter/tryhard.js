import React from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';

//VARIABLES


//COMPONENTS


//STYLESHEET
// import styleSheet from './styles';

export default class tryhard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: false,
      text: '',
      images: [],
      data: ['xin chào']
    }
  }

  async getMoviesFromApi() {
    var images = [];
    let res = await fetch(
      'https://picsum.photos/list');
    let data = await res.json();
    data = data.slice(0, 10);
    data.forEach(
      (item, index) => {
        images.push(`https://picsum.photos/600/600/?image=${item.id}`);
      });
    this.setState({ images: images })
  }

  onPress = () => {
    console.log(1);
    this.setState({
      image: !this.state.image
    })
  }

  onChangeText = (text) => {
    this.setState({
      text: text
    })
  }

  componentDidMount() {
    this.getMoviesFromApi();
  }

  onAddText = () => {
    let newDATA = this.state.data;
    newDATA.push(`xin chào ${newDATA.length}`)
    this.setState({ data: newDATA })
  }

  render = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ width: this.state.image == true ? 200 : null, height: this.state.image == true ? 200 : null, marginBottom: 50 }}
            source={{ uri: "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/32836144_1380255388787487_7305553750599401472_n.jpg?_nc_cat=0&_nc_eui2=AeEMiWh9eRCgGdXIro9jt13CuZ8GK7qhQRPSfIh6cBJglm87pkWGJKYyLXdMyjNIud8xDnxmRCvHe4IYEQepJYGlWCi1VO7_MQM2NuGrcGGY7w&oh=e29f9fa191341d3ab8dbde2c263eb667&oe=5BBFF0A0" }}
          />

          <Text onPress={this.onPress} style={{ height: 30 }}>Xin chồ ziệt lôm, click here</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="nhập chữ vào đây"
            style={{ width: 200, textAlign: 'center' }}
            onChangeText={this.onChangeText}
          />
          <Text>{this.state.text}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.images}
            renderItem={({ item }) => <Image source={{ uri: item }} style={{ height: 300, width: 300 }} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.onAddText}>
            <Text>Nhấn vào để thêm</Text>
          </TouchableOpacity>
          <FlatList
            data={this.state.data}
            extraData={this.state}
            renderItem={({ item }) => <View><Text>{item}</Text></View>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}