//Packages
const inquirer = require('inquirer');
const fs = require('fs');

//Get information from each section
const licenses = require('./license'); 
const badge = require('./badges');
const readmegen = require('./readmegen'); 
const questions = require('./questions'); 

//Generate the READ.ME 
inquirer.prompt(questions).then(answers => {
    //Find licenses and generate
    const license = licenses.find(x => x.name == answers.license);
    const licenseBadge = badge.licensecreator(answers.license, answers.title);
    const badgeType = answers.badgeType ? badge.badgeType(answers.badgeType) : ''
    const badgeRating = answers.badgeRating ? badge.badgeRating(answers.badgeRating) : ''
    const otherBadges = `${badgeType}  ${badgeRating}`;
    const finishedReadMe = readmegen.generateReadMe(answers, license.license, licenseBadge, otherBadges);
    fs.writeFile('./finishedreadme.md', finishedReadMe, err =>{
        if(err){
            console.log(err)
        } else {
            console.log('Your READ.ME is complete')
        }
    });
});