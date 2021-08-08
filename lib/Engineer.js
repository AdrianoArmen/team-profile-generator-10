// Engineer class extended from Employee class - constructor

const Employee = require("./Employee");

class Engineer extends Employee {
  // props required
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // methods required
  getGithub() {
    return this.github;
  }
  
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
