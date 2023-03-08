const Employee= require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
function teamManager() {
    return inquirer
    .prompt([
        {
          type: "input",
          name: "mamagerName",
          message: "Please enter Team Manager's name",


          // The users input must be letters
          validate: val => /[a-z]/gi.test(val),          
        },
        {
            type: "input",
            name: "managersEmployeeID",
            message: "Please enter Team Manager's  Employee ID",
  
  
            // The users input must be letters
            validate: val => /[a-z1-9]/gi.test(val),          
          },
          {
            type: "input",
            name: "managersEmail",
            message: "Please enter Team Manager's Email",
  
          },
          {
            type: "input",
            name: "managersOfficeNumber",
            message: "Please enter Team Manager's Office Number",
  
          },
      ]) .then
    }

    
//prompts for 
    function teamManager() {
        return inquirer
        .prompt([
            {
              type: "input",
              name: "mamagerName",
              message: "Please enter Team Manager's name",
    
    
              // The users input must be letters
              validate: val => /[a-z]/gi.test(val),          
            },
            {
                type: "input",
                name: "managersEmployeeID",
                message: "Please enter Team Manager's  Employee ID",
      
      
                // The users input must be letters
                validate: val => /[a-z1-9]/gi.test(val),          
              },
              {
                type: "input",
                name: "managersEmail",
                message: "Please enter Team Manager's Email",
      
              },
              {
                type: "input",
                name: "managersOfficeNumber",
                message: "Please enter Team Manager's Office Number",
      
              },
          ]) 
        }
    teamManager()
