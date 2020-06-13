const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({ firstName: "Daniel", lastName: "Lee", email: "daniellee@example.com", gpa: 3.5, campusId: 1 }),
    Student.create({ firstName: "John", lastName: "Doe", email: "johndoe@example.com", gpa: 3.2, campusId: 1 }),
    Student.create({ firstName: "Tony", lastName: "Parker", email: "tonyparker@example.com", gpa: 3.6, campusId: 2 }),
    Student.create({ firstName: "Megan", lastName: "White", email: "meganwhite@example.com", gpa: 3.6, campusId: 2 }),
    Student.create({ firstName: "Carter", lastName: "James", email: "carterjames@example.com", gpa: 4.0, campusId: 3 }),
  ]);
};

module.exports = seedDatabase;
