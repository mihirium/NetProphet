import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function GameItem({ teamOne, teamTwo }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("GameDetails", {
          teamOne: teamOne,
          teamTwo: teamTwo,
        });
      }}
    >
      <View style={[styles.box, styles.shadowProp]}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <View style={styles.row}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../assets/teams/virginia.gif")}
                  style={styles.image}
                />
              </View>
              <View>
                <Text style={styles.teamName}>{teamOne}</Text>
                <Text style={styles.teamScore}>12-1</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.imageContainer}>
                <Image
                  source={require("../assets/teams/virginia.gif")}
                  style={styles.image}
                />
              </View>
              <View>
                <Text style={styles.teamName}>{teamTwo}</Text>
                <Text style={styles.teamScore}>12-1</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.currentScore}> Score </Text>
            <Text style={{ marginLeft: "15%" }}> {teamOne} 45% </Text>
          </View>
        </View>
        <Text style={styles.time}> Time: Monday 5-7:30pm</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 20,
    width: "85%",
    height: 175,
    shadowColor: "black",
    backgroundColor: "white",
    width: 350,
    margin: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  teamScore: {
    fontSize: 12,
    color: "black",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  time: {
    fontSize: 15,
    padding: 5,
    marginLeft: 5,
  },
  currentScore: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "15%",
  },
});
