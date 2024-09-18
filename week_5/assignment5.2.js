// Adding a new user
db.users.insertOne({
  firstName: "Antonio",
  lastName: "Vivaldi",
  employeeId: "1013",
  email: "avivaldi@me.com",
  dateCreated: new Date()
})

// Verifying the new user was added
db.users.find({ email: "avivaldi@me.com" })

// Updating Mozart's email address
db.users.updateOne(
  { firstName: "Wolfgang", lastName: "Mozart" },
  { $set: { email: "mozart@me.com" } }
)

// Verifying the update
db.users.find({ firstName: "Wolfgang", lastName: "Mozart" })

// Updating Mozart's email address
db.users.updateOne(
  { firstName: "Wolfgang", lastName: "Mozart" },
  { $set: { email: "mozart@me.com" } }
)

// Verifying the update
db.users.find({ firstName: "Wolfgang", lastName: "Mozart" })

// Displaying all users with projections
db.users.find({}, { _id: 0, firstName: 1, lastName: 1, email: 1 })

