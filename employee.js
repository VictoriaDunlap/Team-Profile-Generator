class Employee {
    constructor(name, id, email){
    this.employeeName = name
    this.employeeId = id 
    this.employeeEmail = email
    }

    getName()

    getId() 

    getEmail() 

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee