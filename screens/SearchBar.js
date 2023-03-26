import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Fuse from 'fuse.js';


const nbaTeams = [
  {
    name: "Los Angeles Lakers",
    homePoints: 110,
    homeRebounds: 47,
    steals: 10,
    blocks: 5,
    turnovers: 12
  },
  {
    name: "Brooklyn Nets",
    homePoints: 115,
    homeRebounds: 43,
    steals: 7,
    blocks: 4,
    turnovers: 9
  },
  {
    name: "Miami Heat",
    homePoints: 105,
    homeRebounds: 52,
    steals: 9,
    blocks: 3,
    turnovers: 11
  },
  {
    name: "Boston Celtics",
    homePoints: 107,
    homeRebounds: 45,
    steals: 8,
    blocks: 4,
    turnovers: 10
  },
  // add more teams and stats here
];

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [teamStats, setTeamStats] = useState('');

  const handleSearch = () => {
    const stats = searchTeam(inputValue);
    setTeamStats(stats);
  }

  const searchTeam = (teamName) => {
    const options = {
      keys: ['name']
    };
    const fuse = new Fuse(nbaTeams, options);
    const result = fuse.search(teamName);
    if (result.length > 0) {
      const team = result[0].item;
      return `
        Home Team Points: ${team.homePoints}
        Home Team Rebounds: ${team.homeRebounds}
        Steals: ${team.steals}
        Blocks: ${team.blocks}
        Turnovers: ${team.turnovers}
      `;
    } else {
      return "No team found with that name.";
    }
  }

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setInputValue(text)}
        value={inputValue}
        placeholder="Search for an NBA team"
      />
      <Button title="Search" onPress={handleSearch} />
      <Text>{teamStats}</Text>
    </View>
  );
}

export default SearchBar;
