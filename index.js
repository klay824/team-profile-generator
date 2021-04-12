// const Handlebars = require("handlebars");
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employees = [];

function init() {
    managerPrompt();
}

function managerPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the manager.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID for the manager.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address for the manager.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the office number for the manager.'
        },
    ])
    .then(function ({ name, id, email, officeNumber }) {
        let manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        addNew();
    });
}

function addNew() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addNew',
            message: 'Please choose which employee you wish to add.',
            choices: ['Engineer', 'Intern', 'I am done adding employees.']
        },
    ])
    .then(function ({ addNew }) {
        if(addNew === "Engineer"){
            return engineerPrompts();
        } else if (addNew === "Intern") {
            return internPrompts();
        } else {
            fs.writeFile('./dist/index.html', html, function(error) {
                if (error) {
                    console.log(error);
                }
            })
        }
    });
}

function engineerPrompts() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of your engineer.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID of the engineer.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address for the engineer.'
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Please enter the GitHub username for the engineer.'
        },
    ])
    .then(function ({ name, id, email, GitHub }) {
        let engineer = new Engineer(name, id, email, GitHub);
        employees.push(engineer);
        addNew();
    })
}

function internPrompts() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the intern.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID of the intern.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the intern.'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school of the intern.'
        },
    ])
    .then(function ({ name, id, email, school }) {
        let intern = new Intern(name, id, email, school);
        employees.push(intern);
        addNew();
    })
}

init();