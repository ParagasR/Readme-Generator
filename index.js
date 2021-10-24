// TODO: Include packages needed for this application 
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const genMkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = ['Provide the Title of the project: ', 'Provide a short description of the project: ', 'Provide a way to install this project', 
'Provide information for this project`s usage: ', 'Provide a list of people who have contributed to this project (Seperate each person with a line): ',
'Provide instructions on how to test this project: ', 'Select a license: ', 'Enter your github username for further questions: ', 'Provide an email so that you can be contacted for questions: '];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = genMkdown.generateMarkdown(data);
    fs.writeFile(fileName, content, (err) => err ? console.error(err) : console.log('Readme Generated'))
}

// TODO: Create a function to initialize app
function init(title, description, installation, usage, contributors, test, license, github, email) {
    inquirer.prompt ([
        {
            type: 'input',
            message: title,
            name: 'title',
        },
        {
            type: 'editor',
            message: description,
            name: 'description',
        },
        {
            type: 'editor',
            message: installation,
            name: 'installation',
        },
        {
            type: 'editor',
            message: usage,
            name: 'usage',
        },
        {
            type: 'editor',
            message: contributors,
            name: 'contributors',
        },
        {
            type: 'editor',
            message: test,
            name: 'test',
        },
        {
            type: 'list',
            message: license,
            name: 'license',
            choices: ['GPLv3', 'Mozilla', 'MIT', 'N/A'],
        },
        {
            type: 'input',
            message: github,
            name: 'github',
        },
        {
            type: 'email',
            message: email,
            name: 'email',
        },
    ])
    .then((data) => {
        writeToFile('README.md', data);
    })
}

// Function call to initialize app
init(...questions);