// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const gen = require(`./utils/generateMarkdown.js`)
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Describe your project',
    'How do you use your project?',
    'How do you contribute to your project?',
    'What command should be run to insall dependancies?',
    'What command should be run to run tests?',
    'Which license do you use?',
    'PLease enter you GitHub username?',
    'Please enter you email.'
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = 'README.md';

    fsPromises.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Sucess!')
    );
}

const promptUser = () => {
   return inquirer
    .prompt(questions) 
}


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
