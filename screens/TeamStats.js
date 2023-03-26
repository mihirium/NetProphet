import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import BackButton from "../components/BackArrow";
import { useNavigation } from "@react-navigation/native";

export default function TeamStats() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ position: "absolute", top: 50, left: 20 }}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Text style={styles.title}>Team Stats</Text>
      <SearchBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
