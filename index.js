// const Handlebars = require("handlebars");
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
        {
            type: 'confirm',
            name: 'nextEmployee',
            message: "Do you want to add more employees?",
        },
    ])
    .then((answers) => {
        if (answers.nextEmployee) {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'addNew',
                        choices: ['Engineer', "Intern"]
                    },
                ])
                .then((answers) => {
                    if (answers.addNew === "Engineer") {
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'engineer',
                                    message: "Please enter the engineer's name.",
                                },
                                {
                                    type: 'input',
                                    name: 'id',
                                    message: "Please enter the engineer's employee ID."
                                },
                                {
                                    type: 'input',
                                    name: 'email',
                                    message: "Please enter the engineer's email address.",
                                },
                                {
                                    type: 'input',
                                    name: 'GitHub',
                                    message: "Please enter the Engineer's GitHub username.",
                                },
                                {
                                    type: 'confirm',
                                    name: 'nextEmployee',
                                    message: "Do you want to add more employees?",
                                },
                            ])
                            .then((answers) => {
                                const htmlPageContent = generateHTML(answers);
                                fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                                    err ? console.log(err) : console.log('Successfully created index.html in the dist folder!')
                                );
                            })
                    } else if (answers.addNew === "Intern") {
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'intern',
                                    message: "Please enter the interns's name.",
                                },
                                {
                                    type: 'input',
                                    name: 'id',
                                    message: "Please enter the interns's employee ID."
                                },
                                {
                                    type: 'input',
                                    name: 'email',
                                    message: "Please enter the interns's email address.",
                                },
                                {
                                    type: 'input',
                                    name: 'GitHub',
                                    message: "Please enter the intern's school.",
                                },
                            ])
                    }
                })
            // } else (answers.confirm_answer) {
            //   // the user definitely doesn't want pizza
            // } 
        } else {
            const htmlPageContent = generateHTML(answers);
            fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html in the dist folder!')
            );

        }
    })








