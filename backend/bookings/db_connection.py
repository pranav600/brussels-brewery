import os
from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

# Load environment variables from .env file
load_dotenv()
# Read connection URI from env or use default localhost
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")

db = None
bookings_collection = None

try:
    client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=2000)
    # Trigger a connection check
    client.admin.command('ping')
    db = client["cafe_bookings"]
    bookings_collection = db["bookings"]
    print("====================================================")
    print("MongoDB Connection Successful!")
    print(f"Database: 'cafe_bookings', Collection: 'bookings'")
    print("====================================================")
except (ConnectionFailure, Exception) as e:
    print("====================================================")
    print("WARNING: Failed to connect to MongoDB server.")
    print(f"Details: {e}")
    print("Please make sure MongoDB is running locally.")
    print("Fallbacks will insert into in-memory array for demo.")
    print("====================================================")
    
    # Simple fallback in-memory mock storage
    class MockCollection:
        def __init__(self):
            self.data = []
            
        def insert_one(self, document):
            self.data.append(document)
            print(f"[Mock MongoDB Store] Document added: {document}")
            return type('obj', (object,), {'inserted_id': 'mock-id-123'})()
            
    bookings_collection = MockCollection()
