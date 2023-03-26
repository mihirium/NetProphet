import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Fuse from "fuse.js";
import match_history from "../match_history.json";

const teamNames = [
  "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "Los Angeles Clippers",
  "LA Lakers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Hornets",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia Sixers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards",
];

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

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [teamStats, setTeamStats] = useState("");

  const handleSearch = () => {
    const stats = searchTeam(inputValue);
    setTeamStats(stats);
  };

  const FTA = (team, gameData) => {
    let totalHome3Ps = 0;
    let home3PA = 0;
    gameData.forEach((game) => {
      if (game.Home === team) {
        totalHome3Ps += game.Home_FT;
        home3PA += game.Home_FTA;
      }
      if (game.Visitor === team) {
        totalHome3Ps += game.Visitor_FT;
        home3PA += game.Visitor_FTA;
      }
    });
    return Math.round((totalHome3Ps / home3PA) * 100);
  };

  const TotPts = (team, gameData) => {
    let totalHome3Ps = 0;
    gameData.forEach((game) => {
      if (game.Home === team) {
        totalHome3Ps += game.Home_PTS;
      }
      if (game.Visitor === team) {
        totalHome3Ps += game.Visitor_PTS;
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
      if (game.Visitor === team) {
        totalHome3Ps += game.Visitor_3P;
        home3PA += game.Visitor_3PA;
      }
    });
    return Math.round((totalHome3Ps / home3PA) * 100);
  };

  const FGA = (team, gameData) => {
    let totalHome3Ps = 0;
    let home3PA = 0;
    gameData.forEach((game) => {
      if (game.Home === team) {
        totalHome3Ps += game.Home_FG;
        home3PA += game.Home_FGA;
      }
      if (game.Visitor === team) {
        totalHome3Ps += game.Visitor_FG;
        home3PA += game.Visitor_FGA;
      }
    });
    return Math.round((totalHome3Ps / home3PA) * 100);
  };

  const searchTeam = (teamName) => {
    const options = {
      keys: ["name"],
    };
    const fuse = new Fuse(teamNames, options);
    const result = fuse.search(teamName);
    if (result.length > 0) {
      const team = result[0].item;
      const ftaValue = FTA(team, match_history);
      const TPA = ThreePA(team, match_history);
      const fga = FGA(team, match_history);
      const totPoints = TotPts(team, match_history);
      return `Team Name: ${team}
      Total Points: ${totPoints}
      Free Throw Percentage: ${ftaValue}%
      Three Point Percentage: ${TPA}%
      Field Goal Percentage: ${fga}%`;
    } else {
      return "No team found with that name.";
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
        placeholder="Search for an NBA team"
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <Text style={styles.stats}>{teamStats}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  stats: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});

export default SearchBar;
