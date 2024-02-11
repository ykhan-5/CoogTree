from flask import Flask, request, Response
from dotenv import load_dotenv
import os 
from pymongo import MongoClient
from operator import itemgetter


load_dotenv()
app = Flask(__name__)
client = MongoClient(os.getenv("MONGO_URI"))
coogstreedb = client.get_database("coogsdb")

optional_forms = lambda field, data : data[field] if field in data else ""  

# Set Routes

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
        "password": password,
        "majors": [],
        "terms": set(), 
        "classes": {},
        "instagram": "",
        "email": "",
        "discord": ""
    })
    return Response("Created New User", status=200)

@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    user = coogstreedb.get_collection("users").find_one({
        "email": email,
    })
    if user and user["password"] == password: 
            return Response("Successfully Logged In", status=400) 
    return Response("Incorrect username or password", status=400)  

@app.route("/setinfo", methods=["POST"])
def set_info():
    email, majors, terms, classes = itemgetter("instagram", "discord", "majors", "terms", "classes")(request.json)
    if not coogstreedb.get_collection("users").find_one({
         "email": email
    }): return Response("User Not Found", status=400)
    coogstreedb.get_collection("users").update_one({
        "email": email
    }, { "$set": {
         "majors": majors, 
         "terms": terms, 
         "classes": classes,
        "instagram": optional_forms("instagram", request.json),
        "discord": optional_forms("discord", request.json)
     }})  
    return Response("User Info Updated", status=200)


# Get Routes

@app.route("/getclassmates", methods=["GET"])
def get_class_mates():
        class_code, prof, term = itemgetter("class_code", "prof", "term")(request.json)


if __name__ == "__main__":
    app.run(debug=True)