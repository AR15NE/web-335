"""
Title: rovey_usersp2.py
Author: Amanda Rovey
Date: 9/27/2024
Description: Hands-On 5.2: Python with MongoDB, Part II
"""

# Import the MongoClient class from pymongo to interact with MongoDB
from pymongo import MongoClient
import datetime

# Establish a connection to the MongoDB server using the connection string
client = MongoClient("mongodb+srv://web335_user:1234@bellevueuniversity.pkdho.mongodb.net/web335DB?retryWrites=true&w=majority&appName=BellevueUniversity")

# Access the web335DB database
db = client['web335DB']

# Create a new user document with the specified fields
new_user = {
    "firstName": "John",
    "lastName": "Doe",
    "employeeId": "1020",
    "email": "johndoe@example.com",
    "dateCreated": datetime.datetime.utcnow()
}

# Insert the new user document into the users collection and store the inserted ID
new_user_id = db.users.insert_one(new_user).inserted_id
print(f"New user created with ID: {new_user_id}")

# Retrieve and print the newly created user document to verify the insertion
print("Document created:", db.users.find_one({"employeeId": "1020"}))

# Update the email address of the newly created user document
db.users.update_one(
    {"employeeId": "1020"},
    {
        "$set": {
            "email": "john.doe@newexample.com"
        }
    }
)

# Retrieve and print the updated user document to verify the update
print("Document updated:", db.users.find_one({"employeeId": "1020"}))

# Delete the newly created user document from the users collection
result = db.users.delete_one({"employeeId": "1020"})

# Attempt to retrieve and print the deleted user document to verify the deletion
print("Document deleted:", db.users.find_one({"employeeId": "1020"}))