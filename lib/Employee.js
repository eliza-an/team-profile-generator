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


class Engineer extends Employee{
     constructor(github){
        if (!github) {
            throw new Error("You did not add the github!");
          }
        this.github=github
     }

     getGithub(){
       return this.github
     }

     getRole(){
        return Engineer
     }

}

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
