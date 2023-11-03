//calling to other files from index.js
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/question');
const filesName = require('./examplesCreated/logo.svg');
const setShapes = require('./lib/setShapes');

// starts the initializaiton once the program start to ask user questions and create the svg logo based on response. if response has an error then send back an error.
function init() {
    inquirer
        .prompt(questions)
    then((response) => {
        logoCreate(response);
    })
    .catch(err => {
        console.log(err)
    });
}

// function to create the logo based off the users response
function logoCreate(response) {
    const svg = setShapes(response);
    fs.writeFile(filesName, svg, () => 
    console.log('SVG logo has been created!')
    )
}

// initialize the program.
init();