const Engineer = require ('../engineer')

describe ("Engineer", () => {
    describe ("Engineer", () => {
        it("should start the engineer card", () => {
            const obj = new Engineer()
            
            expect ("string" in obj).toEqual("string")
        })
        it("should return the GitHub username", () => {
            const obj = new Engineer(githubUsername)
            
            expect ("string" in obj).toEqual("string")
        })
        it("should retrurn the role engineer", () => {
            const obj = new Engineer()
            
            expect ("string" in obj).toEqual("string")
        })
    })
})