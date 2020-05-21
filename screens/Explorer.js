import React, { Component } from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Image, Dimensions, Animated} from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants"
import Category from './Components/Explore/Category';
import Home from './Components/Explore/Home';
import Tag from './Components/Explore/Tag';

const {width, height} = Dimensions.get('window')

export default class Explorer extends Component {

    UNSAFE_componentWillMount(){
        this.scrollY = new Animated.Value(0)
        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if( Platform.OS === "android"){
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange : [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: "clamp"
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: "clamp"
        })

        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 15],
            extrapolate: "clamp"
        })

    }
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style= {{flex: 1, paddingVertical: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
                    <Animated.View style= {{ height: this.animatedHeaderHeight, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#dddddd"}}>
                        <View 
                            style={{
                                    flexDirection: "row", 
                                    paddingHorizontal: 20, 
                                    paddingVertical: 10, 
                                    backgroundColor: "white", 
                                    marginHorizontal: 20,
                                    marginTop: Platform.OS === "android" ? 20 : null,
                                    borderRadius: 5,
                                    shadowOffset: { width: 0, height: 0},
                                    shadowColor:"black",
                                    shadowOpacity: 0.2,
                                    elevation: 5
                            }}>
                            <Icon name="ios-search" size = {20} style={{marginRight: 10, marginTop: 5}} />
                            <TextInput 
                                underlineColorAndroid = "transparent"
                                placeholder = "Try New Delhi" 
                                placeholderTextColor = "lightgray"
                                style= {{flex: 1, fontWeight: '700', backgroundColor: "white"}}
                                />
                        </View>
                        <Animated.View
                        style= {{ flexDirection: "row", marginHorizontal: 20, position: "relative", top: this.animatedTagTop, opacity: this.animatedOpacity}}
                        >
                                <Tag name="Guests"/>
                                <Tag name="Dates"/>
                                
                        </Animated.View>
                    </Animated.View>
                    <ScrollView
                            scrollEventThrottle = {16}
                            onScroll = {Animated.event(
                                [
                                    {nativeEvent : {contentOffset : {y : this.scrollY}}}
                                ]
                            )}
                        >
                            <View style={{ flex : 1, backgroundColor: "white", paddingTop: 20}}>
                                <Text style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20}}>
                                    What can we help you with, Sumit?
                                </Text>
                                <View style={{height: 130, marginTop: 20}}>
                                    <ScrollView horizontal= {true} showsHorizontalScrollIndicator = {false}>
                                        <Category name="Home" imageUri = {require("../assets/home.jpg")} />
                                        <Category name="Experiences" imageUri = {require("../assets/experiences.jpg")} />
                                        <Category name="Restaurants" imageUri = {require("../assets/restaurant.jpg")} />
                                        <Category name="Cottages" imageUri = {require("../assets/home.jpg")} />
                                    </ScrollView>
                                </View>
                                <View style={{ marginTop: 20, paddingHorizontal: 20}}>
                                    <Text style= {{ fontSize: 24, fontWeight: '700'}}>Introducing Airbnb Plus</Text>
                                    <Text style ={{ fontWeight: '100', marginTop: 10}}>Premium homes and suite collection curated and verified just for you</Text>
                                    <View style={{ width:  width - 40, height: 200, marginTop: 20}}>
                                        <Image 
                                            style= {{ flex: 1, height: null, width:null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: "#ddd"}} 
                                            source = { require("../assets/home.jpg")} />
                                    </View>
                                </View>

                            </View>
                            <View style= {{marginTop: 40}}>
                                <Text style= {{ fontSize: 24, fontWeight: '700', paddingHorizontal:20}}>Homes around the world</Text>
                                <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                                    <Home imageUri = {require("../assets/home.jpg")} width = {width} type = "PRIVATE ROOMS - 2 BEDS" name="The Cozy Hotel" price={82} rating={4} />
                                    <Home imageUri = {require("../assets/home2.jpg")} width = {width} type = "SINGLE ROOM - 1 BED, BATHROOM" name="The Kingston Hotel" price={50} rating={5} />
                                    <Home imageUri = {require("../assets/home3.jpg")} width = {width} type = "CONDO - 2 ROOMS" name="The Beachside" price={100} rating={4.5} />
                                    <Home imageUri = {require("../assets/home4.jpg")} width = {width} type = "APARTMENT" name="The Downtown" price={150} rating={3} />
                                    
                                </View>
                            </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
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
