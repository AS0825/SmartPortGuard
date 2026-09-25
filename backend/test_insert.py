import os
from datetime import datetime, timezone

from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

mongo_uri = os.getenv("MONGO_URI")

client = MongoClient(mongo_uri)

db = client["SmartPortGuard"]

sensor_collection = db["sensor_readings"]

test_data = {
    "timestamp": datetime.now(timezone.utc),
    "temperature": 29.66,
    "humidity": 72.71,
    "air_quality": 184,
    "pm25": 91.13,
    "pm10": 43.97,
    "co": 1.06,
    "no2": 67.88,
    "turbidity": 19.03
}

try:

    result = sensor_collection.insert_one(test_data)

    print("✅ TEST INSERT SUCCESSFUL")
    print("Document ID:", result.inserted_id)

except Exception as error:

    print("❌ TEST INSERT FAILED")
    print(error)