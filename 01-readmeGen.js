
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown'); //use this to make a new file that has a template for the readme file.
const { getEnabledCategories } = require('trace_events');
// array of questions for user, and this makes sense to me. then, we have the function to write the file that displays the information in the array?

//inquirer prompt for user input. I am guessing that this creates the framework for the file to be created?
//have tutor validate the above.
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        //i guess this is a validation function?
        validate: (value) => { if (value) { return true } else { return 'This cannot be blank ;) ' } },
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'This cannot be blank ;) ' } },

    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return 'This cannot be blank ;) ' } },
    },
    {
        type: 'input',
        message: 'Please provide usage information and explain how your app is used.',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'This cannot be blank ;) ' } },
    },
    {
        type: 'input',
        message: 'Please provide contribution information and credits.',
        name: 'contribution',
        validate: (value) => { if (value) { return true } else { return 'This cannot be blank ;) ' } },
    },
    //figure out the badge thing.
    {
        type: 'checkbox',
        message: 'License used?',
        name: 'license',
        choices: ['MIT', 'Apache', 'None', 'Other'],
    },
    {
        type: 'input',
        message: 'Email.',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'This cannot be blank ;) ' } },

    },
    {
        type: 'input',
        message: 'Github username.',
        name: 'github',
        validate: (value) => { if (value) { return true } else { return 'This cannot be blank ;) ' } },
    }
])
    //below should be the array which the user input is stored in?
    .then((data) => {
        createNewFile(data.title, generateMarkdown(data));
    }
    );
//this is the function that creates the file.
function createNewFile(fileName, data) {
    //this is the file path. i am guessing that this is the file that is created?
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README.md file has been created.');
    })
}


