// packages required for app development
const inquirer = require("inquirer");
const fs = require("fs");

// import classes from lib directory
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team array declared to get the team objects
const teamArray = [];

