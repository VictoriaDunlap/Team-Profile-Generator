class Employee {
    constructor(name, id, email){
    this.employeeName = name
    this.employeeId = id 
    this.employeeEmail = email
    }
   
    getName(name) {
        return name 
    }

    getId(id) {
        return id
    }

    getEmail(email) {
        return email
    }

    getRole() {
        return 'Employee'
    }
}

const employeeQuestion = [
    {
        type: 'checkbox',
        message: 'Pick a teammate',
        choices: ['Engineer', 'Intern', 'No more teammates'],
        name: 'employeeQuestion',
    },
]

module.exports = Employee