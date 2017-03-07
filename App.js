import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text
}from "react-native";
import { connect, Provider } from 'react-redux';
import {bindActionCreators} from "redux";
import { createStore, applyMiddleware, compose } from 'redux';
import { Actions,Scene,Router } from "react-native-router-flux";
import * as actions from      "./Components/reducers/Actions.js";
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationDrawer from "./Components/Drawer.js";
import Home from "./Components/Home.js";
import DanhMuc from "./Components/DanhMuc"
const RouterWithRedux = connect()(Router);

function mapStateToProps(state){
  return{DATA:state.Items}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch);
}
const LeftHome = () =>(
  <TouchableOpacity onPress={()=>{Actions.refresh({key: 'drawer', open: value => !value })}}>
    <Icon name="user-o" style={{color:"#FFF",fontSize:25}}/>
  </TouchableOpacity>
);
const RightHome = () =>(
  <TouchableOpacity onPress={()=>{Actions.refresh({key: 'drawer', open: value => !value })}}>
    <Icon name="bars" style={{color:"#FFF",fontSize:25}}/>
  </TouchableOpacity>
);
const Back = () =>(
  <TouchableOpacity onPress={()=>{Actions.home()}}>
    <Icon name="chevron-left" style={{color:"#FFF",fontSize:25}}/>
  </TouchableOpacity>
);
const BackChiTiet = () =>(
  <TouchableOpacity onPress={()=>{Actions.danhmuc()}}>
    <Icon name="chevron-left" style={{color:"#FFF",fontSize:25}}/>
  </TouchableOpacity>
);
class App extends Component {
  render () {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="drawer" component={NavigationDrawer} open={false} >
            <Scene key="main" tabs={true} >
              <Scene key="home" component={Home} titleStyle={{color:"#FFF",fontSize:20,marginTop:-2}} title="TOEIC-WORDS" navigationBarStyle={{backgroundColor:"#42A5F5"}} renderLeftButton={() => <RightHome />} renderRightButton={() => <LeftHome />}/>
              <Scene key="danhmuc" component={DanhMuc} titleStyle={{color:"#FFF",fontSize:20,marginTop:-2}} title="DANH MỤC" navigationBarStyle={{backgroundColor:"#42A5F5"}} renderLeftButton={() => <Back />}/>
              <Scene key="quatrinh" component={DanhMuc} titleStyle={{color:"#FFF",fontSize:20,marginTop:-2}} title="QUÁ TRÌNH" navigationBarStyle={{backgroundColor:"#42A5F5"}} renderLeftButton={() => <Back />}/>
              <Scene key="detail" component={Detail} titleStyle={{color:"#FFF",fontSize:20,marginTop:-2}} title="CHI TIẾT" navigationBarStyle={{backgroundColor:"#42A5F5"}} renderLeftButton={() => <BackChiTiet />}/>
            </Scene>
          </Scene>
        </Scene>
      </RouterWithRedux>
    );
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(App);
