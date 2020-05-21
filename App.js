import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Explorer from './screens/Explorer';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

export default createBottomTabNavigator({
  Explore: {
    screen: Explorer,
    navigationOptions: {
      tabBarLabel: "EXPLORE",
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-search" color= {tintColor} size={24} />
        )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "SAVED",
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-heart" type="FontAwesome5" color= {tintColor} size={24} />
        )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: "TRIPS",
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-airplane" color= {tintColor} size={24} />
        )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: "INBOX",
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-chatboxes" color= {tintColor} size={24} />
        )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "INBOX",
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color= {tintColor} size={24} />
        )
    }
  }

},{
  tabBarOptions: {
    activeTintColor: "red",
    inactiveTintColor: "lightgray",
    style:{
      backgroundColor: "white",
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowOpacity: 1,
      shadowColor: "black",
      elevation: 10,
      
    },
    labelStyle: {
      marginBottom: 5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
