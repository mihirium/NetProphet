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
    backgroundColor: "#4CAF50",
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
});

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
