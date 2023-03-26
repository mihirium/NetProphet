import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Virginia from "../assets/teams/virginia.gif";

export default function SpecificTeam({ myTeam }) {
  return (
    <View>
      <Image
        source={require("../assets/teams/virginia.gif")}
        style={styles.image}
      />
      <Text> {myTeam}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
