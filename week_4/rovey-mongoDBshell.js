/**
 * Title: Rovey-mongoDBshell.js
 * Author: Amanda Rovey
 * Date: September 8 2024
 * Description: MongoDB Shell Scripts for querying the users collection.
 */

// a. Display all users in the collection
// Retrieves all documents (users) in the users collection. 
db.users.find().pretty()

// b. Display the user with the email address jbach@me.com
// Retrieves the document (user) with the specified email address.
db.users.find({ email: "jbach@me.com" }).pretty()

// c. Display the user with the last name Mozart
// Retrieves the document (user) with the specified last name.
db.users.find({ lastName: "Mozart" }).pretty()

// d. Display the user with the first name Richard
// Retrieves the document (user) with the specified first name.
db.users.find({ firstName: "Richard" }).pretty()

// e. Display the user with employeeId 1010
// Retrieves the document (user) with the specified employee ID.
// Initially, I tried running this query with employeeId as a number, but it failed to return any results.
// After changing the employeeId to a string, the query worked successfully.
db.users.find({ employeeId: "1010" }).pretty()