from flask import Flask, jsonify
from crawler_1_0 import crawler

app = Flask(__name__)

@app.route('/init')
def today_price():
    resp = jsonify({'data': '5'})
    return resp # crawler('https://www.nasdaq.com/symbol/cmcsa')