const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path ')

class Employee {
    constructor(name, id, email){
    this.employeeName = name
    this.employeeId = id 
    this.employeeEmail = email
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {
        // returns 'Employee'
    }
}






module.exports = Employee