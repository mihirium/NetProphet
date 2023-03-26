import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import SpecificTeam from "../components/SpecificTeam";

export default function GameDetails(props) {
  return (
    <View style={styles.container}>
      <SpecificTeam myTeam={props.route.params.teamOne} />
      {/* <Text style={{ fontSize: 30 }}>{route.params.teamOne}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
});
