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
import images from "../assets/b_logos/images.js";


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

var WLdict = {};
WLdict["Milwaukee Bucks"] = [53, 20];
WLdict["Boston Celtics"] = [51, 23];
WLdict["Philadelphia 76ers"] = [49, 24];
WLdict["Cleveland Cavaliers"] = [47, 28];
WLdict["New York Knicks"] = [42, 33];
WLdict["Miami Heat"] = [40, 34];
WLdict["Brooklyn Nets"] = [39, 34];
WLdict["Atlanta Hawks"] = [36, 37];
WLdict["Toronto Raptors"] = [36, 38];
WLdict["Chicago Bulls"] = [35, 38];
WLdict["Indiana Pacers"] = [33, 41];
WLdict["Washington Wizards"] = [33, 41];
WLdict["Orlando Magic"] = [31, 43];
WLdict["Charlotte Hornets"] = [24, 51];
WLdict["Detroit Pistons"] = [16, 58];
WLdict["Denver Nuggets"] = [49, 24];
WLdict["Memphis Grizzlies"] = [46, 27];
WLdict["Sacramento Kings"] = [44, 29];
WLdict["Los Angeles Clippers"] = [39, 35];
WLdict["Phoenix Suns"] = [38, 35];
WLdict["Golden State Warriors"] = [39, 36];
WLdict["Minnesota Timberwolves"] = [37, 37];
WLdict["Los Angeles Lakers"] = [37, 37];
WLdict["New Orleans Pelicans"] = [36, 37];
WLdict["Oklahoma City Thunder"] = [36, 38];
WLdict["Dallas Mavericks"] = [36, 38];
WLdict["Utah Jazz"] = [35, 38];
WLdict["Portland Trail Blazers"] = [32, 41];
WLdict["San Antonio Spurs"] = [19, 55];
WLdict["Houston Rockets"] = [18, 56];

export default function GameItem({ teamOne, teamTwo , date, start_time}) {
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
                  source={images[dict[teamOne]]}
                  style={styles.image}
                />
              </View>
              <View>
                <Text style={styles.teamName}>{teamOne}</Text>
                <Text style={styles.teamScore}>{WLdict[teamOne][0]}-{WLdict[teamOne][1]}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.imageContainer}>
                <Image
                  source={images[dict[teamTwo]]}
                  style={styles.image}
                />
              </View>
              <View>
                <Text style={styles.teamName}>{teamTwo}</Text>
                <Text style={styles.teamScore}>{WLdict[teamTwo][0]}-{WLdict[teamTwo][1]}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.currentScore}> Score </Text>
            <Text> {teamOne} 45% </Text>
          </View>
        </View>
        <Text style={styles.time}> Time: {start_time} Date: {date} </Text>
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
