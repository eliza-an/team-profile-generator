// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        if (!name) {
            throw new Error("You did not type a name!");
          }
          if (!id) {
            throw new Error("You did not add the ID!");
          }
          if (!email) {
            throw new Error("You did not add the email!");
          }
        this.name=name
        this.id=id
        this.email=email
    }
    getName(){
       return this.name
    }

    getId(){
       return this.id
    }

    getEmail(){
       return this.email
    }

    getRole(){
    return Employee
    }

}

module.exports = Employee;