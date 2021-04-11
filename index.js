const Handlebars = require("handlebars");
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'What is your team name?',
            validate: function(response) {
                if(response.length < 1 ) {
                    return console.log("Please enter a team name to continue.");
                }
                return true;
            }
        },
        {
            
        }
    ])
}