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
import { Input, Spinner } from './common';

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
}

export default class LoginForm extends Component {

state = {
    email: "",
    password: "",
    error: "",
    loading: false
}

onButtonPress() {

    this.setState({error: "", loading: true});

    const {email, password} = this.state

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch((err) => {
            if(err.code == "auth/user-not-found") {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((error) => {
                        this.setState({error: error.message, loading: false});
                });
            } else {
                this.setState({error: err.message, loading: false});                
            }
        });
}

onLoginSuccess() {
    this.setState({
        email: '',
        password: '',
        loading: false,
        error: ''
    });
}

renderButton() {
    if(this.state.loading) {
        return (<Spinner size={'small'} />);
    } else {
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
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

            <Text style={styles.errorTextStyle} >
                {this.state.error}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>            
        </Card>
    );
  }
}


// remove export and xport object..
// export { Button: Button }