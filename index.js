const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path ')
const Employee = require('./employee')
const Manager = require('./manager')
const Engineer = require('./engineer')
const Intern = require('./intern')




function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Success")
        writeToFile("index.html")
    })
}