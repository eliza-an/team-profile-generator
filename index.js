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
          name: "managerName",
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
          {
            type: 'list',
            name: 'InternOrEngineer',
            message: 'Would you like to add an engineer, add an intern or finish building the team?',
            choices: ['Add an Engineer', 'Add an intern', 'Finish']
          },
      ]) 
    }

teamManager().then((response)=>{
    let name=response.ManagerName
    let id=response.managersEmployeeID
    let email=respone.managersEmail
    let officeNumber=response.managersOfficeNumber
    
if (response.InternOrEngineer==='Add an Engineer'){
    addEngineer()
}else if(response.InternOrEngineer==='Add an intern'){
    addIntern()
}
})




//prompts for team engineer
    function addEngineer() {
        return inquirer
        .prompt([
            {
              type: "input",
              name: "EngineerName",
              message: "Please enter Engineer's name",
    
    
              // The users input must be letters
              validate: val => /[a-z]/gi.test(val),          
            },
            {
                type: "input",
                name: "EngineerEmployeeID",
                message: "Please enter Engineer's  Employee ID",
      
      
                // The users input must be letters
                validate: val => /[a-z1-9]/gi.test(val),          
              },
              {
                type: "input",
                name: "EngineerEmail",
                message: "Please enter Engineer's Email",
      
              },
              {
                type: "input",
                name: "EngineerGithub",
                message: "Please enter Engineer's Github Username",
      
              },
              
          ]) 
        }


     


//prompts for intern
function addIntern() {
    return inquirer
    .prompt([
        {
          type: "input",
          name: "InternName",
          message: "Please enter Intern's name",


          // The users input must be letters
          validate: val => /[a-z]/gi.test(val),          
        },
        {
            type: "input",
            name: "InternEmployeeID",
            message: "Please enter Intern's  Employee ID",
  
  
            // The users input must be letters
            validate: val => /[a-z1-9]/gi.test(val),          
          },
          {
            type: "input",
            name: "InternEmail",
            message: "Please enter Intern's Email",
  
          },
          {
            type: "input",
            name: "InternSchool",
            message: "Please enter Intern's School",
  
          },
         
      ]) 
    }



let EmployeeObjects=[addIntern.response, teamManager.response, addEngineer.response]

//render(EmployeeObjects)
console.log(EmployeeObjects)