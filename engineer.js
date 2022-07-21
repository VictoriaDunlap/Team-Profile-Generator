const Employee = require('./employee')


class Engineer extends Employee {
    constructor(githubUsername){
       const github = githubUsername

        super(name, id, email)
        this.githubUsername = githubUsername
    }

    getGithub()

    getRole() {
        return 'Engineer'
    }
}

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the team engineer name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'What is the team engineer id?',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'What is the team engineer email?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'What is the team engineer GitHub username?',
        name: 'engineerGithub',
    }
]

module.exports = Engineer