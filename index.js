





function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Success")
        const mark = imports(answers)
        writeToFile("ReadMe.md", mark)
    })
}