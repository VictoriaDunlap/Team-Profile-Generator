var inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Employee = require('./employee')
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')

const managerQuestions = () => {setTimeout
    (inquirer.prompt([
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
]))
console.log('test')
.then(optOut()), 3000}

managerQuestions()

const engineerQuestions = () => {
    inquirer.prompt([
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
]).then(optOut())}


const internQuestions = () => {
    inquirer.prompt([
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
]).then(optOut())}

const optOut = () => {
    inquirer.prompt([
    {
        type: 'checkbox',
        message: 'Add another teammate?',
        choices: ['Engineer', 'Intern', 'No more teammates'],
        name: 'optoutQuestion',
    }
]).then(({optoutQuestion}) => {
    console.log(optoutQuestion)
    switch (optoutQuestion[0]) {
        case 'Engineer':
            console.log('test')
        engineerQuestions()
        console.log('test')
        break;
        case 'Intern':
        internQuestions()
        break;
        case 'No more teammates':
            console.log("Team Created")
            writeToFile("index.html", answers)
}})}

// optOut()

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// run employee questions then 'if' manger/intern/engineer, run those questions
// function init() {
//     inquirer.prompt(managerQuestions())
//     .then((answers) => {
//         switch (answers.ManagerOptoutQuestion[0]) {
//             case 'Engineer':
//            engineerQuestions()
//             break;
//             case 'Intern':
//            internQuestions()
//             break;
//             case 'No more teammates':
//                 console.log("Team Created")
//                 writeToFile("index.html", answers)
//         }}
//     )
// }

// init()