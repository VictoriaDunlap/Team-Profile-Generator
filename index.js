var inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Employee = require('./employee')
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')
const allEmployee = []


const managerQuestions = () => {
    inquirer.prompt([
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
])
.then((answers) => {
    const managerAnswers = new Manager(allEmployee.push(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice))
        optOut()
})
}

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
]).then((answers) => {
    const engineerAnswers = new Engineer(allEmployee.push(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub))
        optOut()
    
})
}


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
]).then((answers) => {
    const internAnswers = new Intern(allEmployee.push(answers.internName, answers.internId, answers.internEmail, answers.internSchool))
        optOut()
})
}

const optOut = () => {
    inquirer.prompt([
    {
        type: 'list',
        message: 'Add another teammate?',
        choices: ['Engineer', 'Intern', 'No more teammates'],
        name: 'optoutQuestion',
    }
]).then(({optoutQuestion}) => {
    console.log(optoutQuestion)
    switch (optoutQuestion) {
        case 'Engineer':
        engineerQuestions()
        break;
        case 'Intern':
        internQuestions()
        break;
        case 'No more teammates':
            console.log('Team created')
           
            writeToFile("index.html", JSON.stringify(allEmployee))
           
        }}
    )
}



function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}