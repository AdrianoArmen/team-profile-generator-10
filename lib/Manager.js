// Manager class extended from Employee class - constructor

const Employee = require("./Employee");

class Manager extends Employee {
  // props required
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // methods required
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
