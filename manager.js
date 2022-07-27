const Employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber, name, id, email){
       const office = officeNumber

        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}



module.exports = Manager