# requirements.txt

# pymongo[srv]
# pymongo
# python-dotenv

from pymongo import MongoClient
from datetime import datetime
from dotenv import load_dotenv
# from pprint import pprint
import os

load_dotenv()

# if getting a "unable to get local issuer certificate" error add
# "&ssl=true&ssl_cert_reqs=CERT_NONE" to your uri

client = MongoClient(os.getenv('MONGODB_URI'))
mon = client['codadash']['collections']
mon.insert_many([
  { 'name': 'mom', 'Space Left Internal': 100, 'Space Left External': '100', 'Videos': 0, 'Last Ran': datetime.now() },
  { 'name': 'p4a', 'Space Left': 100, 'Completed': 0, 'Downloading': 0, 'Transferring': 0, 'VPN Status': False, 'Qbit Status': False, 'Last Ran': datetime.now() },
  { 'name': 'p8a', 'Space Left': 100, 'Last Ran': datetime.now() },
  { 'name': 'heroku', 'hours': 100, 'Last Ran': datetime.now() },
])