# Dependencies
import pymongo
import pandas as pd
import os

# The default port used by MongoDB is 27017
# https://docs.mongodb.com/manual/reference/default-mongodb-port/
conn = 'mongodb://localhost:27017/'
client = pymongo.MongoClient(conn)

NBA_data = pd.read_csv('Static/data/test_file.csv')
NBA_data.drop(['Unnamed: 0'], axis=1, inplace=True)
NBA_data.reset_index(inplace = True)
NBA_data_dict = NBA_data.to_dict(orient = 'records')

db = client.NBA_data_db
collection = db.NBA_game_stats_db
# for item in NBA_data_dict:
#     print(item)
collection.insert(NBA_data_dict)