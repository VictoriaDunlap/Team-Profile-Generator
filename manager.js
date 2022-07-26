const Employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber){
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