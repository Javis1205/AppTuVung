import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { connect, Provider } from 'react-redux';
import App from "./App.js";
import { createStore, applyMiddleware, compose } from 'redux';
import {Router} from 'react-native-router-flux';
import reducers from './Components/reducers/Reducers.js';
const RouterWithRedux = connect()(Router);
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);
export default class AppTuVung extends Component{
  render(){
    return(
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('AppTuVung', () => AppTuVung);
