from predict_winner import predict
import json
import numpy as np
import statistics

nba_alpha_to_full = {
    "ATL": "Atlanta Hawks",
    "BOS": "Boston Celtics",
    "BRK": "Brooklyn Nets",
    "CHO": "Charlotte Hornets",
    "CHI": "Chicago Bulls",
    "CLE": "Cleveland Cavaliers",
    "DAL": "Dallas Mavericks",
    "DEN": "Denver Nuggets",
    "DET": "Detroit Pistons",
    "GSW": "Golden State Warriors",
    "HOU": "Houston Rockets",
    "IND": "Indiana Pacers",
    "LAC": "Los Angeles Clippers",
    "LAL": "Los Angeles Lakers",
    "MEM": "Memphis Grizzlies",
    "MIA": "Miami Heat",
    "MIL": "Milwaukee Bucks",
    "MIN": "Minnesota Timberwolves",
    "NOP": "New Orleans Pelicans",
    "NYK": "New York Knicks",
    "OKC": "Oklahoma City Thunder",
    "ORL": "Orlando Magic",
    "PHI": "Philadelphia 76ers",
    "PHO": "Phoenix Suns",
    "POR": "Portland Trail Blazers",
    "SAC": "Sacramento Kings",
    "SAS": "San Antonio Spurs",
    "TOR": "Toronto Raptors",
    "UTA": "Utah Jazz",
    "WAS": "Washington Wizards"
}

nba_full_to_alpha = {v: k for k, v in nba_alpha_to_full.items()}

