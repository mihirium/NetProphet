import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import GameItem from "../components/GameItem";
import BackButton from "../components/BackArrow";
import { useNavigation } from "@react-navigation/native";

const gamesData = [
  { id: 1, teamOne: "Los Angeles Lakers", teamTwo: "Golden State Warriors" },
  { id: 2, teamOne: "Boston Celtics", teamTwo: "Houston Rockets" },
  { id: 3, teamOne: "Chicago Bulls", teamTwo: "Miami Heat" },
];

export default function Home() {
  const navigation = useNavigation();

  const renderGameItem = ({ item }) => (
    <GameItem teamOne={item.teamOne} teamTwo={item.teamTwo} />
  );

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={{ position: "absolute", top: 50, left: 20 }}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.currentGames}>Current Games</Text>
      </View>
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
