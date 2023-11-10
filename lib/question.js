//check  to see if user's reponse matches one of the colors listed in keywordcolor.js
const colorKeywords = require('./colorKeywords.js')

const question = [
    // ***SHAPE***
    {
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // ****SHAPE COLOR***
    // user choose color keyword or hexadecimal for shapeColor
    {
        name: 'shapeColorChoice',
        message: 'What would you like your shape to be shape? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // color keyword (validate with colorKeywords array)
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the color of your shape's keyword",
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const RegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(RegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },

    // ***TEXT***
    // validate user can only submit 3 characters
    {
        name: 'text',
        message: 'What text would you like to put in? (three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },

    // ***TEXT COLOR***
    // user choose color keyword or hexadecimal for textColor
    {
        name: 'textColorChoice',
        message: 'What color would you like the text to be? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // color keyword (validate with colorKeywords array)
    {
        type: "input",
        name: "textColor",
        message: "Enter the color of text's keyword",
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = question;