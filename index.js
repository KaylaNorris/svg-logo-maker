//function with array of questions for user input
async function init() {
    //packages needed for this application
    const { default: inquirer } = await import('inquirer');
    const fs = await import('fs');
    const { default: shapes } = await import('./lib/shapes.js');
    //command line prompts
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'To get started with a new logo, enter up to 3 characters',
                name: 'characters',
            },
            {
                type: 'list',
                message: 'Pick your color from the list',
                choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
                name: 'color',
            },
            {
                type: 'list',
                message: 'Pick your shape from the list',
                choices: ['circle', 'triangle', 'square'],
                name: 'shape',
            },
        ])

        // Function to create logo

        .then((answers) => {
            const svg = shapes[answers.shape]
            .replace ('></', ` fill = ${answers.color}"></`)
            .replace ( '</svg>', `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="80">${answers.logoText}</text></svg>`)
            fs.writeFile('./examples/logo.svg', svg, (err) => {
                err ? console.error(err) : console.log('SVG created!');
            });
        });
}

// Function call to initialize app
init()