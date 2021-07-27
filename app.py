from flask import Flask
from flask import render_template
from flask import send_from_directory


app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html")


@app.route("/favicon.ico")
def favicon():
    return send_from_directory("static", "favicon.ico")
