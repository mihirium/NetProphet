import numpy as np
import pandas as pd
from sklearn import tree
from sklearn.linear_model import LogisticRegression
from sklearn import svm
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import VotingClassifier

team_avg = {
    'Boston Celtics': [42.0, 88.6, 0.474, 16.0, 42.3, 0.377, 26.0, 46.3, 0.562, 17.9, 22.0, 0.816, 9.6, 35.5, 45.1, 26.4, 6.5, 5.1, 13.4, 19.2, 117.9],
    'Philadelphia 76ers': [40.7, 83.6, 0.486, 12.7, 32.8, 0.388, 28.0, 50.9, 0.55, 21.3, 25.5, 0.835, 8.6, 32.4, 41.0, 25.2, 7.8, 4.8, 13.6, 20.5, 115.4],
    'New York Knicks': [41.6, 89.2, 0.466, 12.4, 35.5, 0.349, 29.2, 53.7, 0.544, 19.7, 25.7, 0.769, 12.6, 34.1, 46.7, 22.5, 6.2, 4.0, 13.0, 20.5, 115.3],
    'Brooklyn Nets': [41.5, 84.8, 0.49, 12.7, 33.5, 0.381, 28.8, 51.4, 0.561, 17.5, 21.8, 0.8, 7.9, 32.4, 40.4, 25.3, 7.1, 6.2, 13.9, 21.5, 113.3],
    'Toronto Raptors': [41.6, 91.1, 0.457, 10.9, 32.1, 0.339, 30.7, 59.0, 0.521, 18.9, 24.2, 0.782, 12.7, 30.3, 42.9, 23.6, 9.4, 5.2, 11.9, 20.3, 113.0],
    'Milwaukee Bucks': [42.6, 90.4, 0.471, 14.9, 40.5, 0.367, 27.7, 49.8, 0.556, 16.8, 22.7, 0.74, 11.2, 37.8, 49.0, 25.6, 6.4, 5.1, 14.7, 18.2, 116.8],
    'Cleveland Cavaliers': [41.5, 84.9, 0.488, 11.5, 31.6, 0.365, 30.0, 53.4, 0.561, 17.8, 22.9, 0.778, 9.7, 31.5, 41.3, 24.9, 7.2, 4.5, 13.5, 18.9, 112.2],
    'Chicago Bulls': [42.4, 86.6, 0.489, 10.5, 28.7, 0.366, 31.9, 57.9, 0.551, 18.1, 22.3, 0.811, 8.6, 34.1, 42.7, 24.3, 7.6, 4.5, 13.8, 19.3, 113.3],
    'Indiana Pacers': [41.7, 89.4, 0.467, 13.6, 37.5, 0.364, 28.1, 51.9, 0.541, 18.5, 23.4, 0.79, 10.0, 31.6, 41.6, 26.7, 7.8, 5.9, 14.9, 21.2, 115.6],
    'Detroit Pistons': [39.7, 87.4, 0.454, 11.4, 32.6, 0.35, 28.3, 54.8, 0.516, 19.9, 25.9, 0.769, 11.2, 31.3, 42.5, 22.9, 7.2, 3.8, 15.1, 22.1, 110.7],
    'Miami Heat': [39.0, 85.4, 0.457, 11.7, 34.4, 0.341, 27.3, 50.9, 0.536, 19.5, 23.5, 0.832, 9.8, 31.0, 40.8, 23.6, 8.1, 3.1, 13.5, 18.6, 109.3],
    'Atlanta Hawks': [44.4, 92.2, 0.482, 10.7, 30.3, 0.354, 33.7, 61.9, 0.544, 18.1, 22.1, 0.816, 11.0, 33.0, 44.0, 24.6, 7.0, 4.9, 12.8, 19.0, 117.6],
    'Washington Wizards': [42.0, 86.3, 0.487, 11.1, 31.2, 0.357, 30.9, 55.1, 0.561, 17.8, 22.6, 0.79, 9.3, 34.2, 43.5, 25.3, 6.8, 5.2, 14.1, 18.7, 113.0],
    'Orlando Magic': [40.6, 86.2, 0.471, 10.7, 30.8, 0.347, 29.9, 55.4, 0.54, 19.8, 25.2, 0.788, 10.2, 32.8, 42.9, 23.0, 7.3, 4.5, 15.0, 20.3, 111.7],
    'Charlotte Hornets': [41.4, 91.0, 0.455, 10.6, 32.4, 0.327, 30.8, 58.5, 0.526, 17.7, 23.7, 0.747, 11.1, 33.4, 44.5, 25.0, 7.9, 5.2, 13.8, 20.4, 111.2],
    'Denver Nuggets': [43.9,86.2,.509,12.1,31.1,.389,31.8,55.1,.576,16.8,22.2,.757,9.9,32.8,42.8,29.2,7.5,4.4,14.6,18.7,116.7],
    'Minnesota Timberwolves': [43.0,87.4,.492,12.0,33.3,.361,31.0,54.1,.572,18.0,23.7,.761,9.0,32.5,41.6,26.0,8.1,5.5,15.5,21.7,116.1],
    'Oklahoma City Thunder': [43.2,92.7,.466,12.3,34.2,.360,30.9,58.5,.529,18.7,23.1,.808,11.4,32.4,43.7,24.5,8.2,4.4,13.2,21.1,117.4],
    'Utah Jazz': [42.2,89.5,.471,13.8,38.5,.358,28.4,51.1,.557,19.1,24.3,.788,12.0,33.6,45.6,25.8,6.3,5.3,15.4,20.6,117.3],
    'Portland Trail Blazers': [40.4,84.7,.478,13.0,35.4,.368,27.4,49.3,.556,20.3,25.2,.803,9.6,31.4,41.0,24.1,6.7,4.4,14.5,20.3,114.2],
    'Sacramento Kings': [43.5,87.5,.497,13.8,37.0,.374,29.7,50.6,.588,20.2,25.4,.794,9.1,33.1,42.2,27.2,6.8,3.3,13.7,19.9,121.1],
    'Los Angeles Clippers': [40.8,86.1,.473,12.6,33.3,.377,28.2,52.8,.535,18.7,23.9,.782,10.0,33.5,43.5,23.4,7.1,4.4,14.1,19.6,112.9],
    'Phoenix Suns': [42.1,89.8,.468,12.3,32.6,.376,29.8,57.2,.521,17.1,21.6,.792,11.8,32.2,44.0,27.2,7.2,5.1,13.9,21.6,113.5],
    'Golden State Warriors': [43.0,90.2,.477,16.5,43.2,.382,26.5,47.0,.564,15.9,20.1,.793,10.3,33.9,44.2,29.6,7.1,3.9,16.2,21.6,118.5],
    'Los Angeles Lakers': [42.6,88.9,.479,10.6,31.2,.341,31.9,57.8,.553,20.7,26.6,.778,9.9,35.7,45.5,25.1,6.4,4.5,14.1,18.2,116.5],
    'Memphis Grizzlies': [43.5,92.1,.473,11.8,33.8,.350,31.7,58.3,.544,17.7,24.3,.730,12.3,34.4,46.7,25.7,8.3,5.8,13.6,20.2,116.7],
    'New Orleans Pelicans': [41.9,87.7,.478,10.9,30.5,.356,31.1,57.2,.544,19.3,24.5,.786,10.7,32.9,43.6,25.8,8.4,4.1,14.6,20.6,114.0],
    'Dallas Mavericks': [39.7,83.7,.474,15.0,40.6,.370,24.7,43.1,.572,19.4,25.7,.753,7.8,30.9,38.7,22.7,6.4,3.6,12.4,20.8,113.8],
    'San Antonio Spurs': [42.9,92.1,.466,11.0,31.8,.346,31.9,60.3,.529,15.5,21.0,.738,11.8,31.6,43.4,27.1,7.0,4.0,15.4,20.2,112.3],
    'Houston Rockets': [40.4,88.6,.456,10.6,32.4,.327,29.8,56.2,.531,19.1,25.3,.754,13.2,33.0,46.3,22.4,7.2,4.6,16.5,20.6,110.6]
}

