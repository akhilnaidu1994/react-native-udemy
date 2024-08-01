import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There! </Text>
      <Button
        title="Go to components Demo"
        onPress={() => {
          navigate("Components");
        }}
      ></Button>

      <Button
        title="Go to List demo"
        onPress={() => {
          navigate("List");
        }}
      ></Button>

      <Button
        title="Go to Image Screen"
        onPress={() => {
          navigate("Image");
        }}
      ></Button>

      <Button
        title="Go to Counter Screen"
        onPress={() => {
          navigate("Counter");
        }}
      ></Button>

      <Button
        title="Go to Color Screen"
        onPress={() => {
          navigate("Color");
        }}
      ></Button>

      <Button
        title="Go to Square Screen"
        onPress={() => {
          navigate("Square");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
