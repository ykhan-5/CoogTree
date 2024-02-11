from flask import Flask, request, Response, jsonify
from dotenv import load_dotenv
from pymongo import MongoClient
from operator import itemgetter
from flask_cors import CORS, cross_origin
import os 

load_dotenv()
app = Flask(__name__)
client = MongoClient(os.getenv("MONGO_URI"))
cors = CORS(app)
coogtreedb = client.get_database("coogsdb")


optional_fields = lambda field, data : data[field] if field in data else ""  

# Set Routes

@app.route("/signup", methods=["POST"])
def signup():
    full_name = request.json["full_name"]
    email = request.json["email"]
    password = request.json["password"]
    if coogtreedb.get_collection("users").find_one({
         "email": email
    }):
         return Response("Email Already Registered With An Account", status=400)
    coogtreedb.get_collection("users").insert_one({
        "full_name": full_name,
        "email": email, 
        "password": password,
        "majors": [],
        "terms": [], 
        "classes": {},
        "instagram": "",
        "discord": ""
    })
    return Response("Created New User", status=200)

@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
    user = coogtreedb.get_collection("users").find_one({
        "email": email,
    })
    if user and user["password"] == password: 
            return Response("Successfully Logged In", status=200) 
    return Response("Incorrect username or password", status=400)  

@app.route("/setinfo", methods=["POST"])
def set_info():
    email, majors, terms, classes = itemgetter("email", "majors", "terms", "classes")(request.json)
    if not coogtreedb.get_collection("users").find_one({
         "email": email
    }): return Response("User Not Found", status=400)
    coogtreedb.get_collection("users").update_one({
        "email": email
    }, { "$set": {
         "majors": majors, 
         "terms": terms, 
         "classes": classes,
        "instagram": optional_fields("instagram", request.json),
        "discord": optional_fields("discord", request.json)
     }})  
    return Response("User Info Updated", status=200)

@app.route("/addclass", methods=["POST"])
def get_class_mates():
    email, class_code, prof = itemgetter("email","class_code", "prof")(request.json)
    term = class_code[:3]
    user = coogtreedb.get_collection("users").find_one({
            "email": email
    })
    terms = user["terms"]
    classes = user["classes"]
    if term not in terms: 
            terms.append(term)
    if class_code in classes:
            return Response("User Already Has This Class", status=400)
    else:
            classes[class_code] = prof 
    coogtreedb.get_collection("users").update_one({
            "email": email
    }, {
            "$set" : {
            "terms": terms, 
            "classes": classes
            } 
    })
    class_obj = coogtreedb.get_collection("classes").find_one({
            "class_code": class_code
    })
    if not class_obj: 
            coogtreedb.get_collection("classes").insert_one({
                "class_code": class_code,
                "prof": prof,
                "students": [email]
            })
    else:
        students = class_obj["students"]
        students.append(email)
        coogtreedb.get_collection("classes").update_one({
                "class_code": "class_code"
        }, {
                "$set": {
                    "students": students
                }
        })
    return Response("Class Added", status=200)
    
# Get Routes

@app.route("/getclassmates", methods=["GET"])
def get_classmates():
    _, class_code, prof = itemgetter("email","class_code", "prof")(request.json)
    class_obj = coogtreedb.get_collection("classes").find_one({
            "class_code": class_code
    })
    if not class_obj:
          return Response("Class w/ Professor Does Not Exist", status=404)
    else:
          classmates = coogtreedb.get_collection("classes").find_one({
                "class_code": class_code,
                "prof": prof 
          })["students"]
          return jsonify({"classmates": classmates}), 200


if __name__ == "__main__":
    app.run(debug=True)