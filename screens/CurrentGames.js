import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import GameItem from "../components/GameItem";
import BackButton from "../components/BackArrow";
import { useNavigation } from "@react-navigation/native";

const fs = require('fs');

const prediction = [];

// read the file line by line and add each line to an array
const readInterface = readline.createInterface({
    input: fs.createReadStream('results.txt'),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
  prediction.push(line);
});

const gamesData = [
  {
    id: 1,
    date: "Mon, Mar 27, 2023",
    start_time: "7:00p",
    visitor_team: "Milwaukee Bucks",
    home_team: "Detroit Pistons",
    prediction: prediction[0]
  },
  {
    id: 2,
    date: "Mon, Mar 27, 2023",
    start_time: "7:00p",
    visitor_team: "Dallas Mavericks",
    home_team: "Indiana Pacers",
    prediction: prediction[1]
  },
  {
    id: 3,
    date: "Mon, Mar 27, 2023",
    start_time: "7:30p",
    visitor_team: "Houston Rockets",
    home_team: "New York Knicks",
    prediction: prediction[2]
  },
  {
    id: 4,
    date: "Mon, Mar 27, 2023",
    start_time: "9:00p",
    visitor_team: "Phoenix Suns",
    home_team: "Utah Jazz",
    prediction: prediction[3]
  },
  {
    id: 5,
    date: "Mon, Mar 27, 2023",
    start_time: "9:30p",
    visitor_team: "Philadelphia 76ers",
    home_team: "Denver Nuggets",
    prediction: prediction[4]
  },
  {
    id: 6,
    date: "Mon, Mar 27, 2023",
    start_time: "10:00p",
    visitor_team: "New Orleans Pelicans",
    home_team: "Portland Trail Blazers",
    prediction: prediction[5]
  },
  {
    id: 7,
    date: "Mon, Mar 27, 2023",
    start_time: "10:00p",
    visitor_team: "Minnesota Timberwolves",
    home_team: "Sacramento Kings",
    prediction: prediction[6]
  },
  {
    id: 8,
    date: "Mon, Mar 27, 2023",
    start_time: "10:30p",
    visitor_team: "Chicago Bulls",
    home_team: "Los Angeles Clippers",
    prediction: prediction[7]
  },
  {
    id: 9,
    date: "Tue, Mar 28, 2023",
    start_time: "7:00p",
    visitor_team: "Boston Celtics",
    home_team: "Washington Wizards",
    prediction: prediction[8]
  },
  {
    id: 10,
    date: "Tue, Mar 28, 2023",
    start_time: "7:30p",
    visitor_team: "Cleveland Cavaliers",
    home_team: "Atlanta Hawks",
    prediction: prediction[9]
  },
  {
    id: 11,
    date: "Tue, Mar 28, 2023",
    start_time: "7:30p",
    visitor_team: "Miami Heat",
    home_team: "Toronto Raptors",
    prediction: prediction[10]
  },
  {
    id: 12,
    date: "Tue, Mar 28, 2023",
    start_time: "8:00p",
    visitor_team: "Orlando Magic",
    home_team: "Memphis Grizzlies",
    prediction: prediction[11]
  },
  {
    id: 13,
    date: "Tue, Mar 28, 2023",
    start_time: "8:00p",
    visitor_team: "Charlotte Hornets",
    home_team: "Oklahoma City Thunder",
    prediction: prediction[12]
  },
  {
    id: 14,
    date: "Tue, Mar 28, 2023",
    start_time: "10:00p",
    visitor_team: "New Orleans Pelicans",
    home_team: "Golden State Warriors",
    prediction: prediction[13]
  },
  {
    id: 15,
    date: "Wed, Mar 29, 2023",
    start_time: "7:00p",
    visitor_team: "Milwaukee Bucks",
    home_team: "Indiana Pacers",
    prediction: prediction[14]
  },
  {
    id: 16,
    date: "Wed, Mar 29, 2023",
    start_time: "7:30p",
    visitor_team: "Houston Rockets",
    home_team: "Brooklyn Nets",
    prediction: prediction[15]
  },
  {
    id: 17,
    date: "Wed, Mar 29, 2023",
    start_time: "7:30p",
    visitor_team: "Miami Heat",
    home_team: "New York Knicks",
    prediction: prediction[16]
  },
  {
    id: 18,
    date: "Wed, Mar 29, 2023",
    start_time: "7:30p",
    visitor_team: "Dallas Mavericks",
    home_team: "Philadelphia 76ers",
    prediction: prediction[17]
  },
  {
    id: 19,
    date: "Wed, Mar 29, 2023",
    start_time: "8:00p",
    visitor_team: "Los Angeles Lakers",
    home_team: "Chicago Bulls",
    prediction: prediction[18]
  },
  {
    id: 20,
    date: "Wed, Mar 29, 2023",
    start_time: "8:00p",
    visitor_team: "Los Angeles Clippers",
    home_team: "Memphis Grizzlies",
    prediction: prediction[19]
  },
  {
    id: 21,
    date: "Wed, Mar 29, 2023",
    start_time: "8:00p",
    visitor_team: "Detroit Pistons",
    home_team: "Oklahoma City Thunder",
    prediction: prediction[20]
  },
  {
    id: 22,
    date: "Wed, Mar 29, 2023",
    start_time: "8:00p",
    visitor_team: "Utah Jazz",
    home_team: "San Antonio Spurs",
    prediction: prediction[21]
  },
  {
    id: 23,
    date: "Wed, Mar 29, 2023",
    start_time: "10:00p",
    visitor_team: "Minnesota Timberwolves",
    home_team: "Phoenix Suns",
    prediction: prediction[22]
  },
  {
    id: 24,
    date: "Wed, Mar 29, 2023",
    start_time: "10:00p",
    visitor_team: "Sacramento Kings",
    home_team: "Portland Trail Blazers",
    prediction: prediction[23]
  },
  {
    id: 25,
    date: "Thu, Mar 30, 2023",
    start_time: "7:30p",
    visitor_team: "Boston Celtics",
    home_team: "Milwaukee Bucks",
    prediction: prediction[24]
  },
  {
    id: 26,
    date: "Thu, Mar 30, 2023",
    start_time: "10:00p",
    visitor_team: "New Orleans Pelicans",
    home_team: "Denver Nuggets",
    prediction: prediction[25]
  },
  {
    id: 27,
    date: "Fri, Mar 31, 2023",
    start_time: "7:00p",
    visitor_team: "Chicago Bulls",
    home_team: "Charlotte Hornets",
    prediction: prediction[26]
  },
  {
    id: 28,
    date: "Fri, Mar 31, 2023",
    start_time: "7:00p",
    visitor_team: "Oklahoma City Thunder",
    home_team: "Indiana Pacers",
    prediction: prediction[27]
  },
  {
    id: 29,
    date: "Fri, Mar 31, 2023",
    start_time: "7:00p",
    visitor_team: "Toronto Raptors",
    home_team: "Philadelphia 76ers",
    prediction: prediction[28]
  },
  {
    id: 30,
    date: "Fri, Mar 31, 2023",
    start_time: "7:00p",
    visitor_team: "Orlando Magic",
    home_team: "Washington Wizards",
    prediction: prediction[29]
  },
  {
    id: 31,
    date: "Fri, Mar 31, 2023",
    start_time: "7:30p",
    visitor_team: "Utah Jazz",
    home_team: "Boston Celtics",
    prediction: prediction[30]
  },
  {
    id: 32,
    date: "Fri, Mar 31, 2023",
    start_time: "7:30p",
    visitor_team: "Atlanta Hawks",
    home_team: "Brooklyn Nets",
    prediction: prediction[31]
  },
  {
    id: 33,
    date: "Fri, Mar 31, 2023",
    start_time: "7:30p",
    visitor_team: "New York Knicks",
    home_team: "Cleveland Cavaliers",
    prediction: prediction[32]
  },
  {
    id: 34,
    date: "Fri, Mar 31, 2023",
    start_time: "8:00p",
    visitor_team: "Detroit Pistons",
    home_team: "Houston Rockets",
    prediction: prediction[33]
  },
  {
    id: 35,
    date: "Fri, Mar 31, 2023",
    start_time: "8:00p",
    visitor_team: "Los Angeles Clippers",
    home_team: "Memphis Grizzlies",
    prediction: prediction[34]
  },
  {
    id: 36,
    date: "Fri, Mar 31, 2023",
    start_time: "8:00p",
    visitor_team: "Los Angeles Lakers",
    home_team: "Minnesota Timberwolves",
    prediction: prediction[35]
  },
  {
    id: 37,
    date: "Fri, Mar 31, 2023",
    start_time: "10:00p",
    visitor_team: "San Antonio Spurs",
    home_team: "Golden State Warriors",
    prediction: prediction[36]
  },
  {
    id: 38,
    date: "Fri, Mar 31, 2023",
    start_time: "10:00p",
    visitor_team: "Sacramento Kings",
    home_team: "Portland Trail Blazers",
    prediction: prediction[37]
  },
  {
    id: 39,
    date: "Fri, Mar 31, 2023",
    start_time: "10:30p",
    visitor_team: "Denver Nuggets",
    home_team: "Phoenix Suns",
    prediction: prediction[38]
  },
];

export default function Home() {
  const navigation = useNavigation();

  const renderGameItem = ({ item }) => (
    <GameItem
      teamOne={item.visitor_team}
      teamTwo={item.home_team}
      date={item.date}
      start_time={item.start_time}
      prediction={item.prediction}
    />
  );

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={{ position: "absolute", top: 50, left: 20 }}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.currentGames}>Current Games</Text>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={gamesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGameItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  currentGames: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
