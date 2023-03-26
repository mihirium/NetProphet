import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import SpecificTeamHome from "../components/SpecificTeamHome";
import SpecificTeamAway from "../components/SpecificAwayTeam";
import BackButton from "../components/BackArrow";
import { useNavigation } from "@react-navigation/native";

export default function GameDetails(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Text style={styles.title}> Team Stats</Text>
      <View style={{ position: "absolute", top: 50, left: 20 }}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <SpecificTeamHome myTeam={props.route.params.teamOne} />
        <SpecificTeamAway myTeam={props.route.params.teamTwo} />
      </View>
      {/* <Text style={{ fontSize: 30 }}>{route.params.teamOne}</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
