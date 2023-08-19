const inquirer = require('inquirer');
const fs = require('fs');
const userInfo = require('./package.json')
const generateLogo = require('./logo')
const questions = [
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Initials? Please write up to 3 characters only',
            name: 'initials',
            maxLength: 3
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
    
    ])
];

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
          err ? console.error('Error!', err) : console.log('See your Logo!'))
      }

    function init() {
        const logoEl = [];
        return inquirer.prompt(questions)
        .then((data) => {
            if (data) {
                logoEl.push(generateLogo(data));
                writeToFile('logo.svg', logoEl.join('\n'))
            }
        })
    }
    init();