import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageScore={9}
        imageSource={require("../../assets/images/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageScore={7}
        imageSource={require("../../assets/images/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        imageScore={10}
        imageSource={require("../../assets/images/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
