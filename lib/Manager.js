// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(officeNumber){
        if (!officeNumber) {
            throw new Error("You did not add the Office Number!");
          }
        this.officeNumber=officeNumber
    }
    getRole(){
    return Manager
    }
}


module.exports = Manager