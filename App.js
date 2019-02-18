import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from "./src/screens/detailsScreen";
import HomeScreen from "./src/screens/homeScreen";
import AddScreen from "./src/screens/addScreen";


const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    DetailsScreen,
    AddScreen
  },
  {
    initialRouteName: "HomeScreen"
  }

);

export default createAppContainer(AppNavigator);
