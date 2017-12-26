import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase'

import LoginForm from './components/loginForm';
import Button from './components/common/button';
import { Spinner } from './components/common';
import Header from './components/common/header'

export default class App extends Component {

  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDyZoaQ6Cp3HtvO2rGeClf05UDOW6OcMIo",
      authDomain: "auth-c9173.firebaseapp.com",
      databaseURL: "https://auth-c9173.firebaseio.com",
      projectId: "auth-c9173",
      storageBucket: "auth-c9173.appspot.com",
      messagingSenderId: "544878857577"
    });

    firebase.auth().onAuthStateChanged((user) => {

      if(user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});        
      }
    });
  }


  renderContent() {
    
    switch(this.state.loggedIn) {
      case false:
        return (<LoginForm />);
      case true:
        return (
        <Button onPress={() => firebase.auth().signOut()}> Logout </Button>
      );
      default:
        return (<Spinner size="large" />)
    }
  }


  render() {
    return (
      <View> 
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}
