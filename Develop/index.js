//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input to generate readme file
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your Github username?"
    },
    {
        type: "input",
        name: "github",
        message: "Enter GitHub link to your project?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["APACHE2.0", "ms-pl", "MIT", "zlib", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What commands do I need to run for the test?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the usage of this repo?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?",
    }

];
      

//Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('./README.md', data, function(err) {
        if (err) {
         throw err;
        }
        console.log('File created');
    })
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
       let markdown = generateMarkdown(answers);
       console.log(markdown)
        writeToFile('./README.md',markdown);
    })
}

// Function call to initialize app
init();
