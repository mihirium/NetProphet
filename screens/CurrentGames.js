import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import GameItem from "../components/GameItem";
import BackButton from "../components/BackArrow";
import { useNavigation } from "@react-navigation/native";

const gamesData = [{id: 1, date: 'Mon, Mar 27, 2023', start_time: '7:00p', visitor_team: 'Milwaukee Bucks', home_team: 'Detroit Pistons'}, {id: 2, date: 'Mon, Mar 27, 2023', start_time: '7:00p', visitor_team: 'Dallas Mavericks', home_team: 'Indiana Pacers'}, {id: 3, date: 'Mon, Mar 27, 2023', start_time: '7:30p', visitor_team: 'Houston Rockets', home_team: 'New York Knicks'}, {id: 4, date: 'Mon, Mar 27, 2023', start_time: '9:00p', visitor_team: 'Phoenix Suns', home_team: 'Utah Jazz'}, {id: 5, date: 'Mon, Mar 27, 2023', start_time: '9:30p', visitor_team: 'Philadelphia 76ers', home_team: 'Denver Nuggets'}, {id: 6, date: 'Mon, Mar 27, 2023', start_time: '10:00p', visitor_team: 'New Orleans Pelicans', home_team: 'Portland Trail Blazers'}, {id: 7, date: 'Mon, Mar 27, 2023', start_time: '10:00p', visitor_team: 'Minnesota Timberwolves', home_team: 'Sacramento Kings'}, {id: 8, date: 'Mon, Mar 27, 2023', start_time: '10:30p', visitor_team: 'Chicago Bulls', home_team: 'Los Angeles Clippers'}, {id: 9, date: 'Tue, Mar 28, 2023', start_time: '7:00p', visitor_team: 'Boston Celtics', home_team: 'Washington Wizards'}, {id: 10, date: 'Tue, Mar 28, 2023', start_time: '7:30p', visitor_team: 'Cleveland Cavaliers', home_team: 'Atlanta Hawks'}, {id: 11, date: 'Tue, Mar 28, 2023', start_time: '7:30p', visitor_team: 'Miami Heat', home_team: 'Toronto Raptors'}, {id: 12, date: 'Tue, Mar 28, 2023', start_time: '8:00p', visitor_team: 'Orlando Magic', home_team: 'Memphis Grizzlies'}, {id: 13, date: 'Tue, Mar 28, 2023', start_time: '8:00p', visitor_team: 'Charlotte Hornets', home_team: 'Oklahoma City Thunder'}, {id: 14, date: 'Tue, Mar 28, 2023', start_time: '10:00p', visitor_team: 'New Orleans Pelicans', home_team: 'Golden State Warriors'}, {id: 15, date: 'Wed, Mar 29, 2023', start_time: '7:00p', visitor_team: 'Milwaukee Bucks', home_team: 'Indiana Pacers'}, {id: 16, date: 'Wed, Mar 29, 2023', start_time: '7:30p', visitor_team: 'Houston Rockets', home_team: 'Brooklyn Nets'}, {id: 17, date: 'Wed, Mar 29, 2023', start_time: '7:30p', visitor_team: 'Miami Heat', home_team: 'New York Knicks'}, {id: 18, date: 'Wed, Mar 29, 2023', start_time: '7:30p', visitor_team: 'Dallas Mavericks', home_team: 'Philadelphia 76ers'}, {id: 19, date: 'Wed, Mar 29, 2023', start_time: '8:00p', visitor_team: 'Los Angeles Lakers', home_team: 'Chicago Bulls'}, {id: 20, date: 'Wed, Mar 29, 2023', start_time: '8:00p', visitor_team: 'Los Angeles Clippers', home_team: 'Memphis Grizzlies'}, {id: 22, date: 'Wed, Mar 29, 2023', start_time: '8:00p', visitor_team: 'Detroit Pistons', home_team: 'Oklahoma City Thunder'}, {id: 23, date: 'Wed, Mar 29, 2023', start_time: '8:00p', visitor_team: 'Utah Jazz', home_team: 'San Antonio Spurs'}, {id: 24, date: 'Wed, Mar 29, 2023', start_time: '10:00p', visitor_team: 'Minnesota Timberwolves', home_team: 'Phoenix Suns'}, {id: 25, date: 'Wed, Mar 29, 2023', start_time: '10:00p', visitor_team: 'Sacramento Kings', home_team: 'Portland Trail Blazers'}, {id: 26, date: 'Thu, Mar 30, 2023', start_time: '7:30p', visitor_team: 'Boston Celtics', home_team: 'Milwaukee Bucks'}, {id: 27, date: 'Thu, Mar 30, 2023', start_time: '10:00p', visitor_team: 'New Orleans Pelicans', home_team: 'Denver Nuggets'}, {id: 28, date: 'Fri, Mar 31, 2023', start_time: '7:00p', visitor_team: 'Chicago Bulls', home_team: 'Charlotte Hornets'}, {id: 29, date: 'Fri, Mar 31, 2023', start_time: '7:00p', visitor_team: 'Oklahoma City Thunder', home_team: 'Indiana Pacers'}, {id: 30, date: 'Fri, Mar 31, 2023', start_time: '7:00p', visitor_team: 'Toronto Raptors', home_team: 'Philadelphia 76ers'}, {id: 31, date: 'Fri, Mar 31, 2023', start_time: '7:00p', visitor_team: 'Orlando Magic', home_team: 'Washington Wizards'}, {id: 32, date: 'Fri, Mar 31, 2023', start_time: '7:30p', visitor_team: 'Utah Jazz', home_team: 'Boston Celtics'}, {id: 33, date: 'Fri, Mar 31, 2023', start_time: '7:30p', visitor_team: 'Atlanta Hawks', home_team: 'Brooklyn Nets'}, {id: 34, date: 'Fri, Mar 31, 2023', start_time: '7:30p', visitor_team: 'New York Knicks', home_team: 'Cleveland Cavaliers'}, {id: 35, date: 'Fri, Mar 31, 2023', start_time: '8:00p', visitor_team: 'Detroit Pistons', home_team: 'Houston Rockets'}, {id: 36, date: 'Fri, Mar 31, 2023', start_time: '8:00p', visitor_team: 'Los Angeles Clippers', home_team: 'Memphis Grizzlies'}, {id: 37, date: 'Fri, Mar 31, 2023', start_time: '8:00p', visitor_team: 'Los Angeles Lakers', home_team: 'Minnesota Timberwolves'}, {id: 38, date: 'Fri, Mar 31, 2023', start_time: '10:00p', visitor_team: 'San Antonio Spurs', home_team: 'Golden State Warriors'}, {id: 39, date: 'Fri, Mar 31, 2023', start_time: '10:00p', visitor_team: 'Sacramento Kings', home_team: 'Portland Trail Blazers'}, {id: 40, date: 'Fri, Mar 31, 2023', start_time: '10:30p', visitor_team: 'Denver Nuggets', home_team: 'Phoenix Suns'}];


export default function Home() {
  const navigation = useNavigation();

  const renderGameItem = ({ item }) => (
    <GameItem teamOne={item.visitor_team} teamTwo={item.home_team} date={item.date} start_time = {item.start_time}/>
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
