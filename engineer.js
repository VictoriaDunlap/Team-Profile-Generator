const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path ')

class Engineer extends Employee {
    constructor(githubUsername){
       const github = githubUsername

        super(name, id, email)
        this.githubUsername = githubUsername
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