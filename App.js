import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase'

import LoginForm from './components/loginForm';


import Header from './components/common/header'

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDyZoaQ6Cp3HtvO2rGeClf05UDOW6OcMIo",
      authDomain: "auth-c9173.firebaseapp.com",
      databaseURL: "https://auth-c9173.firebaseio.com",
      projectId: "auth-c9173",
      storageBucket: "auth-c9173.appspot.com",
      messagingSenderId: "544878857577"
    });
  }


  render() {
    return (
      <View> 
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
