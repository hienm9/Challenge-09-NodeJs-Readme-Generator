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
        name: "github",
        message: "Enter GitHub link to your project"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project: "
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
        name: "usage",
        message: "What does the usage of this repo?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?",
    }

];
      
let path = './distribution/README.md';
//Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(path, data, function(err) {
        if (err) {
         throw err;
        }
        console.log('File created successfully! in ' + path);
    })
}

//Create a function to initialize app
function init() {
    // let path = './distribution/README.md';
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
       let markdown = generateMarkdown(answers);
       console.log(markdown)
        writeToFile(path,markdown);
        
    })
}

// Function call to initialize app
init();
