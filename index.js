// TODO: Include packages needed for this application
const inquire = require('inquirer')
const fs = require('fs');
const { type } = require('os');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'Give some information about the repository.',
    'How do you install this program?',
    'How do you use this program?',
    'Give an example of how this works.',
    'Would you like to add a license to this project?',
    'What is you Github username?',
    'What is your email?',

];

function promptUser() {
    return inquire.prompt([
    {
        type: 'input',
        name: 'creatorName',
        message: 'What is your name?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    
    {
        type: 'input',
        name: 'ghUsername',
        message: 'What is your github Username?'
    },

    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Could you give a description of your project?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for how to use?'
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'How does someone contribute to this repo?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
            'MIT', 'Mozilla Public License 2.0', 'Do What The F*ck You Want To Public License', 'GNU General Public License c3.0'
        ]
    },

    {
        type: 'input',
        name: 'misc',
        message: ''
    },
])



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }.then((responses) => {
//     console.log(responses)
// });

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();


// needs description, table of contents, installation, usage, license, contributing, tests and questions. 