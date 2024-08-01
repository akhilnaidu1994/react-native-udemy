import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
