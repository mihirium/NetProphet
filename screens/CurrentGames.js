import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import GameItem from "../components/GameItem";

const gamesData = [
  { id: 1, teamOne: "Lakers", teamTwo: "Warriors" },
  { id: 2, teamOne: "Celtics", teamTwo: "Rockets" },
  { id: 3, teamOne: "Bulls", teamTwo: "Heat" },
];

export default function Home() {
  const renderGameItem = ({ item }) => (
    <GameItem teamOne={item.teamOne} teamTwo={item.teamTwo} />
  );

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Text style={styles.currentGames}>Current Games</Text>
      <FlatList
        style={{ flex: 1 }}
        data={gamesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGameItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  currentGames: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
