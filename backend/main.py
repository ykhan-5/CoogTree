from flask import Flask, request, Response
from dotenv import load_dotenv
import os 
from pymongo import MongoClient
import json

load_dotenv()
app = Flask(__name__)
print(os.getenv("MONGO_URI"))
client = MongoClient(os.getenv("MONGO_URI"))
coogstreedb = client.get_database("coogsdb")

# Get Routes

@app.route("/signup", methods=["POST"])
def signup():
    full_name = request.json["full_name"]
    email = request.json["email"]
    password = request.json["password"]
    if coogstreedb.get_collection("users").find_one({
         "email": email
    }):
         return Response("Email Already Registered With An Account", status=400)
    coogstreedb.get_collection("users").insert_one({
        "full_name": full_name,
        "email": email, 
        "password": password
    })
    return Response("Created New User", status=200)

@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    user = coogstreedb.get_collection("users").find_one({
        "email": email
    })
    if user and user["password"] == password: 
            return Response("Successfully Logged In", status=400) 
    return Response("Incorrect username or password", status=400)  

# Set Routes

if __name__ == "__main__":
    app.run(debug=True)