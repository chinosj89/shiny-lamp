const inquirer = require('inquirer');
const fs = require('fs');
const userInfo = require('./package.json')
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Initials? Please write up to 3 characters only',
        },
        {
            type: 'input',
            message: 'What color would you like for the text? Provide either the name of the color or the hexadecimal number',
            name: 'text-color',
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            choices: [
                'circle',
                'triangle',
                'square'],
            name: 'shapes',
        },
        {
            type: 'input',
            message: 'What color would you like for the background? Provide either the name of the color or the hexadecimal number',
            name: 'background-color',
        },
    ]);