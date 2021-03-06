import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: "#007aff",
        fontSize: 16,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007aff",
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#fff"
    }
}

export default class Button extends Component {


  render() {
    return (
        <TouchableOpacity 
            onPress={this.props.onPress} 
            style={styles.buttonStyle} >
            <Text style={ styles.textStyle }>
                { this.props.children }
            </Text>
        </TouchableOpacity>
    );
  }
}


// remove export and xport object..
// export { Button: Button }