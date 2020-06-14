const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
  gpa: {
    type: Sequelize.DECIMAL(3,2),
    min: 0.00,
    max: 4.00,
  },
  campusId: { type: Sequelize.INTEGER, allowNull: true },
});

module.exports = Student;
