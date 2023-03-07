// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school){
        if (!school) {
            throw new Error("You did not add the School!");
          }
        this.school=school
    }
    getSchool(){
        return this.school
    }

    getRole(){
        return Intern
    }
}

module.exports = Intern