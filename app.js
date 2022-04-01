const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateSite = require("./src/generate-site.js");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
            console.log('Please enter your name');
            return false:
          }
      }  
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Enter your employee ID number (Required)',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter your employee ID number');
                return false:
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false:
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number (Required)',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter your office number');
                return false:
            }
        }
    },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        prompt.Menu();
    })
};

const promptMenu = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message:'Please select the most relevant option:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                    case "add an intern":
                        promptIntern();
                        break;
                        default:
                            buildTeam();
            }
        });
    
};


