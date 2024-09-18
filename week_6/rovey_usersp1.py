"""
Title: rovey_usersp1.py
Author: Amanda Rovey
Date: 9/17/2024
Description: Hands-On 4.2: Python with MongoDB, Part I
"""
# Import the MongoClient
from pymongo import MongoClient

# Build a connection string to connect to
client = MongoClient("mongodb+srv://web335_user:1234@bellevueuniversity.pkdho.mongodb.net/web335DB?retryWrites=true&w=majority&appName=BellevueUniversity")

# Print the client to verify connection
print(client)

# Configure a variable to access the web335DB
db = client['web335DB']

# Call the find function to display all of the users in the collection
for user in db.users.find({}, {"firstName": 1, "lastName": 1}):
    print(user)

# Call the find_one function to display a user document by employeeId
print(db.users.find_one({"employeeId": "1011"}))

# Call the find_one function to display a user document by lastName
print(db.users.find_one({"lastName": "Mozart"}))

