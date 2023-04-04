//function with array of questions for user input
async function init() {
    //packages needed for this application
    const { default: inquirer } = await import('inquirer');
    const fs = await import('fs');
    const shapes = require('./lib/shapes.js');
    //command line prompts
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'To get started with a new logo, enter up to 3 characters',
                name: 'characters',
            },
            {
                type: 'input',
                message: 'Enter the text color of your choice:',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Pick your shape from the list',
                choices: ['circle', 'triangle', 'square'],
                name: 'shape',
            },
            {
                type: 'input',
                message: 'Enter the shape color of your choice:',
                name: 'shapeColor',
            },
        ])

        // Function to create logo

        .then((answers) => {
            const svg = shapes[answers.shape]
            .replace ('/></', ` fill = "${answers.shapeColor}"/></`)
            .replace ( '</svg>', `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="80" fill="${answers.textColor}">${answers.characters}</text></svg>`)
            fs.writeFile('./examples/logo.svg', svg, (err) => {
                err ? console.error(err) : console.log('Generated logo.svg');
            });
        });
}

// Function call to initialize app
init()