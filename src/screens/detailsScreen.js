import React from "react";
import { Button, Text, View } from "react-native";

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    console.log(params);
    return {
      title: params.otherParam ? params.otherParam : "A nested Details screen yo",
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    };
  };
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam(
      "otherParam",
      "a default value or something"
    );
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button title={"Go to Home"} onPress={() => navigate("HomeScreen")} />
        <Button
          title={"Go to Details"}
          onPress={() => navigate("DetailsScreen")}
        />
        <Button title={"Go to Add"} onPress={() => navigate("AddScreen")} />
        <Button title={"Go Back"} onPress={() => navigation.goBack()} />
        <Button
          title="Go Back to top level"
          onPress={() => navigation.popToTop()}
        />
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="go to details screen again"
          onPress={() =>
            navigation.push("DetailsScreen", {
              itemId: Math.floor(Math.random() * 100)
            })
          }
        />
        <Button
          title="update the title"
          onPress={() => navigation.setParams({ otherParam: "Updated!" })}
        />
      </View>
    );
  }
}
