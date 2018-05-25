import urllib.request as request
from bs4 import BeautifulSoup

def crawler(url):
    response = request.urlopen(url)
    body = response.read()
    info = parseBody(body)
    return info

def parseBody(body):
    soup = BeautifulSoup(body, 'html.parser')
    item = soup.select('#qwidget_lastsale')[0]
    return item.text

# url = "https://www.nasdaq.com/symbol/cmcsa"
# print(crawler(url))

# find a page about stock: comcast change an url https://www.nasdaq.com/symbol/cmcsa
# parse and get one stock value
# show in font-end it's trend(accumulate day by day, need to store data in db)
# use babel, webpack, grunt to run the web page
# use react to write the front-end page
