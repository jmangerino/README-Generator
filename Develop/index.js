// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the contribtion guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter test information for your project',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Please pick a license for your project',
        name: license,
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL",
            "BSD-3-Clause"
        ]
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    fs.writeFile(fileName, markdown, err => {
        if (err) {
            return console.log(err);
        }
        console.log('success')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(data){
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
