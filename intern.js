const Employee = require('./employee')


class Intern extends Employee {
    constructor(school, name, id, email){
       const university = school

        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        this.school = school
    }

    getSchool(school) {
        return school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern