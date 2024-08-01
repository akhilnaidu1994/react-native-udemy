import { View, Text, Image } from "react-native";
import React from "react";

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {imageScore}</Text>
    </View>
  );
};

export default ImageDetail;
