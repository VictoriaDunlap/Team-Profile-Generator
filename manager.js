const Employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber){
       const office = officeNumber

        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }
}



module.exports = Manager