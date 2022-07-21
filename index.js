var inquirer = require('inquirer')
const fs = require('fs')
// const path = require('path ')
const Employee = require('./employee')
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')

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
    },
    {
        type: 'checkbox',
        message: 'Add another teammate?',
        choices: ['Engineer', 'Intern', 'No more teammates'],
        name: 'ManagerOptoutQuestion',
    }
]

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
    },
    {
        type: 'checkbox',
        message: 'Add another teammate?',
        choices: ['Engineer', 'Intern', 'No more teammates'],
        name: 'engineerOptoutQuestion',
    }
]

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
    },
    {
        type: 'checkbox',
        message: 'Add another teammate?',
        choices: ['Engineer', 'Intern', 'No more teammates'],
        name: 'internOptoutQuestion',
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// run employee questions then 'if' manger/intern/engineer, run those questions
function init() {
    inquirer.prompt(managerQuestions)
    .then((ManagerOptoutQuestion, engineerOptoutQuestion, internOptoutQuestion) => {
        switch (ManagerOptoutQuestion || engineerOptoutQuestion || internOptoutQuestion) {
            case 'Engineer':
            inquirer.prompt(engineerQuestions)
            case 'Intern':
            inquirer.prompt(internQuestions)
            case 'No more teammates':
                console.log("Team Created")
        }
    writeToFile("index.html")
    })
}

init()