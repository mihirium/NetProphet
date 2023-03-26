import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import SpecificTeam from "../components/SpecificTeam";
import BackButton from "../components/BackArrow";
import { useNavigation } from "@react-navigation/native";

export default function GameDetails(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 50, left: 20 }}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
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
