import React, { Component } from 'react'
import {View, Text, StyleSheet} from "react-native"

export default class Tag extends Component {
    render() {
        return (
            <View style={{minHeight: 20, minWidth: 40, padding: 5, backgroundColor: "white", borderColor: "#ddd", borderWidth: 0.2, borderRadius: 2, marginRight: 20}}>
                <Text style={{ fontWeight: '700', fontSize: 12, opacity: 0.5}}>{this.props.name}</Text>
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
