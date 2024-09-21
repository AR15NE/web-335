// a. Display all students
db.students.find().pretty()

// b. Add a new student
newStudent = {
  "firstName": "Harry",
  "lastName": "Potter",
  "studentId": "s1019",
  "houseId": "h1007"
}
db.students.insertOne(newStudent)

// Verify the new student was added successfully
db.students.find({ "studentId": "s1019" }).pretty()

// c.Update the last name of the new student
db.students.updateOne(
  { "studentId": "s1019" },
  { $set: { "lastName": "Weasley" } }
)

// Verify the property was updated successfully
db.students.find({ "studentId": "s1019" }).pretty()

// d. Delete the new student
db.students.deleteOne({ "studentId": "s1019" })

// Verify the student was removed successfully
db.students.find({ "studentId": "s1019" }).pretty()

// e. Display all students by house
db.houses.aggregate([
  {
      $lookup: {
          from: "students",
          localField: "houseId",
          foreignField: "houseId",
          as: "students"
      }
  },
  {
      $project: {
          _id: 0,
          house: "$houseId",
          students: "$students"
      }
  }
]).pretty()


// f. Display all students in house Gryffindor
db.houses.aggregate([
  {
      $match: { "houseId": "h1007" }
  },
  {
      $lookup: {
          from: "students",
          localField: "houseId",
          foreignField: "houseId",
          as: "students"
      }
  },
  {
      $project: {
          _id: 0,
          house: "$houseId",
          students: "$students"
      }
  }
]).pretty()

// g. Display all students in the house with an Eagle mascot
db.houses.aggregate([
  {
      $match: { "mascot": "Eagle" }
  },
  {
      $lookup: {
          from: "students",
          localField: "houseId",
          foreignField: "houseId",
          as: "students"
      }
  },
  {
      $project: {
          _id: 0,
          house: "$houseId",
          students: "$students"
      }
  }
]).pretty()
