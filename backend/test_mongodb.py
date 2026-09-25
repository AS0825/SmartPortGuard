import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

mongo_uri = os.getenv("MONGO_URI")

if not mongo_uri:
    print("❌ MONGO_URI not found in .env")
    exit()

try:
    client = MongoClient(
        mongo_uri,
        serverSelectionTimeoutMS=5000
    )

    client.admin.command("ping")

    print("✅ MongoDB connection successful!")

except Exception as error:
    print("❌ MongoDB connection failed")
    print(error)