// Intern class extended from Employee class - constructor

const Employee = require("./Employee");

class Intern extends Employee {
  // props required
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  //   methods required
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