nba_teams = {
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

def predict(visitor: str, home: str):
    match_data = pd.ExcelFile('match_history.xlsx')
    dataset = pd.read_excel(match_data, 'Sheet1')
    data = dataset.iloc[:, 4:]

    point_diff = data['Visitor PTS'] - data['Home PTS']
    mask = point_diff > 0
    labels = np.array(mask.astype(int))
    #X_train, X_test, y_train, y_test = train_test_split(data, labels, test_size=0.2)

    treeModel = tree.DecisionTreeClassifier()
    svmModel = svm.SVC()
    logreg = LogisticRegression(random_state=1)
    forest = RandomForestClassifier(n_estimators=50)
    gnb = GaussianNB()

    eclf = VotingClassifier(estimators=[('t', treeModel), ('svm', svmModel), ('lr', logreg), ('rf', forest), ('gnb', gnb)], voting='hard')
    eclf = eclf.fit(data, labels)

    visitor_stats = team_avg[nba_teams[visitor]]
    home_stats = team_avg[nba_teams[home]]

    team_stats = {
        "Visitor": nba_teams[visitor],
        "Visitor 3-Alpha": visitor,
        "Home": nba_teams[home],
        "Home 3-Alpha": home,
        "Visitor FG": visitor_stats[0],
        "Visitor FGA": visitor_stats[1],
        "Visitor 3P": visitor_stats[3],
        "Visitor 3PA": visitor_stats[4],
        "Visitor FT": visitor_stats[9],
        "Visitor FTA": visitor_stats[10],
        "Visitor ORB": visitor_stats[12],
        "Visitor DRB": visitor_stats[13],
        "Visitor TRB": visitor_stats[14],
        "Visitor AST": visitor_stats[15],
        "Visitor STL": visitor_stats[16],
        "Visitor BLK": visitor_stats[17],
        "Visitor TOV": visitor_stats[18],
        "Visitor PF": visitor_stats[19],
        "Visitor PTS": visitor_stats[20],
        "Home FG": home_stats[0],
        "Home FGA": home_stats[1],
        "Home 3P": home_stats[3],
        "Home 3PA": home_stats[4],
        "Home FT": home_stats[9],
        "Home FTA": home_stats[10],
        "Home ORB": home_stats[12],
        "Home DRB": home_stats[13],
        "Home TRB": home_stats[14],
        "Home AST": home_stats[15],
        "Home STL": home_stats[16],
        "Home BLK": home_stats[17],
        "Home TOV": home_stats[18],
        "Home PF": home_stats[19],
        "Home PTS": home_stats[20],
    }

    prediction = eclf.predict(pd.DataFrame(team_stats, index=[0]).iloc[:, 4:])

    if(prediction[0] == 0):
        print(f"The {nba_teams[visitor]} are predicted to win!")
    else:
        print(f"The {nba_teams[home]} are predicted to win!")