const Employee = require ('../employee')

describe ("Employee", () => {
    describe ("Employee", () => {
        it("should return the name input by the user", () => {
            const obj = new Employee(name)
            
            expect ("string" in obj).toEqual("string")
        })
        it("should return the id input by the user", () => {
            const obj = new Employee(id)
            
            expect ("string" in obj).toEqual("string")
        })
        it("should return the email input by the user", () => {
            const obj = new Employee(email)
            
            expect ("string" in obj).toEqual("string")
        })
        it("should return the role input by the user", () => {
            const obj = new Employee()
            
            expect ("string" in obj).toEqual("string")
        })
    })
})