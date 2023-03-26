import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";

export default function TeamStats() {
  return (
    <View style={styles.container}>
      <Text>TeamStats</Text>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
