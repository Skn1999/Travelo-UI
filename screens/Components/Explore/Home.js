import React, { Component } from 'react'
import {View, Text, StyleSheet, Image} from "react-native"
import StarRating from "react-native-star-rating";

export default class Home extends Component {
    render() {
        return (
            <View style={{ width: this.props.width/2 -30, height: this.props.width/1.5 -30 , borderWidth: 0.5, borderColor: "#fff", marginBottom: 20 }}>
                <View style={{flex: 2, borderRadius: 20, shadowOpacity: 0.16, elevation:10,}}>
                    <Image 
                    style = {{ width: null, height: null, resizeMode: 'cover', flex: 2, borderRadius: 12}}
                    source = {this.props.imageUri} />
                </View>
                <View style={{backgroundColor: "white", flex: 1, alignItems: "flex-start", justifyContent: "space-evenly", paddingLeft: 10, paddingVertical: 3}}>
                    <Text style={{fontSize:10, color: "#b63838"}}>{this.props.type}</Text>
                    <Text style={{fontSize:12, fontWeight: "bold" }}>{this.props.name}</Text>
                    <Text style={{fontSize:10, fontWeight: "bold"}}>{this.props.price}$</Text>
                    <StarRating
                        disabled ={true}
                        starSize = {5}
                        rating = {this.props.rating}
                        starSize = {10}
                    />
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
