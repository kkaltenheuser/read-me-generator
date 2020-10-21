// Declaring the dependencies
//
// const fs variable
const fs = require("fs");
// const util variable
const util = require("util");
// const inquirer variable
const inquirer = require("inquirer");
// const validate user
const userExists = require("./api.js");
// const validate API
const api = require("./api.js");
// const markdown js file 
const generateMarkdown = require("./generateMarkdown.js");

// array of questions for user
const getGit = {
    // initialize set of questions  
    // questions to identify creator  
    // enter username
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
}
    const questions = [
    // title question
    {   // breakdown of components
        // note type
        type: "input",
        // note name
        name: "title",
        // note message that will be deployed
        message: "What will this project be titled?",
    },
    // project description question
    {
        type: "input",
        name: "description",
        message: "Please enter the description of your project.",
    },
    
    // begin TABLE OF CONTENTS in markdown

    // questions for installation
    {
        type: "input",
        name: "installation",
        message: "Please explain how to install the software and/or commands for the program",
    },
    // project usage
    {
        type: "input",
        name: "description",
        message: "Please explain how this project can be used.",
    },
    // generate list of options for Licensure for ReadMe
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
        ]
    },
    // question for contributing
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to this project?",
    },
    // question for tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any pertinent testing information regarding this project.",
    },
    

    // close question portion
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (error) {
        if (error) {
            return console.log(error);
        }
    }); 
}

// function to initialize program
async function init() {
    // var to hold account name
    let name;
    // var that proves github account exists
    let gitExists = false;
    // when github name is not validated
    while (!gitExists) {
        // when name provided is valid + account exists, get the Git
    const { github: account } = await inquirer.prompt(getGit)
    name = account;
        const exists = await userExists(account)
        if (exists) {
            gitExists = true;
            console.log("git exists!")
        } else {
            console.log("git don't exist, try again")
        }

}
// response
    const response = await inquirer.prompt(questions)
// write to the file
writeToFile("README.md", generateMarkdown(response, name))    
    
    
// function call to initialize program
init();
