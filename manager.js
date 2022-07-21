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

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team manager name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is the team manager id?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is the team manager email?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is the team manager office number?',
        name: 'managerOffice',
    }
]

module.exports = Manager