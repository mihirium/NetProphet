import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
var dict = {};
dict["Atlanta Hawks"] = "atlanta_hawks_logos";
dict["Boston Celtics"] = "boston_celtics_logos";
dict["Brooklyn Nets"] = "brooklyn_nets_logos";

dict["Charlotte Hornets"] = "charlotte_hornets_logos";
dict["Chicago Bulls"] = "chicago_bulls_logos";
dict["Cleveland Cavaliers"] = "cleveland_cavaliers_logos";
dict["Dallas Mavericks"] = "dallas_mavericks_logos";
dict["Denver Nuggets"] = "denver_nuggets_logos";
dict["Detroit Pistons"] = "detroit_pistons_logos";
dict["Golden State Warriors"] = "golden_state_warriors_logos";
dict["Houston Rockets"] = "houston_rockets_logos";
dict["Indiana Pacers"] = "indiana_pacers_logos";
dict["Los Angeles Clippers"] = "los_angeles_clippers_logos";
dict["Los Angeles Lakers"] = "los_angeles_lakers_logos";
dict["Memphis Grizzlies"] = "memphis_grizzlies_logos";
dict["Miami Heat"] = "miami_heat_logos";
dict["Milwaukee Bucks"] = "milwaukee_bucks_logos";
dict["Minnesota Timberwolves"] = "minnesota_timberwolves_logos";
dict["New Orleans Pelicans"] = "new_orleans_pelicans_logos";
dict["New York Knicks"] = "new_york_knicks_logos";
dict["Oklahoma City Thunder"] = "oklahoma_city_thunder_logos";
dict["Orlando Magic"] = "orlando_magic_logos";
dict["Philadelphia 76ers"] = "philadelphia_76ers_logos";
dict["Phoenix Suns"] = "phoenix_suns_logos";
dict["Portland Trail Blazers"] = "portland_trail_blazers_logos";
dict["Sacramento Kings"] = "sacramento_kings_logos";
dict["San Antonio Spurs"] = "san_antonio_spurs_logos";
dict["Toronto Raptors"] = "toronto_raptors_logos";
dict["Utah Jazz"] = "utah_jazz_logos";
dict["Washington Wizards"] = "washington_wizards_logos";

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
                  source={require("../assets/b_logos/los_angeles_lakers_logos.gif")}
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
            <Text> {teamOne} 45% </Text>
          </View>
        </View>
        <Text style={styles.time}> Time: Monday 5-7:30pm</Text>
      </View>
      {/* <Button
        title="teamOne"
        onPress={() => {
          console.log(typeof dict[teamTwo]);
        }}
      ></Button> */}
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
  },
});
