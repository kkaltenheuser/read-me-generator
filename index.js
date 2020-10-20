// Declaring the dependencies
// const fs variable
const fs = require("fs");
const util = require("util");
// inquirer is stored in node_modules via dev dependencies to save space and easier access for future users
const inquirer = require("inquirer");
// markdown js file 
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");
// creates a series of asynchronous actions to allow the user to move fluidly in their input
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    // initialize set of questions  
    // title question
    {   // breakdown of components
        // note type
        type: "input",
        // note name
        name: "title",
        // note message that will be deployed
        message: "What will this project be titled?",
        // note what will be submitted to those who input data to be entered
        validate: validateInput,
    },
    // project description question
    {
        type: "input",
        name: "description",
        message: "Please enter the description of your project.",
        validate: validateInput,
    },
    
    // begin TABLE OF CONTENTS in markdown

    // questions for installation
    {
        type: "input",
        name: "installation",
        message: "Please explain how to install the software and/or commands for the program",
        validate: validateInput,
    },
    // project usage
    {
        type: "input",
        name: "description",
        message: "Please explain how this project can be used.",
        validate: validateInput,
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
            "Open"
        ]
        validate: validateInput,
    },
    // question for contributing
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to this project?",
        validate: validateInput,
    },
    // question for tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any pertinent testing information regarding this project.",
        validate: validateInput,
    },
    // questions to identify creator  
    // enter username

    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: validateInput,
    },

    // enter email associated with GitHub
    {
        type: "input",
        name: "email",
        message: "Please enter your email:",
        validate: validateInput,
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
function init() {
 

}

// function call to initialize program
init();
