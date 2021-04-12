// const Handlebars = require("handlebars");
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'teamName',
            message: "Please enter your team's name."
        },
        {
            type: 'input',
            name: 'manager',
            message: "Please enter the team manager's name."
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's employee ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email address."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the team manager's office number."
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
        fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html in the dist folder!')
        );
    });
