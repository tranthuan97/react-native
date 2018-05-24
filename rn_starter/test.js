import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Image } from 'react-native';

export default class FetchExample extends React.Component {

//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }
constructor(props) {
    super(props);
    this.state = {
        images:[],
        isLoading: true
    };
}

getImages = async () => {
    var images = [];
    let res = await fetch('https://picsum.photos/list');
    let data = await res.json();
    data = data.slice(0, 10);
    data.forEach((item, index)=>{
        images.push(`https://picsum.photos/600/600/?image=${item.id}`);
    });
    this.setState({images:images, isLoading: false})
    // for (let i = 0; i < 4; i++) {
    //     let response = await fetch('https://picsum.photos/300/200/?random');
    //     let reader = new FileReader();
    //     let data = await response.blob();
    //     reader.onload = () => {
    //         console.log(reader.result)
    //         images.push(`${reader.result}`);
    //         if (i == images.length - 1) {
    //             //xử lí khi đã lấy được danh sách ảnh
                
    //             this.setState({images:images, isLoading: false})
    //         }
    //     }
    //     reader.readAsDataURL(data);
    // }
}
componentWillMount(){
    this.getImages();
}
  render(){
      if(this.state.isLoading == true){
          return(
              <View>
                  <ActivityIndicator/>
              </View>
          )
      }
    return(
    // <View style={{flex: 1, paddingTop:20}}>
    //     <FlatList
    //     data={this.state.images}
    //      renderItem={({item}) => <Image source={{uri:item}} style={{height:300}}/>}
    //      keyExtractor={(item, index) => index.toString()}
    //     />
    //   </View>

        <View style={{flex:1, paddingTop:20}}>
        <FlatList
            data={this.state.images}
            renderItem={({item}) => <Image source={{uri:item}} style={{height:300,width:'50%'}}/>}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
        />
        </View>

    );
  }
}