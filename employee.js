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

module.exports = Employee