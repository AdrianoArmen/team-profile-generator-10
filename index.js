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
    inquirer.prompt([
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
    ]);
  }

  // build new Member by list prompt
  function buildMember() {
    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Select new team member profile:",
        choices: ["Engineer", "Intern", "My team is complete!"],
      },
    ]);
  }

  // build Engineer by prompted questionnaire
  function buildEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Engineer's name:",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Engineer's id:",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Engineer's email:",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Engineer's GitHub username:",
      },
    ]);
  }

  // build Inter by promped questionnaire
  function buildIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Intern's name:",
      },
      {
        type: "input",
        name: "internId",
        message: "Intern's id:",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Intern's email:",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Intern's school:",
      },
    ]);
  }

  buildManager();
}

generatorDisplay();
