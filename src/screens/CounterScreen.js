import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter((currCounter) => currCounter + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          setCounter((currCounter) => currCounter - 1);
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
