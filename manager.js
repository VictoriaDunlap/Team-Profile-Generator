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
    getOfficeNumber(officeNumber){
        return officeNumber
    }
    getRole() {
        return 'Manager'
    }
}



module.exports = Manager