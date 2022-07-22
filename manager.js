const Employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber){
       const officeNumber = officeNumber

        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }
}



module.exports = Manager