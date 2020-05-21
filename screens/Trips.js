import React, { Component } from 'react'
import {View, Text, StyleSheet} from "react-native"

export default class Trips extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Explore</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
