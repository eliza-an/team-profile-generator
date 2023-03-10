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
    return ([
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
    

console.log('here')



//prompts for team engineer
    function addEngineer() {
        return ([
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
    return ([
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


let EmployeeObjects=[]

async function ask(){
   await inquirer.prompt(teamManager()).then((response)=>{
        let Mname=response.ManagerName
        let Mid=response.managersEmployeeID
        let Memail=response.managersEmail
        let MofficeNumber=response.managersOfficeNumber
    const manager= new Manager(Mname,Mid,Memail,MofficeNumber)
    EmployeeObjects.push(manager)
    
    if (response.InternOrEngineer==='Add an Engineer'){
        addEngineer()
    }else if(response.InternOrEngineer==='Add an intern'){
        addIntern()
    }
    })

   await inquirer.prompt(addEngineer()).then((response)=>{
        let Ename=response.EngineerName
        let Eid=response.EngineerEmployeeID
        let Eemail=response.EngineerEmail
        let EGithub=response.EngineerGithub
        const engineer= new Engineer(Ename,Eid,Eemail,EGithub)
        EmployeeObjects.push(engineer)
        if (response.InternOrEngineer==='Add an Engineer'){
            addEngineer()
        }else if(response.InternOrEngineer==='Add an intern'){
            addIntern()
        }
        })    

    await inquirer.prompt(addIntern()).then((response)=>{
        let Iname=response.InternName
        let Iid=response.InternEmployeeID
        let Iemail=response.InternEmail
        let ISchool=response.InternSchool 
        const intern= new Intern(Iname,Iid,Iemail,ISchool)
        EmployeeObjects.push(intern)
        if (response.InternOrEngineer==='Add an Engineer'){
            addEngineer()
        }else if(response.InternOrEngineer==='Add an intern'){
            addIntern()
        }
        })
      
        
 console.log(render(EmployeeObjects))

       

}
  ask()    

//render(EmployeeObjects)
console.log(EmployeeObjects)