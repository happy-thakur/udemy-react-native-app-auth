import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import firebase from 'firebase';

import Card from './common/card';
import Button from './common/button';
import CardSection from './common/cardSection';
import { Input } from './common';

export default class LoginForm extends Component {

state = {
    email: "",
    password: ""
}

onButtonPress() {

    const {email, password} = this.state

    firebase.auth.signInWithEmailAndPassword(email, password);
}

  render() {
    return (
        <Card>
            <CardSection>
                <Input label="Email"
                    secureTextEntry={false}
                    placeholder="user@gmail.com "
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
            </CardSection>

            <CardSection>
                <Input label="Password"
                    secureTextEntry={true}
                    placeholder="**********"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
            </CardSection>

            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            </CardSection>            
        </Card>
    );
  }
}


// remove export and xport object..
// export { Button: Button }