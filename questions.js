const initialQuestions = [{
    //Title
    type: 'input',
    message: 'Project Title',
    name: 'title',
    validate: titleInput => {
        if (titleInput.length) {
            return true;
        }
        return 'Must input project title.';
    }
},
{//Description
    type: 'input',
    message: 'Description of Project',
    name: 'description',
},
{//Installation
    type: "input",
    name: "installation",
    message: "Installation instructions."
},
{//Usage
    type: "input",
    name: "usage",
    message: "How is this project used? "
},
{//Contributing
    type: 'input',
    message: 'Contributing?',
    name: 'contribution guidelines',
},
{//Tests
    type: 'input',
    message: 'Tests?',
    name: 'tests',
},
{//License Checklist
    type: "checkbox",
    name: "license",
    message: "Choose a license.",
    choices: [
        "gpl",
        "apache",
        "mit",
        "mozilla"]
},
{//Badge Type
    type: 'list',
    message: 'Build Badges?',
    name: 'badgeType',
    choices: ['build passing', 'deployment passing', 'checks pending'],
},
{//Badge Rating
    type: 'list',
    message: 'Rating Badges?',
    name: 'badgeRating',
    choices: ['1/5', '2/5', '3/5', '4/5', '5/5'],
},
];

module.exports = initialQuestions;