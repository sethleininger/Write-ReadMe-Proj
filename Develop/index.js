// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generator = require(`./utils/generateMarkdown.js`)

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Describe your project',
    'How do you use your project?',
    'How did you contribute to your project?',
    'What command should be run to install dependancies?',
    'Which license do you use?',
    'PLease enter you GitHub username?',
    'Please enter you email.'
];

// TODO: Create a function to write README file
const fsPromises = fs.promises;

const writeToFile = (fileName, data) => {
    //console.log(generator(data));
    fsPromises.writeFile(fileName, generator(data));
}

const promptUser = () => {
   return inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'contributions',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'installation',
        },
        {
            type: 'list',
            message: questions[5],
            name: 'licenses',
            choices: ['MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0'],
        },
        {
            type: 'input',
            message: questions[6],
            name: 'GitHub',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email',
        },
    ])
    .then((data) => {
        writeToFile("README.md", data);
    })
}


// TODO: Create a function to initialize app

promptUser();
//function init() { }

// Function call to initialize app
//init();
