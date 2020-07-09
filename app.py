from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from flask import jsonify
from bson.json_util import dumps
import json
# import scrape_mars

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection

app.config["MONGO_URI"] = "mongodb+srv://everyone:everypass@cluster0.usvaj.mongodb.net/nbastats"
mongo = PyMongo(app)

# Or set inline
# mongo = PyMongo(app, uri="mongodb://localhost:27017/craigslist_app")





@app.route("/")
def index():
    return render_template("index.html")

@app.route("/seasondata")
def info():
    latest_info = dumps(mongo.db.seasonstats.find())
    latest_info = json.loads(latest_info)
    print(type(latest_info))
    # latest_info = latest_info[:331]
    return jsonify(latest_info)
@app.route("/players")
def player():
    return render_template("players.html")

@app.route("/playerdata")
def players():
    latest_info = dumps(mongo.db.playerdata.find())
    latest_info = json.loads(latest_info)
    print(type(latest_info))
    # latest_info = latest_info[:331]
    return jsonify(latest_info)

# @app.route("/scrape")
# def scraper():
#     latest_data = scrape_mars.scrape()
#     mongo.db.scrape_mars.insert_one(latest_data)
#     return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)