// Employee parent class - constructor

class Employee {
  constructor(name, id, email) {
    // props required
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
