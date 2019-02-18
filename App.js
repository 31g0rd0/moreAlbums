import React, { Component } from "react";
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
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },

      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
