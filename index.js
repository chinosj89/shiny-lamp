const inquirer = require('inquirer');
const fs = require('fs');
const userInfo = require('./package.json')
const generateLogo = require('./logo')
const questions = [

    {
        type: 'input',
        message: 'Initials? Please enter up to 3 characters only',
        name: 'initials',
        validate: (input) => {
            if (input.length > 3 || input.length === 0) {
                return new Error('Please enter up to 3 characters only.');
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'What color would you like for the text?',
        name: 'textColor',
        choices: [
            'Crimson',
            'ForestGreen',
            'Gold',
            'MediumPurple',
            'SlateBlue',
            'DarkOrange',
            'White',
            'Black'
        ],
    },
    {
        type: 'list',
        message: 'What color would you like for the background?',
        name: 'backgroundColor',
        choices: [
            'Crimson',
            'ForestGreen',
            'Gold',
            'MediumPurple',
            'SlateBlue',
            'DarkOrange',
            'White',
            'Black'
        ],
        validate: (questions, list) => {
            if (questions['text-color'].length === list) {
                return new Error('Text color and Background are the same color, please choose something else');
            }
            return true;
        }
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
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error('Error!', err) : console.log('Generated logo.svg'))
}

function init() {
    const logoEl = [];
    return inquirer.prompt(questions)
        .then((data) => {
            if (data) {
                console.log(data);
                logoEl.push(generateLogo(data));
                writeToFile('logo.svg', logoEl.join('\n'))
            }
        })
}
init();