const Employee = require('./employee')


class Engineer extends Employee {
    constructor(githubUsername, name, id, email){
       const username = githubUsername

        super(name, id, email)
        this.name = name
        this.id = id
        this.email = email
        this.githubUsername = githubUsername
    }

    getGithub(githubUsername) {
        return githubUsername
    }

    getRole() {
        return 'Engineer'
    }
}



module.exports = Engineer