import os
import time
import pandas as pd
import numpy as np
from dotenv import load_dotenv, find_dotenv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import sys

def scrape_url(url: str) -> None:
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
    # TODO optimize this scipt to improve runtime
    start_time = time.time()
    load_dotenv(os.path.join(os.path.dirname(__file__), 'config', '.env'))

    # create a Service object for the Chrome webdriver
    chrome_service = Service(os.getenv('CHROME_DRIVER_PATH'))

    # initialize the Chrome webdriver with the Service object
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--ignore-certificate-errors')
    # chrome_options.add_argument('--headless')
    # chrome_options.add_experimental_option("detach", True)
    driver = webdriver.Chrome(service=chrome_service, options=chrome_options)


    # use the webdriver to interact with a website
    driver.get(url)
    # driver.maximize_window()
    print('Scraping: ', url)

    visitor_alpha = driver.find_element('xpath', '//div[contains(@class,"table_container")]//table//tbody//tr[1]//th[@class="center "]').text
    home_alpha = driver.find_element('xpath', '//div[contains(@class,"table_container")]//table//tbody//tr[2]//th[@class="center "]').text

    team_table = 'box-{0}-game-basic'.format(visitor_alpha)
    visitor_stats = driver.find_element('xpath', "//table[@id='" + team_table + "']//tfoot//tr").text.split(' ')[3:]

    team_table = 'box-{0}-game-basic'.format(home_alpha)
    home_stats = driver.find_element('xpath', "//table[@id='" + team_table + "']//tfoot//tr").text.split(' ')[3:]

    stats_dict = {
        "Visitor": nba_teams[visitor_alpha],
        "Visitor 3-Alpha": visitor_alpha,
        "Home": nba_teams[home_alpha],
        "Home 3-Alpha": home_alpha,
        "Visitor FG": visitor_stats[0],
        "Visitor FGA": visitor_stats[1],
        "Visitor 3P": visitor_stats[3],
        "Visitor 3PA": visitor_stats[4],
        "Visitor FT": visitor_stats[6],
        "Visitor FTA": visitor_stats[7],
        "Visitor ORB": visitor_stats[9],
        "Visitor DRB": visitor_stats[10],
        "Visitor TRB": visitor_stats[11],
        "Visitor AST": visitor_stats[12],
        "Visitor STL": visitor_stats[13],
        "Visitor BLK": visitor_stats[14],
        "Visitor TOV": visitor_stats[15],
        "Visitor PF": visitor_stats[16],
        "Visitor PTS": visitor_stats[17],
        "Home FG": visitor_stats[0],
        "Home FGA": home_stats[1],
        "Home 3P": home_stats[3],
        "Home 3PA": home_stats[4],
        "Home FT": home_stats[6],
        "Home FTA": home_stats[7],
        "Home ORB": home_stats[9],
        "Home DRB": home_stats[10],
        "Home TRB": home_stats[11],
        "Home AST": home_stats[12],
        "Home STL": home_stats[13],
        "Home BLK": home_stats[14],
        "Home TOV": home_stats[15],
        "Home PF": home_stats[16],
        "Home PTS": home_stats[17],
    }

    print("NBA game data successfully scraped in %s seconds" % (time.time() - start_time))

    excel_filepath = 'match_history.xlsx'
    match_data = pd.ExcelFile(excel_filepath)
    month = 'February'
    dataset = pd.read_excel(io=match_data, sheet_name=month)

    # Append to dataframe and Excel file
    instances = [dataset, pd.DataFrame(stats_dict, index=[0])]
    dataset = pd.concat(instances, ignore_index=True)
    dataset.to_excel(excel_writer=excel_filepath, sheet_name=month)

scrape_url(sys.argv[1])