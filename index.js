const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require("./src/generateHTML")
const team = [];

const init = () => {
    console.log("\x1b[36m", "Welcome to the Team Profile Generator! Please answer the following questions to build your team.")
    managerPrompt();
}

const managerPrompt = () => {
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
        team.push(manager);
        addNew();
    });
}

function addNew() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addNew',
            message: 'Please choose which team member you wish to add.',
            choices: ['Engineer', 'Intern', 'I am done adding team members.']
        },
    ])
    .then(function ({ addNew }) {
        if(addNew === "Engineer"){
            return engineerPrompts();
        } else if (addNew === "Intern") {
            return internPrompts();
        } else {
            fs.writeFile('./dist/index.html', generateHTML(team), function(error) {
                console.log("Sucessfully generated index.html in the dist folder!")
                if (error) {
                    console.log(error);
                }
            })
        }
    });
}

const engineerPrompts = () => {
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
        team.push(engineer);
        addNew();
    })
}

const internPrompts = () => {
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
        team.push(intern);
        addNew();
    })
}

init();