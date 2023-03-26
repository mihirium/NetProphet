import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import Virginia from "../assets/teams/virginia.gif";
import match_history from "../match_history.json";

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
    <View>
      <Text style={{ fontSize: 20 }}> {dict[myTeam]}</Text>
      <Text> Odds: 45%</Text>
      <Text> Total Points: {TotPts(myTeam, match_history)}</Text>
      <Text> 3 Point Average: {ThreePA(myTeam, match_history)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
