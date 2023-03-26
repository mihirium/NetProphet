import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import Virginia from "../assets/teams/virginia.gif";
import match_history from "../match_history.json";
import images from "../assets/b_logos/images.js";

export default function SpecificTeamHome({ myTeam }) {
  var dict = {};
  dict["Atlanta Hawks"] = "Hawks";
  dict["Boston Celtics"] = "Celtics";
  dict["Brooklyn Nets"] = "Nets";

  dict["Charlotte Hornets"] = "Hornets";
  dict["Chicago Bulls"] = "Bulls";
  dict["Cleveland Cavaliers"] = "Cavaliers";
  dict["Dallas Mavericks"] = "Mavericks";
  dict["Denver Nuggets"] = "Nuggets";
  dict["Detroit Pistons"] = "Pistons";
  dict["Golden State Warriors"] = "Warriors";
  dict["Houston Rockets"] = "Rockets";
  dict["Indiana Pacers"] = "Pacers";
  dict["Los Angeles Clippers"] = "Clippers";
  dict["Los Angeles Lakers"] = "Lakers";
  dict["Memphis Grizzlies"] = "Grizzlies";
  dict["Miami Heat"] = "miami_heat_logos";
  dict["Milwaukee Bucks"] = "Bucks";
  dict["Minnesota Timberwolves"] = "Timberwolves";
  dict["New Orleans Pelicans"] = "Pelicans";
  dict["New York Knicks"] = "Knicks";
  dict["Oklahoma City Thunder"] = "Thunder";
  dict["Orlando Magic"] = "Magic";
  dict["Philadelphia 76ers"] = "76ers";
  dict["Phoenix Suns"] = "Suns";
  dict["Portland Trail Blazers"] = "Trailblazers";
  dict["Sacramento Kings"] = "Kings";
  dict["San Antonio Spurs"] = "Spurs";
  dict["Toronto Raptors"] = "Raptors";
  dict["Utah Jazz"] = "Jazz";
  dict["Washington Wizards"] = "Wizards";

  var dictImage = {};
  dictImage["Atlanta Hawks"] = "atlanta_hawks_logos";
  dictImage["Boston Celtics"] = "boston_celtics_logos";
  dictImage["Brooklyn Nets"] = "brooklyn_nets_logos";

  dictImage["Charlotte Hornets"] = "charlotte_hornets_logos";
  dictImage["Chicago Bulls"] = "chicago_bulls_logos";
  dictImage["Cleveland Cavaliers"] = "cleveland_cavaliers_logos";
  dictImage["Dallas Mavericks"] = "dallas_mavericks_logos";
  dictImage["Denver Nuggets"] = "denver_nuggets_logos";
  dictImage["Detroit Pistons"] = "detroit_pistons_logos";
  dictImage["Golden State Warriors"] = "golden_state_warriors_logos";
  dictImage["Houston Rockets"] = "houston_rockets_logos";
  dictImage["Indiana Pacers"] = "indiana_pacers_logos";
  dictImage["Los Angeles Clippers"] = "los_angeles_clippers_logos";
  dictImage["Los Angeles Lakers"] = "los_angeles_lakers_logos";
  dictImage["Memphis Grizzlies"] = "memphis_grizzlies_logos";
  dictImage["Miami Heat"] = "miami_heat_logos";
  dictImage["Milwaukee Bucks"] = "milwaukee_bucks_logos";
  dictImage["Minnesota Timberwolves"] = "minnesota_timberwolves_logos";
  dictImage["New Orleans Pelicans"] = "new_orleans_pelicans_logos";
  dictImage["New York Knicks"] = "new_york_knicks_logos";
  dictImage["Oklahoma City Thunder"] = "oklahoma_city_thunder_logos";
  dictImage["Orlando Magic"] = "orlando_magic_logos";
  dictImage["Philadelphia 76ers"] = "philadelphia_76ers_logos";
  dictImage["Phoenix Suns"] = "phoenix_suns_logos";
  dictImage["Portland Trail Blazers"] = "portland_trail_blazers_logos";
  dictImage["Sacramento Kings"] = "sacramento_kings_logos";
  dictImage["San Antonio Spurs"] = "san_antonio_spurs_logos";
  dictImage["Toronto Raptors"] = "toronto_raptors_logos";
  dictImage["Utah Jazz"] = "utah_jazz_logos";
  dictImage["Washington Wizards"] = "washington_wizards_logos";

  const TotPts = (team, gameData) => {
    let totalHome3Ps = 0;
    gameData.forEach((game) => {
      if (game.Home === team) {
        totalHome3Ps += game.Home_PTS;
      }
    });
    return totalHome3Ps;
  };
  const ThreePA = (team, gameData) => {
    let totalHome3Ps = 0;
    let home3PA = 0;
    gameData.forEach((game) => {
      if (game.Home === team) {
        totalHome3Ps += game.Home_3P;
        home3PA += game.Home_3PA;
      }
    });
    return Math.round((totalHome3Ps / home3PA) * 100);
  };

  return (
    <View style={styles.box}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}> {dict[myTeam]}</Text>
      <Image source={images[dictImage[myTeam]]} style={styles.image} />
      <Text> Odds: 45%</Text>
      <Text> Total Points: {TotPts(myTeam, match_history)}</Text>
      <Text> 3 Point Average: {ThreePA(myTeam, match_history)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  box: {
    borderRadius: 20,
    width: "50%",
    shadowColor: "black",
    backgroundColor: "white",
    margin: 5,
  },
});
