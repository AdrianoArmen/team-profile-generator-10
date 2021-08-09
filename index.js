// packages required for app development
const inquirer = require("inquirer");
const fs = require("fs");

// import classes from lib directory
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team array declared to get the team objects
const teamArray = [];

// build Manager by prompted questionnaire
function buildManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team manager's id?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the team manager's office number?",
    },
  ]);
}

// build Engineer by prompted questionnaire
function buildEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineer's id?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is your engineer's GitHub username?",
    },
  ]);
}

// build Inter by promped questionnaire
function buildIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?",
    },
    {
      type: "input",
      name: "internId",
      message: "What is your intern's id?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is your intern's school?",
    },
  ]);
}

// build new Member by list prompt
function buildMember() {
  inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Which type of team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "My team is complete!",
      ],
    },
  ]);
}
