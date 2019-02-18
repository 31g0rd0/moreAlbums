import { Button, Text, View } from "react-native";
import React, { Component } from "react";

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "HomeScreen",
      headerRight: (
        <Button
          onPress={() => alert("I am a meat popcicle")}
          title="Identity"
          color="#fff"
        />
      ),
      headerLeft: (
        <Button
          title="+1"
          onPress={navigation.getParam("increaseCount")}
          color="#fff"
        />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>

        <Text>Count: {this.state.count}</Text>
        <Button title={"Go to Home"} onPress={() => navigate("HomeScreen")} />
        <Button
          title={"Go to Details"}
          onPress={() =>
            navigate("DetailsScreen", {
              itemId: 86,
              otherParam: "a giant radioactive lobster!"
            })
          }
        />
        <Button
          title={"Go to Add"}
          onPress={() =>
            navigate("AddScreen", {
              otherParam: "Add screen yo!"
            })
          }
        />
        <Button title={"Go Back"} onPress={() => navigation.goBack()} />
        <Button
          title="Go Back to top level"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
}
