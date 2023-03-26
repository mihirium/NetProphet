import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CurrentGames from "./CurrentGames.js";

import { useNavigation } from "@react-navigation/native";

export default function Home({ route }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Net Prophet</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("CurrentGames");
        }}
      >
        <Text style={styles.buttonText}>Current Games</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("TeamStats");
        }}
      >
        <Text style={styles.buttonText}>Search Team Stats</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        {" "}
        Made by Mihir Sangameswar, Timmy Truong, James Chaenkwok
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    paddingBottom: 15,
  },
});
