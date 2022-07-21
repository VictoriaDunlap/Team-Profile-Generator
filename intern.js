const Employee = require('./employee')


class Intern extends Employee {
    constructor(school){
       const university = school

        super(name, id, email)
        this.school = school
    }

    getSchool()

    getRole() {
        return 'Intern'
    }
}

const internQuestions = [
    {
        type: 'input',
        message: 'What is the team intern name?',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'What is the team intern id?',
        name: 'internId',
    },
    {
        type: 'input',
        message: 'What is the team intern email?',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'What is the team intern school?',
        name: 'internSchool',
    }
]

module.exports = Intern