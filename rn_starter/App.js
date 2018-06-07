/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  SectionList,
  ActivityIndicator
} from 'react-native';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Image source={{uri:'http://thuvienanhdep.net/wp-content/uploads/2015/11/nhung-hinh-anh-hot-girl-cuc-xinh-va-dang-yeu-danh-lam-hinh-nen-dien-thoai-6.jpg'}} style={{height:200,}} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
        <FlatList
         
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
