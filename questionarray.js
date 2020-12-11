const questionsArr = [{
    //Name
    type: 'input',
    message: 'What is your name?',
    name: 'username',
    validate: nameInput => {
        if (nameInput.length) {
            return true;
        }
        return 'Must input name';
    }
},
{//Email
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    validate: emailInput => {
        return (/^.+@.+\..+$/gi.test(emailInput) ? true : `Not a valid email`)
    }
},
{//Phone Number
    type: 'input',
    message: 'What is your phone number?',
    name: 'phone',
    default: '111.111.1111'
},
{//Github Username
    type: "input",
    name: "github",
    message: "What is your Github username?"
}
];

module.exports = questionsArr; 