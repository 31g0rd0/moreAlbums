import React from "react";
import { Button, Text, View } from "react-native";

export default class AddScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Add Screen</Text>
        <Button
          title={"Go to Home"}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
        <Button
          title={"Go to Details"}
          onPress={() => this.props.navigation.navigate("DetailsScreen")}
        />
        <Button
          title={"Go to Add"}
          onPress={() => this.props.navigation.navigate("AddScreen")}
        />
        <Button title={"Go Back"} onPress={() => this.props.navigation.goBack()} />
        <Button
          title="Go Back to top level"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}
