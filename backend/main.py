from flask import Flask

app = Flask(__name__)

# Get Routes

@app.route("/getClassmates", methods=['GET'])
def getClassmates():
    return "Hello World!"


# Set Routes