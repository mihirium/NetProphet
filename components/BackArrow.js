import React from "react";
import { TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const BackButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#FFFFFF"
      style={{ borderRadius: 50 }}
    >
      <Icon name="arrow-back-outline" size={30} />
    </TouchableHighlight>
  );
};

export default BackButton;
