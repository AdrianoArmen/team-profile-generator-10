// packages required for app development
const inquirer = require("inquirer");
const fs = require("fs");

// import classes from lib directory
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team array declared to get the team objects
const teamArray = [];
// id array to store and match members id info
const idArray = [];

// grouped build member functions into display questionnaire function
function generatorDisplay() {
  // build Manager by prompted questionnaire
  function buildManager() {
    console.log("Manage your team");
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Manager's name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Manager's name is required!";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "Manager's ID:",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Manager's ID must be a positive interger!";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Manager's email:",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Enter a valid email address!";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "Manager's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Manager's office number musrt be a positive interger!";
          },
        },
        // promise return to use entered data into constructor
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        idArray.push(answers.managerId);
        buildMember();
      });
  }

  // build new Member by list prompt
  function buildMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberProfile",
          message: "Select new team member profile:",
          choices: ["Engineer", "Intern", "My team is complete!"],
        },
      ])
      //   switch cases to generate new member with promise return
      .then((selectedMember) => {
        switch (selectedMember.memberProfile) {
          case "Engineer":
            buildEngineer();
            break;
          case "Intern":
            buildIntern();
            break;
          default:
            teamBuilder();
        }
      });
  }

  // build Engineer by prompted questionnaire
  function buildEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "Engineer's name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Engineer's name is required!";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "Engineer's id:",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              //   check if ID number is already on array
              if (idArray.includes(answer)) {
                return "ID previously taken - Enter a new ID number";
              } else {
                return true;
              }
            }
            return "Engineer's ID must be a positive interger!";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Engineer's email:",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Enter a valid email address!";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Engineer's GitHub username:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Engineer's GitHub username is required!";
          },
        },
        // promise return to push new engineer into team array with answers
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        idArray.push(answers.engineerId);
        buildMember();
      });
  }

  // build Intern by promped questionnaire
  function buildIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "Intern's name:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Intern's name is required!";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "Intern's id:",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              //   validate for unique ID number
              if (idArray.includes(answer)) {
                return "ID previously taken - Enter a new ID number";
              } else {
                return true;
              }
            }
            return "Intern's ID must be a positive interger!";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "Intern's email:",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Enter a valid email address!";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "Intern's school:",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Intern's school is required!";
          },
        },
        //   promise return to push new intern into team array with input answers
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        idArray.push(answers.internId);
        buildMember();
      });
  }

  function teamBuilder() {}

  buildManager();
}

generatorDisplay();
