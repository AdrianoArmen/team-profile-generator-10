// Employee parent class - constructor

class Employee {
  // props required
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //   methods required
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