f = open('results.txt', 'w')
json_data = '[{"item": 1, "date": "Mon, Mar 27, 2023", "start_time": "7:00p", "visitor_team": "Milwaukee Bucks", "home_team": "Detroit Pistons"}, {"item": 2, "date": "Mon, Mar 27, 2023", "start_time": "7:00p", "visitor_team": "Dallas Mavericks", "home_team": "Indiana Pacers"}, {"item": 3, "date": "Mon, Mar 27, 2023", "start_time": "7:30p", "visitor_team": "Houston Rockets", "home_team": "New York Knicks"}, {"item": 4, "date": "Mon, Mar 27, 2023", "start_time": "9:00p", "visitor_team": "Phoenix Suns", "home_team": "Utah Jazz"}, {"item": 5, "date": "Mon, Mar 27, 2023", "start_time": "9:30p", "visitor_team": "Philadelphia 76ers", "home_team": "Denver Nuggets"}, {"item": 6, "date": "Mon, Mar 27, 2023", "start_time": "10:00p", "visitor_team": "New Orleans Pelicans", "home_team": "Portland Trail Blazers"}, {"item": 7, "date": "Mon, Mar 27, 2023", "start_time": "10:00p", "visitor_team": "Minnesota Timberwolves", "home_team": "Sacramento Kings"}, {"item": 8, "date": "Mon, Mar 27, 2023", "start_time": "10:30p", "visitor_team": "Chicago Bulls", "home_team": "Los Angeles Clippers"}, {"item": 9, "date": "Tue, Mar 28, 2023", "start_time": "7:00p", "visitor_team": "Boston Celtics", "home_team": "Washington Wizards"}, {"item": 10, "date": "Tue, Mar 28, 2023", "start_time": "7:30p", "visitor_team": "Cleveland Cavaliers", "home_team": "Atlanta Hawks"}, {"item": 11, "date": "Tue, Mar 28, 2023", "start_time": "7:30p", "visitor_team": "Miami Heat", "home_team": "Toronto Raptors"}, {"item": 12, "date": "Tue, Mar 28, 2023", "start_time": "8:00p", "visitor_team": "Orlando Magic", "home_team": "Memphis Grizzlies"}, {"item": 13, "date": "Tue, Mar 28, 2023", "start_time": "8:00p", "visitor_team": "Charlotte Hornets", "home_team": "Oklahoma City Thunder"}, {"item": 14, "date": "Tue, Mar 28, 2023", "start_time": "10:00p", "visitor_team": "New Orleans Pelicans", "home_team": "Golden State Warriors"}, {"item": 15, "date": "Wed, Mar 29, 2023", "start_time": "7:00p", "visitor_team": "Milwaukee Bucks", "home_team": "Indiana Pacers"}, {"item": 16, "date": "Wed, Mar 29, 2023", "start_time": "7:30p", "visitor_team": "Houston Rockets", "home_team": "Brooklyn Nets"}, {"item": 17, "date": "Wed, Mar 29, 2023", "start_time": "7:30p", "visitor_team": "Miami Heat", "home_team": "New York Knicks"}, {"item": 18, "date": "Wed, Mar 29, 2023", "start_time": "7:30p", "visitor_team": "Dallas Mavericks", "home_team": "Philadelphia 76ers"}, {"item": 19, "date": "Wed, Mar 29, 2023", "start_time": "8:00p", "visitor_team": "Los Angeles Lakers", "home_team": "Chicago Bulls"}, {"item": 20, "date": "Wed, Mar 29, 2023", "start_time": "8:00p", "visitor_team": "Los Angeles Clippers", "home_team": "Memphis Grizzlies"}, {"item": 22, "date": "Wed, Mar 29, 2023", "start_time": "8:00p", "visitor_team": "Detroit Pistons", "home_team": "Oklahoma City Thunder"}, {"item": 23, "date": "Wed, Mar 29, 2023", "start_time": "8:00p", "visitor_team": "Utah Jazz", "home_team": "San Antonio Spurs"}, {"item": 24, "date": "Wed, Mar 29, 2023", "start_time": "10:00p", "visitor_team": "Minnesota Timberwolves", "home_team": "Phoenix Suns"}, {"item": 25, "date": "Wed, Mar 29, 2023", "start_time": "10:00p", "visitor_team": "Sacramento Kings", "home_team": "Portland Trail Blazers"}, {"item": 26, "date": "Thu, Mar 30, 2023", "start_time": "7:30p", "visitor_team": "Boston Celtics", "home_team": "Milwaukee Bucks"}, {"item": 27, "date": "Thu, Mar 30, 2023", "start_time": "10:00p", "visitor_team": "New Orleans Pelicans", "home_team": "Denver Nuggets"}, {"item": 28, "date": "Fri, Mar 31, 2023", "start_time": "7:00p", "visitor_team": "Chicago Bulls", "home_team": "Charlotte Hornets"}, {"item": 29, "date": "Fri, Mar 31, 2023", "start_time": "7:00p", "visitor_team": "Oklahoma City Thunder", "home_team": "Indiana Pacers"}, {"item": 30, "date": "Fri, Mar 31, 2023", "start_time": "7:00p", "visitor_team": "Toronto Raptors", "home_team": "Philadelphia 76ers"}, {"item": 31, "date": "Fri, Mar 31, 2023", "start_time": "7:00p", "visitor_team": "Orlando Magic", "home_team": "Washington Wizards"}, {"item": 32, "date": "Fri, Mar 31, 2023", "start_time": "7:30p", "visitor_team": "Utah Jazz", "home_team": "Boston Celtics"}, {"item": 33, "date": "Fri, Mar 31, 2023", "start_time": "7:30p", "visitor_team": "Atlanta Hawks", "home_team": "Brooklyn Nets"}, {"item": 34, "date": "Fri, Mar 31, 2023", "start_time": "7:30p", "visitor_team": "New York Knicks", "home_team": "Cleveland Cavaliers"}, {"item": 35, "date": "Fri, Mar 31, 2023", "start_time": "8:00p", "visitor_team": "Detroit Pistons", "home_team": "Houston Rockets"}, {"item": 36, "date": "Fri, Mar 31, 2023", "start_time": "8:00p", "visitor_team": "Los Angeles Clippers", "home_team": "Memphis Grizzlies"}, {"item": 37, "date": "Fri, Mar 31, 2023", "start_time": "8:00p", "visitor_team": "Los Angeles Lakers", "home_team": "Minnesota Timberwolves"}, {"item": 38, "date": "Fri, Mar 31, 2023", "start_time": "10:00p", "visitor_team": "San Antonio Spurs", "home_team": "Golden State Warriors"}, {"item": 39, "date": "Fri, Mar 31, 2023", "start_time": "10:00p", "visitor_team": "Sacramento Kings", "home_team": "Portland Trail Blazers"}, {"item": 40, "date": "Fri, Mar 31, 2023", "start_time": "10:30p", "visitor_team": "Denver Nuggets", "home_team": "Phoenix Suns"}]'
data = json.loads(json_data)

for item in data:
    str = predict(nba_full_to_alpha[item['visitor_team']], nba_full_to_alpha[item['home_team']]) + '\n'
    f.write(str)