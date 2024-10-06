/**
 * Title: whatabook_installationscript.js
 * Author: BSON Builders
 * Date: 09.30.2024
 * Description: MongoDB Shell Installation Scripts for the WhatABook database.
 */

/**
 * Database and Collection clean-up.
 */
db.dropDatabase();
db.books.drop();
db.users.drop();
db.authors.drop();

/**
 * Create Book documents.
 */
const book1 = {
  "_id": ObjectId("book_id_1"),
  "title": "The Enchanted Forest",
  "genre": "Fantasy",
  "author_id": ObjectId("author_id_1")
};

const book2 = {
  "_id": ObjectId("book_id_2"),
  "title": "Mysteries of the Deep",
  "genre": "Adventure",
  "author_id": ObjectId("author_id_2")
};

/**
 * Create User documents.
 */
const user1 = {
  "_id": ObjectId("user_id_1"),
  "firstName": "Luna",
  "lastName": "Starlight",
  "email": "luna.starlight@example.com",
  "orders": [
    {
      "order_id": ObjectId(),
      "orderDate": ISODate("2024-09-29T00:00:00Z"),
      "orderDetails": [
        {
          "book_id": book1._id,
          "quantity": 1,
          "price": 15.99
        }
      ]
    }
  ]
};

const user2 = {
  "_id": ObjectId("user_id_2"),
  "firstName": "Orion",
  "lastName": "Skywalker",
  "email": "orion.skywalker@example.com",
  "orders": [
    {
      "order_id": ObjectId(),
      "orderDate": ISODate("2024-09-29T00:00:00Z"),
      "orderDetails": [
        {
          "book_id": book2._id,
          "quantity": 2,
          "price": 12.99
        }
      ]
    }
  ]
};

/**
 * Create Author documents.
 */
const author1 = {
  "_id": ObjectId("author_id_1"),
  "firstName": "Elara",
  "lastName": "Moonshadow"
};

const author2 = {
  "_id": ObjectId("author_id_2"),
  "firstName": "Drake",
  "lastName": "Stormrider"
};

/**
 * Insert the newly created documents.
 */
db.books.insertMany([book1, book2]);
db.users.insertMany([user1, user2]);
db.authors.insertMany([author1, author2]);

