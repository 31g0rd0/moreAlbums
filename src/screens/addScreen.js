import React from "react";
import { Button, Text, View } from "react-native";

export default class AddScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A nested add screen yo',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    };
  };
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Add Screen</Text>
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
      </View>
    );
  }
}
