import React, { Component } from 'react'
import {View, Text, StyleSheet, Image} from "react-native"

export default class Category extends Component {
    render() {
        return (
            <View style= {{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: "#fff" }}>
                <View style={{flex: 2, shadowOpacity: 0.16, elevation: 10, borderRadius: 20}}>
                    <Image source = { this.props.imageUri} 
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: "cover",
                            overflow: "hidden",
                            borderRadius: 12
                    }} />                                        
                </View>
                <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                    <Text style={{fontWeight: "bold"}}>{this.props.name}</Text>
                </View>
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
