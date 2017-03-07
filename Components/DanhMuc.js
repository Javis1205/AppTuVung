import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHightLight,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ListView
} from "react-native";
import AudioPlayer from 'react-native-audioplayer';
import { Actions} from "react-native-router-flux";
const { width,height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
var URL = "http://192.168.1.100:3000/words/1";
export default class DanhMuc extends Component {
  constructor(props){
    console.log("Khoi tao");
    super(props);
    this.state = {
         isLoading: true,
         dataSource: new ListView.DataSource({
             rowHasChanged: (row1, row2) => row1 !== row2
         })
     };
  }
  componentDidMount() {
      this.fetchData();
  }
  fetchData(){
    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData),
              isLoading: false
          });
      })
      .done();
  }
  render(){
    console.log(this.state.dataSource);
    if (this.state.isLoading) {
           return this.renderLoadingView();
    }
    return(
      <View style={{flex:1,backgroundColor:"#DDD"}}>
          <View style={{marginTop:55}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderItems.bind(this)}
              />
            </ScrollView>
          </View>
      </View>
    );
  }
  renderItems(word){
    return(
      <View style={{alignItems:"center"}}>
        <View style={{alignItems:"center",borderWidth:2,borderColor:"#FFF",flexDirection:"row",marginTop:10}}>
          <Image source={{uri:word.Image}} style={{width:(width-40)/3,height:(width-40)/3}}/>
          <View style={{width:(width-40)*2/3-2,height:(width-40)/3,backgroundColor:"#FFF"}}>
            <View style={{flexDirection:"row", marginLeft:2,justifyContent:"space-between", }}>
              <Text style={{fontSize:20}}>{word.Name}</Text>
              <TouchableOpacity onPress={()=>{}}>
                <Icon name="volume-up" style={{fontSize:20,marginTop:5,marginRight:10}}/>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",marginLeft:2}}>
              <Text style={{fontSize:14}}>
                Từ loại
              </Text>
              <Text style={{fontSize:13,flex:1,marginTop:1}}>
                {word.Tuloai}
              </Text>
            </View>
          </View>
          <View style={{width:20,height:(width-40)/3,backgroundColor:"#DDD"}}>
            <TouchableOpacity style={{width:20,height:(width-40)/3,alignItems:"center",justifyContent:"center"}} onPress={()=>{Actions.detail({Id:word.Id})}}>
              <Icon name="chevron-right" style={{fontSize:16,color:"#FFF"}}/>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
  renderLoadingView(){
    return (
        <View style={{flex:1,alignItems:"center"}}>
            <Text style={{marginTop:100,fontSize:30,color:"#000"}}>
              LOADING ...
            </Text>
        </View>
      );
  }
}
