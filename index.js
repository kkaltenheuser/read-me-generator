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
        
    // necessary to validate that user entered at least one phrase

    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a GitHub username.");
        }
        return true;
    }
},
    const questions = [
    // title question
    {   // breakdown of components
        // note type
        type: "input",
        // note name
        name: "title",
        // note message that will be deployed
            message: "What will this project be titled?",
        
        // validate that user entered at least one phrase for a title
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter the title of your GitHub repository.");
                }
                return true;
            }
    },
    // project description question
    {
        type: "input",
        name: "description",
        message: "Please enter the description of your project.",

        // We need to validate that user entered at least one word
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description for your project.");
            }
            return true;
        }
    },
    
    // begin TABLE OF CONTENTS in markdown

    // questions for installation
    {
        type: "input",
        name: "installation",
        message: "Please explain how to install the software and/or commands for the program"
            // Validation not required if question is optional
        },
    // project usage
    {
        type: "input",
        name: "description",
        message: "Please explain how this project can be used."
        },
    // questions for credit
        {
            type: "input",
            name: "credits",
            message: "Please enter credits"
        },
        // question for tests
        {
            type: "input",
            name: "tests",
            message: "Please enter any pertinent testing information regarding this project."
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


    

    // close question portion
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log ("Your markdown file has been generated")
    }); 
}

// function to initialize program
async function init() {
    try {
        // Reference inquirer array with prompt
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Your responses have been logged...");

        // Referencing API.js
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);

        // Pass inquirer + api data to markdown
        console.log("Generating markdown")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        // Write markdown
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// function call to initialize program
init();