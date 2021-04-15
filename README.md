# Team Profile Generate ![badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
## Table of Contents
* [Description](#description)
* [Technology Used](#technology)
* [Resources](#resources)
* [Licensing Information](#licensing)
* [GIF Demonstration](#gif)
* [Screenshots](#screenshots)
<br>
<br>

## Description

This is a project using Node.js, the Inquirer package, and the Jest package to build and test a team profile generator. A prerequisite to use this is having Node.js installed on the user's computer. The user can go [here](https://nodejs.org/en/) if they need to install node.js.  The user then navigates to the folder containing index.js within their terminal, then user can run the command *npm init -y* to install the package.json files. Then the user will need to run *npm install inquirer* to install inquirer. The user will also need to run *npm install jest* to install the Jest package to test the functionality of the app. To run tests after installing Jest, the user will type *npm run test* into the terminal to run the four test suites.  Once this is done, the user can run *node index* to run the application. The user will see a series of questions regarding their team manager. These questions include what the team manager's name is, employee ID is, their email address, and office number. The user can then decide it they wish to add an Engineer, Intern, or to not add any additional team members. If the user chooses to add an Enginner, they will be asked to enter the Engineer's name, employee ID, email address, and GitHub username. They will then be asked once again if they would like to add an Engineer, Intern, or no additional team members. If they choose to add an Intern the user will be asked to enter the Intern's name, employee ID number, email address, and school the intern attends. The user, once again, gets to choose to add additional Engineers or Interns, or to finish building their team by choosing "I am done adding team members." Once choosing "I am done adding team members." the generated HTML page with their team will be displayed. There will be an individual card for each team member. Within the manager card will be the manager's name, employee ID, email address, and office number. The Engineer cards will contain the engineer's name, employee ID number, email address, and GitHub username. The Intern cards will display the intern's name, employee ID number, email address, and school they attend. The email addresses will contain a hyperlink to open the native email client, and the GitHub usernames will open a link to the engineer's GitHub profile. The page will also be styld with Bootstrap and some custom CSS. The user can find their generated HTML document in the dist folder.

### Please follow [this link](https://youtu.be/_ASxqr36oww) to watch a video demonstration of the application running.
<br>

## Technology Used
* JavaScript
* Node.js
* Inquirer Package
* Jest package
<br>
<br>

## Resources
* [NPM Inquirer](https://www.npmjs.com/package/inquirer)
* [Changing Node.js CLI text color](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)
<br>
<br>

## Licensing Information
This project is covered under the MIT license.
<br>
<br>

## GIF Demonstration of Application

<br>
<br>

#### Generated HTML Screenshot

<br>
<br>

#### index.js Screenshot

<br>
<br>

#### generateHTML.js Screenshot

<br>
<br>

#### Terminal Screenshot
