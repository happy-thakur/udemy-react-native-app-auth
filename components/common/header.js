import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {

  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>
            { this.props.headerText }
        </Text>
      </View>
    );
  }
}

const styles = {
    textHeader: {
        fontSize: 20
    },
    textContainer: {
        backgroundColor: "#F8F8F8",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative"
    }
}